export const fetchFromContentful = async (query: string) => {
  const spaceId = process.env.CONTENTFUL_SPACE_ID;
  const accessToken = process.env.CONTENTFUL_DELIVERY_API || process.env.CONTENTFUL_PREVIEW_API;

  if (!spaceId || !accessToken) {
    throw new Error("Missing Contentful environment variables");
  }

  const response = await fetch(
    `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${accessToken}`,
      },
      body: JSON.stringify({ query }),
      cache: "no-store",
    }
  );

  const data = await response.json();

  if (data.errors) {
    console.error("Contentful API errors:", data.errors);
    throw new Error(`Contentful API error: ${data.errors[0]?.message || "Unknown error"}`);
  }

  return data;
};
