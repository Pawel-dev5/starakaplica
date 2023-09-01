import dynamic from 'next/dynamic';

// API
import { getAboutUsPage } from '../lib/aboutUs';
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const SpaceHistory = dynamic(() => import('../components/space-history'));

const Index = ({ menuItems: { menuItems }, subMenuItems, footerItems, aboutUsData }) => (
	<Layout
		menuItems={menuItems?.edges}
		subMenuItems={subMenuItems?.menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		headerImg={aboutUsData?.featuredImage?.node}
		headerText={aboutUsData?.title}
		seo={aboutUsData?.seo}
	>
		<SpaceHistory aboutUsData={aboutUsData} />
	</Layout>
);

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const subMenuItems = (await getSubMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const aboutUsData = (await getAboutUsPage()) ?? null;

	return {
		props: {
			menuItems,
			subMenuItems,
			footerItems,
			aboutUsData,
		},
		revalidate: 300, // In seconds
	};
}
