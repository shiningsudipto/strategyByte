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
  faq,
  hero,
  successStories,
  webDevelopment,
  webDevelopmentProcess,
  webDevelopmentServices,
  webDevImportance,
  webDevInfo,
} from "@/constants/service.web.constants";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Custom Website Development Services | StrategyByte",
  description:
    "Fast, secure, and conversion-focused websites. We build custom web solutions that look great and perform perfectly on all devices.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/our-services/website-development",
  },
  openGraph: {
    title: "Custom Website Development Services | StrategyByte",
    description:
      "Fast, secure, and conversion-focused websites. We build custom web solutions that look great and perform perfectly on all devices.",
    url: "https://www.strategybyte.com.au/our-services/website-development",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Custom Website Development Services - StrategyByte",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Custom Website Development Services | StrategyByte",
    card: "summary_large_image",
    description:
      "Fast, secure, and conversion-focused websites. We build custom web solutions that look great and perform perfectly on all devices.",
    images: ["/logo/twitter-card.png"],
  },
};

const page = () => {
  return (
    <main className="">
      <Hero {...hero} />
      <Marketing {...webDevelopment} />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
      <Info {...webDevInfo} />
      <Importancy {...webDevImportance} />
      <Impact />
      <SEOServices {...webDevelopmentServices} />
      <MarketingFields />
      <MarketingProcess {...webDevelopmentProcess} />
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
