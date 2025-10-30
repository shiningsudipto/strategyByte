export const articleBlogDetailsQuery = `
    {
      newsCollection(limit: 1000) {
        items {
          sys { id }
          title
          slug
          description
          metaDescription
          thumbnail {
            url
          }
          blogCategory {
            ... on BlogCategory {
              title
              slug
            }
          }
          bodyText {
            json
          }
        }
      }
    }
  `;

export const articleBlogsQuery = `
    {
      newsCollection(limit: 6) {
        items {
          sys { id }
          title
          slug
          description
          thumbnail {
            url
          }
          blogCategory {
            ... on BlogCategory {
              title
              slug
            }
          }
        }
      }
    }
  `;

export const videoEmbedQuery = `
    {
      videoEmbedCollection(limit: 1000) {
        items {
          sys { id }
          title
          embedUrl
        }
      }
    }
  `;
