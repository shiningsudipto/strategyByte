/* eslint-disable @typescript-eslint/no-explicit-any */
import { fetchFromContentful } from "@/lib/contentful";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ categorySlug: string }> }
) {
  const { categorySlug } = await params;
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "4");
  const excludeSlug = searchParams.get("excludeSlug") || "";

  // First, fetch all articles and filter client-side
  // Since blogCategory filtering doesn't work in the where clause
  const articlesByCategoryQuery = `
    {
      newsCollection(
        limit: 100
        order: sys_publishedAt_DESC
      ) {
        items {
          sys {
            id
            publishedAt
          }
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

  try {
    const res = await fetchFromContentful(articlesByCategoryQuery);
    let articles = res?.data?.newsCollection?.items || [];

    // Filter by category slug
    articles = articles.filter(
      (article: any) => article.blogCategory?.slug === categorySlug
    );

    // Exclude current article if specified
    if (excludeSlug) {
      articles = articles.filter(
        (article: any) => article.slug !== excludeSlug
      );
    }

    // Apply limit
    articles = articles.slice(0, limit);

    return NextResponse.json(articles);
  } catch (error) {
    console.error("Error fetching articles by category:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
