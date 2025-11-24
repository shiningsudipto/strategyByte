import { fetchFromContentful } from "@/lib/contentful";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const limit = parseInt(searchParams.get("limit") || "4");
  const skip = parseInt(searchParams.get("skip") || "0");

  const articleBlogsQuery = `
    {
      newsCollection(limit: ${limit}, skip: ${skip}, order: sys_publishedAt_DESC) {
        total
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
    const res = await fetchFromContentful(articleBlogsQuery);
    return NextResponse.json({
      articles: res?.data?.newsCollection?.items || [],
      total: res?.data?.newsCollection?.total || 0,
    });
  } catch (error) {
    console.error("Error fetching articles:", error);
    return NextResponse.json(
      { error: "Failed to fetch articles" },
      { status: 500 }
    );
  }
}
