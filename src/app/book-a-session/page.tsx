import Contact from "@/components/shared/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Strategy Session | StrategyByte",
  description:
    "Ready to grow? Book a free consultation with our digital experts. Let's discuss your goals, SEO needs, and how we can maximize your ROI.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/book-a-session",
  },
  openGraph: {
    title: "Book a Strategy Session | StrategyByte",
    description:
      "Ready to grow? Book a free consultation with our digital experts. Let's discuss your goals, SEO needs, and how we can maximize your ROI.",
    url: "https://www.strategybyte.com.au/book-a-session",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Book a Strategy Session with StrategyByte",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Book a Strategy Session | StrategyByte",
    card: "summary_large_image",
    description:
      "Ready to grow? Book a free consultation with our digital experts. Let's discuss your goals, SEO needs, and how we can maximize your ROI.",
    images: ["/logo/twitter-card.png"],
  },
};

const page = () => {
  return (
    <div>
      <Contact bg="" />
    </div>
  );
};

export default page;
