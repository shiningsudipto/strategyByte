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
import type { Metadata } from "next";
// constants
import {
  faq,
  hero,
  importancy,
  info,
  marketing,
  marketingProcess,
  seoServices,
  successStories,
} from "@/constants/service.marketing";
import { getOpenGraphImages, getTwitterImages } from "@/constants/metadata.constants";

export const metadata: Metadata = {
  title: "Digital Marketing & SEO Services | StrategyByte",
  description:
    "Drive traffic and generate leads. Our holistic digital marketing services include SEO, PPC, and social media campaigns tailored to your goals.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/our-services/digital-marketing",
  },
  openGraph: {
    title: "Digital Marketing & SEO Services | StrategyByte",
    description:
      "Drive traffic and generate leads. Our holistic digital marketing services include SEO, PPC, and social media campaigns tailored to your goals.",
    url: "https://www.strategybyte.com.au/our-services/digital-marketing",
    siteName: "StrategyByte",
    images: getOpenGraphImages("Digital Marketing & SEO Services - StrategyByte"),
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Digital Marketing & SEO Services | StrategyByte",
    card: "summary_large_image",
    description:
      "Drive traffic and generate leads. Our holistic digital marketing services include SEO, PPC, and social media campaigns tailored to your goals.",
    images: getTwitterImages(),
  },
};

const page = () => {
  return (
    <div>
      <Hero {...hero} />
      <Marketing {...marketing} />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
      <Info {...info} />
      <Importancy {...importancy} />
      <Impact />
      <SEOServices {...seoServices} />
      <MarketingFields />
      <MarketingProcess {...marketingProcess} />
      <SuccessStories {...successStories} />
      <Area />
      <Offering id="seo" />
      <Reviews />
      <FAQS {...faq} />
      <Contact />
    </div>
  );
};

export default page;
