import dynamic from 'next/dynamic';

// API
import { getHistoryPage } from '../lib/history';
import { getPrimaryMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const SpaceHistory = dynamic(() => import('../components/space-history'));

const Index = ({ menuItems: { menuItems }, footerItems, historyData }) => (
	<Layout
		menuItems={menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		headerImg={historyData?.featuredImage?.node}
		headerText={historyData?.title}
		seo={historyData?.seo}
	>
		<SpaceHistory historyData={historyData} />
	</Layout>
);

export default Index;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const historyData = (await getHistoryPage()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
			historyData,
		},
		revalidate: 300, // In seconds
	};
}
