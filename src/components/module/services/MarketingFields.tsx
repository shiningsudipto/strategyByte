import IndustrySlider from "./IndustrySlider";

const MarketingFields = () => {
  return (
    <section className="section-gap-y bg-navy-bg px-4 lg:px-0 text-white">
      <div className="container">
        <div className="lg:w-[918px] mx-auto text-center">
          <h2 className="heading mb-5">
            Industry-Specific Digital Marketing Expertise
          </h2>
          <p className="text-xl">
            At StrategyByte, we understand that different industries have unique
            digital marketing needs. Our team brings specialized expertise
            across multiple sectors to deliver tailored marketing solutions that
            drive results.
          </p>
        </div>
        <IndustrySlider />
      </div>
    </section>
  );
};

export default MarketingFields;
