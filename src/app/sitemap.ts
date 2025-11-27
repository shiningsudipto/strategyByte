import { MetadataRoute } from "next";
import { jobs } from "./career/_components/RecruitmentSection";
import { fetchAllArticlesForSitemap } from "@/lib/contentful";

/**
 * Dynamic Sitemap Generator
 *
 * Generates a sitemap.xml file that includes:
 * - Static pages (home, about, services, etc.)
 * - Dynamic resource pages (articles from Contentful)
 * - Career/job postings
 *
 * Articles are fetched from Contentful and cached for 1 hour.
 * The sitemap is automatically regenerated when articles are published/updated.
 *
 * Access at: https://www.strategybyte.com.au/sitemap.xml
 */
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
      url: `${baseUrl}/our-services/strategic-brand-management`,
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

  // Fetch dynamic articles from Contentful
  let articleRoutes: MetadataRoute.Sitemap = [];
  try {
    const articles = await fetchAllArticlesForSitemap();

    articleRoutes = articles.map(
      (article: {
        slug: string;
        sys: {
          publishedAt: string;
          firstPublishedAt: string;
        };
      }) => ({
        url: `${baseUrl}/resources/${article.slug}`,
        lastModified: new Date(
          article.sys.publishedAt || article.sys.firstPublishedAt
        ),
        changeFrequency: "weekly" as const,
        priority: 0.7,
      })
    );

    console.log(
      `✅ Successfully generated sitemap with ${articleRoutes.length} articles`
    );
  } catch (error) {
    console.error("❌ Error fetching articles for sitemap:", error);
    // Return empty array on error - sitemap will still work with other routes
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
