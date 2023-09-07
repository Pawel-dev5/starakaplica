import dynamic from 'next/dynamic';
import { SRLWrapper } from 'simple-react-lightbox';

// API
import { getGalleryPage } from '../lib/gallery';
import { getPrimaryMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const Gallery = dynamic(() => import('../components/gallery'));

const Index = ({ menuItems: { menuItems }, footerItems, galleryPage }) => (
	<Layout
		menuItems={menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		headerText={galleryPage?.title}
		headerImg={galleryPage?.featuredImage?.node}
		subHeaderText={galleryPage?.galeria?.galleryHeader}
		seo={galleryPage?.seo}
	>
		<SRLWrapper>
			<Gallery content={galleryPage?.content} />
		</SRLWrapper>
	</Layout>
);

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const galleryPage = (await getGalleryPage()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
			galleryPage,
		},
		revalidate: 300, // In seconds
	};
}
