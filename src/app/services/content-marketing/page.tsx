import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Importancy from "@/components/module/services/Importancy";
import Info from "@/components/module/services/Info";
import Marketing from "@/components/module/services/Marketing";
import {
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
    </main>
  );
};

export default page;
