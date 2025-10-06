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
import { marketingFaqs } from "@/constants/services.constants";
// constants
import {
  hero,
  importancy,
  info,
  marketing,
  marketingProcess,
  seoServices,
} from "@/constants/service.marketing";

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
      <SuccessStories />
      <Area />
      <Offering />
      <Reviews />
      <FAQS faqs={marketingFaqs} title="Full-Stack Website Development" />
      <Contact />
    </div>
  );
};

export default page;
