import InfoSlider from "./InfoSlider";

const Info = () => {
  return (
    <div className="bg-yellow-100">
      <div className="container section-gap-y">
        <div className="section-gap  space-y-5 text-center">
          <h3 className="text-[40px] text-neutral-500">
            Why Choose StrategyByte For
          </h3>
          <h2 className="heading">
            Digital Marketing Services in <br /> Australia?
          </h2>
          <p className="text-neutral-700 text-lg w-[1000px] mx-auto">
            At Strategybyte, we deliver high-performance digital marketing
            services to boost visibility and drive results for Australian
            businesses. Our expertise includes SEO, paid search, content
            marketing, and social media campaigns, all based on data-driven
            strategies. As an Australia-based agency, we offer transparent
            pricing, local support, and tailored strategies that convert
            visitors into valuable leads.
          </p>
        </div>
        <InfoSlider />
      </div>
    </div>
  );
};

export default Info;
