import { fetchAPI } from './fetchAPI';

export async function getGalleryPage() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDo1Mw==") {
      id
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      seo {
        metadescription
        metatitle
        shareimage {
          altText
          sourceUrl
        }
      }
    }
  }
`);
	return data?.pageBy;
}
