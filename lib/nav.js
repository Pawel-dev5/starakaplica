import { fetchAPI } from './fetchAPI';

export async function getPrimaryMenu() {
	const data = await fetchAPI(`
  {
    menus(where: {location: PRIMARY}) {
      nodes {
        menuItems {
          edges {
            node {
              id
              path
              label
              childItems {
                edges {
                  node {
                    id
                    label
                    path
                    parentId
                  }
                }
              }
              parentId
            }
          }
        }
      }
    }
  }
  `);
	return data?.menus?.nodes[0] ?? null;
}

export async function getFooter() {
	const data = await fetchAPI(`
  {
    menus(where: {location: FOOTER}) {
      nodes {
        menuItems {
          edges {
            node {
              id
              path
              label
            }
          }
        }
      }
    }
  }
  
  `);
	return data?.menus?.nodes[0] ?? null;
}
