/** @type {import('next-sitemap').IConfig} */

const config = {
	siteUrl: 'https://stara-kaplica.pl/',
	generateRobotsTxt: true,
	sitemapSize: 7000,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: '/',
			},
		],

		additionalSitemaps: ['https://stara-kaplica.pl/server-sitemap-index.xml'],
	},
};

module.exports = config;
