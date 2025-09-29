import Organizations from "@/components/module/home/Organizations";
import Hero from "@/components/module/services/Hero";
import Marketing from "@/components/module/services/Marketing";

const page = () => {
  return (
    <div>
      <Hero />
      <Marketing />
      <div className="container">
        <Organizations title={"Proudly worked with"} />
      </div>
    </div>
  );
};

export default page;
