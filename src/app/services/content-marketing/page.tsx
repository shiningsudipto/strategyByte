import Contact from "@/components/module/home/Contact";
import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
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
      <SEOServices {...contentMarketingServices} />
      <MarketingFields />
      <MarketingProcess {...contentMarketingProcess} />
      <SuccessStories {...successStories} />
      <Area />
      <Offering />
      <Reviews />
      <Contact />
      <FAQS {...faq} />
    </main>
  );
};

export default page;
