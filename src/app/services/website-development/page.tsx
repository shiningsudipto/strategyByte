import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Info from "@/components/module/services/Info";
import Marketing from "@/components/module/services/Marketing";
import {
  hero,
  webDevelopment,
  webDevInfo,
} from "@/constants/service.web.constants";

const page = () => {
  return (
    <main>
      <Hero {...hero} />
      <Marketing {...webDevelopment} />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
      <Info {...webDevInfo} />
    </main>
  );
};

export default page;
