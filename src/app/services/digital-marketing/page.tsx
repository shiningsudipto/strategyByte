import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Impact from "@/components/module/services/Impact";
import Importancy from "@/components/module/services/Importancy";
import Info from "@/components/module/services/Info";
import Marketing from "@/components/module/services/Marketing";
import MarketingFields from "@/components/module/services/MarketingFields";
import MarketingProcess from "@/components/module/services/MarketingProcess";
import SEOServices from "@/components/module/services/SEOServices";

const page = () => {
  return (
    <div>
      <Hero />
      <Marketing />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
      <Info />
      <Importancy />
      <Impact />
      <SEOServices />
      <MarketingFields />
      <MarketingProcess />
    </div>
  );
};

export default page;
