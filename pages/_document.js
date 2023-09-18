import Document, { Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="pl">
				<Head>
					{/* <!-- Google Tag Manager && Google Analytics --> */}
					{/* <script
						dangerouslySetInnerHTML={{
							__html: `(function(w,d,s,l,i){
							w[l]=w[l]||[];
							w[l].push({'gtm.start':	new Date().getTime(),event:'gtm.js'});
							var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
							j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
							})(window,document,'script','dataLayer','GTM-MNP6WP4');`,
						}}
					/>
					<script async src="https://www.googletagmanager.com/gtag/js?id=G-93GN096F3Y" />
					<script
						dangerouslySetInnerHTML={{
							__html: `window.dataLayer = window.dataLayer || [];
							function gtag(){dataLayer.push(arguments);}
							gtag('js', new Date());
							
							gtag('config', 'G-93GN096F3Y');`,
						}}
					/> */}
				</Head>

				{/* FONTS */}
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
				<link
					rel="stylesheet"
					href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&amp;display=swap"
				/>

				{/* FONT AWESOME */}
				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.2/css/all.min.css"
					integrity="sha512-1sCRPdkRXhBV2PBLUdRb4tMg1w2YPf37qatUFeS7zlBy7jJI8Lf4VHwWfZZfpXtYSLy85pkm9GaYVYMfw5BC1A=="
					crossOrigin="anonymous"
					referrerPolicy="no-referrer"
				/>

				<body>
					{/* <!-- Google Tag Manager (noscript) --> */}
					{/* <noscript
						dangerouslySetInnerHTML={{
							__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MNP6WP4" height="0" width="0" style="display:none;visibility:hidden" />`,
						}}
					/> */}

					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}

	// STYLED COMPONENTS CONFIG
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
				});

			const initialProps = await Document.getInitialProps(ctx);

			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
