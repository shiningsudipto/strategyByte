import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type FAQItem = {
  question: string;
  answer: string;
  points?: string[];
};

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.points && faq.points.length > 0
          ? `${faq.answer} ${faq.points.join(" ")}`
          : faq.answer,
      },
    })),
  };
}

type ArticleSchemaProps = {
  title: string;
  description: string;
  url: string;
  imageUrl: string;
  publishedAt: string;
  author?: string;
  category?: string;
};

export function generateArticleSchema({
  title,
  description,
  url,
  imageUrl,
  publishedAt,
  author = "StrategyByte",
  category,
}: ArticleSchemaProps) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: title,
    description: description,
    image: imageUrl,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: author,
      url: "https://www.strategybyte.com.au",
    },
    publisher: {
      "@type": "Organization",
      name: "StrategyByte",
      url: "https://www.strategybyte.com.au",
      logo: {
        "@type": "ImageObject",
        url: "https://www.strategybyte.com.au/logo/open-graph-image.png",
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
    ...(category && { articleSection: category }),
  };
}
