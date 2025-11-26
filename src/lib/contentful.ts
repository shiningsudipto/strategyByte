type FetchOptions = {
  cache?: RequestCache;
  revalidate?: number;
};

export const fetchFromContentful = async (
  query: string,
  options?: FetchOptions
) => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken =
    process.env.CONTENTFUL_DELIVERY_API || process.env.CONTENTFUL_PREVIEW_API;

  if (!spaceId || !accessToken) {
    throw new Error("Missing Contentful environment variables");
  }

  const fetchConfig: RequestInit = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${accessToken}`,
    },
    body: JSON.stringify({ query }),
  };

  // Apply cache options
  if (options?.cache) {
    fetchConfig.cache = options.cache;
  } else if (options?.revalidate !== undefined) {
    fetchConfig.next = { revalidate: options.revalidate };
  } else {
    fetchConfig.cache = "no-store";
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    fetchConfig
  );

  const data = await response.json();

  if (data.errors) {
    console.error("Contentful API errors:", data.errors);
    throw new Error(
      `Contentful API error: ${data.errors[0]?.message || "Unknown error"}`
    );
  }

  return data;
};

// Helper function to fetch all articles for sitemap
export const fetchAllArticlesForSitemap = async () => {
  const query = `
    {
      newsCollection(limit: 1000, order: sys_publishedAt_DESC) {
        items {
          sys {
            publishedAt
            firstPublishedAt
          }
          slug
        }
      }
    }
  `;

  const data = await fetchFromContentful(query, { revalidate: 3600 }); // Cache for 1 hour
  return data?.data?.newsCollection?.items || [];
};
