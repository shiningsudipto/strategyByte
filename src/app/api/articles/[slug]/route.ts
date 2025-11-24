import { fetchFromContentful } from "@/lib/contentful";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;

  const articleBySlugQuery = `
    {
      newsCollection(where: { slug: "${slug}" }, limit: 1) {
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
    const res = await fetchFromContentful(articleBySlugQuery);
    const article = res?.data?.newsCollection?.items?.[0];

    if (!article) {
      return NextResponse.json(
        { error: "Article not found" },
        { status: 404 }
      );
    }

    return NextResponse.json(article);
  } catch (error) {
    console.error("Error fetching article:", error);
    return NextResponse.json(
      { error: "Failed to fetch article" },
      { status: 500 }
    );
  }
}
