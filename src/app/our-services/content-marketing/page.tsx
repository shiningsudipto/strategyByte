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
  contentMarketingProcess,
  contentMarketingServices,
  faq,
  hero,
  importancy,
  info,
  marketing,
  successStories,
} from "@/constants/service.contentMarketing";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Content Marketing Services | StrategyByte",
  description:
    "Engage your audience with high-impact content. We craft blogs, videos, and visuals that establish authority and drive organic traffic.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/our-services/content-marketing",
  },
  openGraph: {
    title: "Content Marketing Services | StrategyByte",
    description:
      "Engage your audience with high-impact content. We craft blogs, videos, and visuals that establish authority and drive organic traffic.",
    url: "https://www.strategybyte.com.au/our-services/content-marketing",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Content Marketing Services - StrategyByte",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Content Marketing Services | StrategyByte",
    card: "summary_large_image",
    description:
      "Engage your audience with high-impact content. We craft blogs, videos, and visuals that establish authority and drive organic traffic.",
    images: ["/logo/twitter-card.png"],
  },
};

const page = () => {
  return (
    <main>
      <Hero {...hero} />
      <Marketing {...marketing} />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
      <Info {...info} />
      <Importancy {...importancy} />
      <Impact />
      <SEOServices {...contentMarketingServices} />
      <MarketingFields />
      <MarketingProcess {...contentMarketingProcess} />
      <SuccessStories {...successStories} />
      <Area />
      <Offering id="marketing" />
      <Reviews />
      <FAQS {...faq} />
      <Contact />
    </main>
  );
};

export default page;
