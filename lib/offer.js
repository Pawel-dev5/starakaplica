import { fetchAPI } from './fetchAPI';

export async function getOfferData() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoxNTU=") {
      id
      title
      content
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

export async function getAllOfferSlugs(preview) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: ASC}}) {
        edges {
          node {
            id
            title
            excerpt
            content
            slug
            date
            featuredImage {
              node {
                sourceUrl
              }
            }
            author {
              node {
                name
                firstName
                lastName
                avatar {
                  url
                }
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
      }
    }
  `,
		{
			variables: {
				onlyEnabled: !preview,
				preview,
			},
		},
	);

	return data?.posts;
}
