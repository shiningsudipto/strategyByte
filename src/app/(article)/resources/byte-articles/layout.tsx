import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Byte Articles | Digital Marketing Insights",
  description:
    "Stay ahead with the latest trends. Read our articles on SEO, NDIS marketing, technology, and business growth strategies.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/resources/byte-articles",
  },
  openGraph: {
    title: "Byte Articles | Digital Marketing Insights",
    description:
      "Stay ahead with the latest trends. Read our articles on SEO, NDIS marketing, technology, and business growth strategies.",
    url: "https://www.strategybyte.com.au/resources/byte-articles",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Byte Articles - Digital Marketing Insights",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Byte Articles | Digital Marketing Insights",
    card: "summary_large_image",
    description:
      "Stay ahead with the latest trends. Read our articles on SEO, NDIS marketing, technology, and business growth strategies.",
    images: ["/logo/twitter-card.png"],
  },
};

export default function ByteArticlesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
