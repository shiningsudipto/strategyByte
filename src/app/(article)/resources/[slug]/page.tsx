import { fetchFromContentful } from "@/lib/contentful";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import {
  documentToReactComponents,
  Options,
} from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES, Document } from "@contentful/rich-text-types";
import React from "react";
import ShareButtons from "./ShareButtons";
import NextToRead from "../../_components/NextToRead";
import type { Metadata } from "next";
import { generateArticleSchema } from "@/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

// Generate dynamic metadata
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;

  const articleBySlugQuery = `
    {
      newsCollection(where: { slug: "${slug}" }, limit: 1) {
        items {
          title
          slug
          description
          metaDescription
          thumbnail {
            url
          }
          sys {
            publishedAt
          }
        }
      }
    }
  `;

  const res = await fetchFromContentful(articleBySlugQuery);
  const article = res?.data?.newsCollection?.items?.[0];

  if (!article) {
    return {
      title: "Article Not Found | StrategyByte",
      description: "The requested article could not be found.",
    };
  }

  const metaDescription =
    article.metaDescription || article.description || article.title;
  const imageUrl = article.thumbnail?.url || "/logo/open-graph-image.png";
  const canonicalUrl = `https://www.strategybyte.com.au/resources/${slug}`;

  return {
    title: `${article.title} | StrategyByte`,
    description: metaDescription,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: metaDescription,
      url: canonicalUrl,
      siteName: "StrategyByte",
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en-US",
      type: "article",
      publishedTime: article.sys?.publishedAt,
    },
    twitter: {
      title: article.title,
      card: "summary_large_image",
      description: metaDescription,
      images: [imageUrl],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-snippet": -1,
        "max-image-preview": "large",
        "max-video-preview": -1,
      },
    },
  };
}

const ArticleDetailPage = async ({ params }: Props) => {
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
          metaDescription
          bodyText {
            json
          }
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

  const res = await fetchFromContentful(articleBySlugQuery);
  const article = res?.data?.newsCollection?.items?.[0];

  console.log("Article data:", article);

  if (!article) {
    return (
      <div className="container py-10">
        <p>Article not found</p>
      </div>
    );
  }

  // Rich text rendering options
  const renderOptions: Options = {
    renderNode: {
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <p className="mb-4 text-neutral-700 leading-relaxed">{children}</p>
      ),
      [BLOCKS.HEADING_1]: (_node, children) => (
        <h1 className="text-4xl font-bold text-neutral-800 mb-4 mt-8">
          {children}
        </h1>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <h2 className="text-3xl font-bold text-neutral-800 mb-4 mt-6">
          {children}
        </h2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <h3 className="text-2xl font-bold text-neutral-800 mb-3 mt-5">
          {children}
        </h3>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <h4 className="text-xl font-bold text-neutral-800 mb-3 mt-4">
          {children}
        </h4>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <h5 className="text-lg font-bold text-neutral-800 mb-2 mt-3">
          {children}
        </h5>
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <h6 className="text-base font-bold text-neutral-800 mb-2 mt-3">
          {children}
        </h6>
      ),
      [BLOCKS.UL_LIST]: (_node, children) => (
        <ul className="list-disc ml-6 mb-4 space-y-1">{children}</ul>
      ),
      [BLOCKS.OL_LIST]: (_node, children) => (
        <ol className="list-decimal ml-6 mb-4 space-y-1">{children}</ol>
      ),
      [BLOCKS.LIST_ITEM]: (_node, children) => {
        // Remove the wrapping paragraph if it exists to prevent line breaks
        const content = React.Children.toArray(children).map((child, index) => {
          if (React.isValidElement(child) && child.type === "p") {
            return (
              <React.Fragment key={index}>
                {(child.props as { children: React.ReactNode }).children}
              </React.Fragment>
            );
          }
          return child;
        });
        return <li className="text-neutral-700">{content}</li>;
      },
      [BLOCKS.QUOTE]: (_node, children) => (
        <blockquote className="border-l-4 border-neutral-300 pl-4 py-2 mb-4 italic text-neutral-600">
          {children}
        </blockquote>
      ),
      [BLOCKS.TABLE]: (_node, children) => {
        // Separate header rows from body rows
        const rows = React.Children.toArray(children);
        const hasHeader =
          rows.length > 0 &&
          React.isValidElement(rows[0]) &&
          React.Children.toArray(
            (rows[0].props as { children: React.ReactNode }).children
          ).some((child) => React.isValidElement(child) && child.type === "th");

        if (hasHeader) {
          return (
            <div className="overflow-x-auto mb-6">
              <table className="min-w-full border-collapse border border-neutral-300">
                <thead>{rows[0]}</thead>
                <tbody>{rows.slice(1)}</tbody>
              </table>
            </div>
          );
        }

        return (
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full border-collapse border border-neutral-300">
              <tbody>{children}</tbody>
            </table>
          </div>
        );
      },
      [BLOCKS.TABLE_ROW]: (_node, children) => (
        <tr className="border-b border-neutral-300">{children}</tr>
      ),
      [BLOCKS.TABLE_HEADER_CELL]: (_node, children) => (
        <th className="border border-neutral-300 px-4 py-2 bg-neutral-100 text-left font-semibold text-neutral-800">
          {children}
        </th>
      ),
      [BLOCKS.TABLE_CELL]: (_node, children) => (
        <td className="border border-neutral-300 px-4 py-2 text-neutral-700">
          {children}
        </td>
      ),
      [INLINES.HYPERLINK]: (node, children) => (
        <a
          href={node.data.uri}
          className="text-blue-600 hover:underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      ),
    },
  };

  // Generate Article schema
  const articleSchema = generateArticleSchema({
    title: article.title,
    description: article.metaDescription || article.description || article.title,
    url: `https://www.strategybyte.com.au/resources/${article.slug}`,
    imageUrl: article?.thumbnail?.url || "/logo/open-graph-image.png",
    publishedAt: article.sys?.publishedAt,
    category: article.blogCategory?.title,
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <div className="container section-gap my-10">
        <div className="flex items-center gap-1 mb-10 text-sm text-neutral-600">
          <p>Home</p>
          <ChevronRight size={16} />
          <p>Resources</p>
          <ChevronRight size={16} />
          <p>Articles</p>
        </div>
        <h1 className="font-chopin text-neutral-700 text-5xl font-bold mb-4">
          {article.title}
        </h1>
      {article.description && (
        <p className="text-xl text-neutral-600 mb-6">{article.description}</p>
      )}
      <Image
        src={article?.thumbnail?.url}
        width={1280}
        height={720}
        alt={article.title}
        className="border border-neutral-200 mb-8 object-cover w-full rounded-lg"
      />

      <div className="prose prose-lg max-w-none">
        {article.bodyText?.json &&
          documentToReactComponents(
            article.bodyText.json as Document,
            renderOptions
          )}
      </div>

      {/* Category & Share Section */}
      <div className="flex items-center justify-between mt-10">
        <div className="flex items-center gap-3">
          {article.blogCategory && (
            <span className="bg-yellow-100 rounded-xl border border-yellow-200 text-neutral-700 px-3 py-1.5 font-semibold text-sm">
              {article.blogCategory.title}
            </span>
          )}
        </div>
        <ShareButtons
          url={`https://www.strategybyte.com.au/resources/${article.slug}`}
        />
      </div>
      <NextToRead
        categorySlug={article.blogCategory?.slug}
        currentArticleSlug={article.slug}
      />
      </div>
    </>
  );
};

export default ArticleDetailPage;
