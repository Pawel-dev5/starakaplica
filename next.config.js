const nextConfig = {
	reactStrictMode: true,
	trailingSlash: true,
	images: {
		domains: [
			'https://stara-kaplica.pl/',
			'https://starakaplicacms.pawelnowecki.pl',
			'starakaplicacms.pawelnowecki.pl',
			'assets.vercel.com',
			'secure.gravatar.com',
		],
		// loader: "imgix",
		// path: "",
	},
	async headers() {
		return [
			{
				source: '/:all*(svg|jpg|png)',
				locale: false,
				headers: [
					{
						key: 'Cache-Control',
						value: 'public, max-age=31536000, must-revalidate',
					},
				],
			},
		];
	},
	devServer: {
		proxy: {
			'/api': 'http://localhost:3000',
		},
	},
};

module.exports = nextConfig;
