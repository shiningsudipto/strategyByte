import Contact from "@/components/module/home/Contact";
import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Impact from "@/components/module/services/Impact";
import Importancy from "@/components/module/services/Importancy";
import Info from "@/components/module/services/Info";
import Marketing from "@/components/module/services/Marketing";
import MarketingFields from "@/components/module/services/MarketingFields";
import MarketingProcess from "@/components/module/services/MarketingProcess";
import Offering from "@/components/module/services/Offering";
import Reviews from "@/components/module/services/Reviews";
import SEOServices from "@/components/module/services/SEOServices";
import SuccessStories from "@/components/module/services/SuccessStories";
import Area from "@/components/shared/Area";
import FAQS from "@/components/shared/FAQS";
import {
  brandImportance,
  brandInfo,
  brandManagement,
  brandManagementProcess,
  brandManagementServices,
  faq,
  hero,
  successStories,
} from "@/constants/service.brand";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Brand Strategy & Management | StrategyByte",
  description:
    "Build a brand that lasts. From visual identity to tone of voice, we help you define your unique value proposition and foster loyalty.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/our-services/brand-management",
  },
  openGraph: {
    title: "Brand Strategy & Management | StrategyByte",
    description:
      "Build a brand that lasts. From visual identity to tone of voice, we help you define your unique value proposition and foster loyalty.",
    url: "https://www.strategybyte.com.au/our-services/brand-management",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Brand Strategy & Management - StrategyByte",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Brand Strategy & Management | StrategyByte",
    card: "summary_large_image",
    description:
      "Build a brand that lasts. From visual identity to tone of voice, we help you define your unique value proposition and foster loyalty.",
    images: ["/logo/twitter-card.png"],
  },
};

const page = () => {
  return (
    <main>
      <Hero {...hero} />
      <Marketing {...brandManagement} />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
      <Info {...brandInfo} />
      <Importancy {...brandImportance} />
      <Impact />
      <SEOServices {...brandManagementServices} />
      <MarketingFields />
      <MarketingProcess {...brandManagementProcess} />
      <SuccessStories {...successStories} />
      <Area />
      <Offering />
      <Reviews />
      <FAQS {...faq} />
      <Contact />
    </main>
  );
};

export default page;
