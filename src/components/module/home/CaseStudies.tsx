import CaseStudiesSlider from "./CaseStudiesSlider";

const CaseStudies = () => {
  return (
    <div className="py-40">
      <div className="section-gap">
        <h2 className="text-neutral-700 text-[56px] font-chopin font-bold">
          Proven Case Studies
        </h2>
        <p className="text-neutral-500 text-xl mt-4">
          Straight from the StrategyByte desk — industry news, strategy
          breakdowns, and growth hacks that actually work.
        </p>
      </div>
      <CaseStudiesSlider />
    </div>
  );
};

export default CaseStudies;
