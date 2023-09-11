/* eslint-disable no-unused-vars */
import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import dynamic from 'next/dynamic';

// STATE
import { getPrimaryMenu, getFooter } from '../../lib/nav';
import { getPostAndMorePosts } from '../../lib/offerSlug';
import { getAllOfferSlugs } from '../../lib/offer';

// COMPONENTS
const Layout = dynamic(() => import('../../components/Layout/layout'));
const MoreStories = dynamic(() => import('../../components/Offer/MoreStories'));
const HeroPost = dynamic(() => import('../../components/Offer/HeroPost'));

const Post = ({ post, posts, menuItems, footerItems }) => {
	const router = useRouter();
	const morePosts = posts?.edges;

	if (!router.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404} />;
	}
	const newSeo = {
		...post?.seo,
		shareimage: {
			altText: post?.seo?.shareimage?.altText !== '' ? post?.seo?.shareimage?.altText : post?.title,
			sourceUrl: post?.seo?.shareimage?.sourceUrl ?? post?.featuredImage?.node?.sourceUrl,
		},
	};

	return (
		<Layout
			headerText={post?.title}
			slug={post?.slug}
			menuItems={menuItems?.menuItems?.edges}
			footerItems={footerItems?.menuItems?.edges}
			seo={newSeo}
		>
			<HeroPost {...post} />
			{morePosts?.length > 0 && <MoreStories posts={morePosts} />}
		</Layout>
	);
};

export default Post;

export async function getStaticProps({ params, preview = false, previewData }) {
	const data = await getPostAndMorePosts(params.slug, preview, previewData);
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;

	return {
		props: {
			preview,
			post: data?.post,
			posts: data?.posts,
			menuItems,
			footerItems,
		},
		revalidate: 300, // In seconds
	};
}

export async function getStaticPaths() {
	const allSlugs = await getAllOfferSlugs();

	return {
		paths: allSlugs?.edges?.map(({ node }) => `/oferta/${node?.slug}`) || [],
		fallback: true,
	};
}
