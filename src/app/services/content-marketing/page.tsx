import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Importancy from "@/components/module/services/Importancy";
import Info from "@/components/module/services/Info";
import Marketing from "@/components/module/services/Marketing";
import MarketingFields from "@/components/module/services/MarketingFields";
import MarketingProcess from "@/components/module/services/MarketingProcess";
import SEOServices from "@/components/module/services/SEOServices";
import {
  contentMarketingProcess,
  contentMarketingServices,
  hero,
  importancy,
  info,
  marketing,
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
    </main>
  );
};

export default page;
