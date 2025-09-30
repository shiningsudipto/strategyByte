import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Impact from "@/components/module/services/Impact";
import Importancy from "@/components/module/services/Importancy";
import Info from "@/components/module/services/Info";
import Marketing from "@/components/module/services/Marketing";

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
    </div>
  );
};

export default page;
