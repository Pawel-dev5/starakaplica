import { getServerSideSitemapIndex } from 'next-sitemap';

export const getServerSideProps = async (ctx) =>
	// Method to source urls from cms
	// const urls = await fetch('https//example.com/api')

	getServerSideSitemapIndex(ctx, [
		'https://stara-kaplica.pl/',
		'https://stara-kaplica.pl/oferta/',
		'https://stara-kaplica.pl/oferta/wesela',
		'https://stara-kaplica.pl/oferta/pokazy-targi',
		'https://stara-kaplica.pl/oferta/konferencje-spotkania-biznesowe-szkolenia',
		'https://stara-kaplica.pl/oferta/przyjęcia-okolicznościowe',
		'https://stara-kaplica.pl/przestrzen-historia/',
		'https://stara-kaplica.pl/galeria/',
		'https://stara-kaplica.pl/kontakt/',
	]);

// Default export to prevent next.js errors
export default function SitemapIndex() {}
