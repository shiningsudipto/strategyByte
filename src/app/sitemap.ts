import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://www.strategybyte.com.au";

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/book-a-session`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/career`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Service routes
  const serviceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/our-services/website-development`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-services/brand-management`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-services/digital-marketing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-services/content-marketing`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.9,
    },
  ];

  // Resource routes
  const resourceRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/resources/byte-articles`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources/case-studies`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  // Fetch dynamic articles from API
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articlesRes = await fetch(
      `${
        process.env.NEXT_PUBLIC_BASE_URL || baseUrl
      }/api/articles?limit=100&skip=0`,
      {
        next: { revalidate: 3600 }, // Revalidate every hour
      }
    );
    if (articlesRes.ok) {
      const articlesData = await articlesRes.json();
      articleRoutes = articlesData.articles.map(
        (article: { slug: string; sys: { publishedAt: string } }) => ({
          url: `${baseUrl}/resources/byte-articles/${article.slug}`,
          lastModified: new Date(article.sys.publishedAt),
          changeFrequency: "weekly" as const,
          priority: 0.7,
        })
      );
    }
  } catch (error) {
    console.error("Error fetching articles for sitemap:", error);
  }

  // Combine all routes
  return [
    ...staticRoutes,
    ...serviceRoutes,
    ...resourceRoutes,
    ...articleRoutes,
  ];
}
