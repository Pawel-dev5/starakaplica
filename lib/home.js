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
