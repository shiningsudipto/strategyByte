import BlogSlider from "./BlogSlider";

const Blogs = () => {
  return (
    <div className="py-40">
      <div className="section-gap">
        <h2 className="text-[56px] font-chopin font-bold text-neutral-700">
          The Byte Publishes
        </h2>
        <p className="text-xl text-neutral-500 mt-4">
          Straight from the StrategyByte desk — industry news, strategy
          breakdowns, and growth hacks that actually work.
        </p>
      </div>
      <BlogSlider />
    </div>
  );
};

export default Blogs;
