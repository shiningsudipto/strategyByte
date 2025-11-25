import BlogSlider from "./BlogSlider";
import ErrorBoundary from "@/components/ErrorBoundary";

const Blogs = () => {
  return (
    <div className="xl:py-40 lg:py-20 py-10 lg:px-0 px-5">
      <div className="section-gap container">
        <h2 className="heading text-neutral-700">The Byte Publishes</h2>
        <p className="text-xl text-neutral-500 mt-4">
          Straight from the StrategyByte desk — industry news, strategy
          breakdowns, and growth hacks that actually work.
        </p>
      </div>
      <ErrorBoundary>
        <BlogSlider />
      </ErrorBoundary>
    </div>
  );
};

export default Blogs;
