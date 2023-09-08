import { fetchAPI } from './fetchAPI';

export async function getHistoryPage() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDo4OA==") {
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
