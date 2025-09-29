import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
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
    </div>
  );
};

export default page;
