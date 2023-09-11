/* eslint-disable no-unused-vars */
import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getFooter } from '../lib/nav';
import { getOfferData, getAllOfferSlugs } from '../lib/offer';

const MoreStories = dynamic(() => import('../components/Offer/MoreStories'));
const Layout = dynamic(() => import('../components/Layout/layout'));

const Blog = ({ allSlugs, menuItems: { menuItems }, footerItems, offerData }) => (
	<Layout
		menuItems={menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		headerText={offerData?.title}
		subHeaderText={offerData?.description}
		seo={offerData?.seo}
	>
		<MoreStories posts={allSlugs?.edges ?? []} />
	</Layout>
);

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const allSlugs = (await getAllOfferSlugs()) ?? null;
	const offerData = (await getOfferData()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
			allSlugs,
			offerData,
		},
		revalidate: 300, // In seconds
	};
}

export default Blog;
