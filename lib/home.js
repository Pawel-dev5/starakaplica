import { fetchAPI } from './fetchAPI';

export async function getHomePage() {
	const data = await fetchAPI(`
  {
    pageBy(id: "cG9zdDoxMDQ=") {
      id
      title
      content
      featuredImage {
        node {
          altText
          sourceUrl
        }
      }
      content_blocks {
        contentBlocks {
          summary
          block1 {
            description
            fieldGroupName
            image {
              altText
              sourceUrl
            }
          }
          block2 {
            description
            fieldGroupName
            image {
              altText
              sourceUrl
            }
          }
        }
        fieldGroupName
      }
      seo {
        metadescription
        metatitle
        shareimage {
          altText
          sourceUrl
        }
      }
      slider {
        slider {
          slider1 {
            description
            fieldGroupName
            title
            image {
              altText
              sourceUrl
            }
          }
          slider2 {
            description
            fieldGroupName
            title
            image {
              altText
              sourceUrl
            }
          }
        }
      }
      slider_blocks {
        sliderBlocks {
          fieldGroupName
          block1 {
            title
            description
            fieldGroupName
          }
          block2 {
            title
            description
            fieldGroupName
          }
          block3 {
            title
            description
            fieldGroupName
          }
        }
      }
    }
  }
   `);
	return data?.pageBy;
}

export async function getAllPostsForHome(preview) {
	const data = await fetchAPI(
		`
    query AllPosts {
      posts(first: 20, where: {orderby: {field: DATE, order: DESC}}) {
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
            sliderOffer {
              zdjecie1 {
                altText
                sourceUrl
              }
              zdjecie2 {
                altText
                sourceUrl
              }
              zdjecie3 {
                altText
                sourceUrl
              }
            }
            offerMenu {
              title
              menu {
                zdjecie1 {
                  altText
                  sourceUrl
                }
                zdjecie2 {
                  altText
                  sourceUrl
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
