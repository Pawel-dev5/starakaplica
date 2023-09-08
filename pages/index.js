import dynamic from 'next/dynamic';

// API
import { getHomePage } from '../lib/home';
import { getPrimaryMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const HomePage = dynamic(() => import('../components/Home/HomePage'));

const Home = ({ menuItems: { menuItems }, footerItems, homePageData }) => (
	<Layout menuItems={menuItems?.edges} footerItems={footerItems?.menuItems?.edges} seo={homePageData?.seo}>
		<HomePage homePageData={homePageData} />
	</Layout>
);

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const homePageData = (await getHomePage()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
			homePageData,
		},
		revalidate: 300, // In seconds
	};
}

export default Home;
