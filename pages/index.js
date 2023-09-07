import dynamic from 'next/dynamic';

// API
import { getHomePage } from '../lib/home';
import { getPrimaryMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const HomePage = dynamic(() => import('../components/Home/HomePage'));

const Home = ({ menuItems: { menuItems }, footerItems, homePage }) => (
	<Layout menuItems={menuItems?.edges} footerItems={footerItems?.menuItems?.edges} seo={homePage?.node?.seo}>
		{/* <HomePage mainData={homePage?.node} /> */}
	</Layout>
);

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	// const homePage = (await getHomePage()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
			// homePage,
		},
		revalidate: 300, // In seconds
	};
}

export default Home;
