import dynamic from 'next/dynamic';

// API
import { getContactData } from '../lib/contact';
import { getPrimaryMenu, getFooter } from '../lib/nav';

// COMPONENTS
const Layout = dynamic(() => import('../components/Layout/layout'));
const Contact = dynamic(() => import('../components/contact'));

const Index = ({ menuItems: { menuItems }, footerItems, contactData, formConfig }) => (
	<Layout
		menuItems={menuItems?.edges}
		footerItems={footerItems?.menuItems?.edges}
		headerText={contactData?.title}
		seo={contactData?.seo}
	>
		<Contact
			footerItems={footerItems?.menuItems?.edges}
			userId={formConfig?.userId}
			serviceId={formConfig?.serviceId}
			tamplateId={formConfig?.tamplateId}
			{...contactData?.kontakt}
		/>
	</Layout>
);

export async function getStaticProps() {
	const menuItems = (await getPrimaryMenu()) ?? null;
	const footerItems = (await getFooter()) ?? null;
	const contactData = (await getContactData()) ?? null;
	// const formConfig = (await getConfig()) ?? null;

	return {
		props: {
			menuItems,
			footerItems,
			contactData,
			// formConfig,
		},
		revalidate: 300, // In seconds
	};
}

export default Index;
