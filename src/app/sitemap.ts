import { MetadataRoute } from "next";
import { jobs } from "./career/_components/RecruitmentSection";

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
      priority: 0.8,
    },
    {
      url: `${baseUrl}/resources`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.64,
    },
    {
      url: `${baseUrl}/terms-and-condition`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
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

  // Career routes (job postings)
  const careerRoutes: MetadataRoute.Sitemap = jobs.map((job) => ({
    url: `${baseUrl}/career/${job.id}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.64,
  }));

  // Fetch dynamic articles directly from Contentful
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const spaceId = process.env.CONTENTFUL_SPACE_ID;
    const accessToken = process.env.CONTENTFUL_DELIVERY_API || process.env.CONTENTFUL_PREVIEW_API;

    if (spaceId && accessToken) {
      const articleBlogsQuery = `
        {
          newsCollection(limit: 100, order: sys_publishedAt_DESC) {
            items {
              sys {
                publishedAt
              }
              slug
            }
          }
        }
      `;

      const response = await fetch(
        `https://graphql.contentful.com/content/v1/spaces/${spaceId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ query: articleBlogsQuery }),
          next: { revalidate: 3600 }, // Revalidate every hour
        }
      );

      const data = await response.json();
      const articles = data?.data?.newsCollection?.items || [];

      articleRoutes = articles.map(
        (article: { slug: string; sys: { publishedAt: string } }) => ({
          url: `${baseUrl}/resources/${article.slug}`,
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
    ...careerRoutes,
    ...articleRoutes,
  ];
}
