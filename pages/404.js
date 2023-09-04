import dynamic from 'next/dynamic';

// API
import { getPrimaryMenu, getSubMenu, getFooter } from '../lib/nav';
import { Custom404 as Page } from '../components/custom404';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));

const Custom404 = ({ menuItems: { menuItems }, footerItems }) => (
	<Layout menuItems={menuItems?.edges} footerItems={footerItems?.menuItems?.edges}>
		<Page />
	</Layout>
);

export default Custom404;

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
		},
		//   revalidate: 10, // In seconds
	};
}
