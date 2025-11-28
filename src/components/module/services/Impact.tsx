import BookASession from "@/components/actions/BookASession";
import CardSlider from "./CardSlider";
import FeedbackCard from "./FeedbackCard";

const Impact = () => {
  return (
    <section className="bg-navy-bg lg:px-0 px-4 pb-28">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-y-10 container section-gap lg:py-56 py-16 lg:pb-0 pb-30">
        <div>
          <h3 className="font-licorice text-[80px] text-navy-400">
            Proven Impacts
          </h3>
          <h2 className="heading text-white mt-8 mb-4">
            Grow Your Organic Traffic
          </h2>
          <p className="text-lg text-neutral-100">
            Whether you&apos;re starting your first SEO campaign or building on
            an existing strategy, our team will align with your business goals
            to drive new traffic and attract potential customers to your
            website.
          </p>
          <div className="mt-14 flex lg:flex-row flex-col items-center gap-5">
            <BookASession />
            <p className="font-semibold text-white">
              <span className="text-teal-100">FREE!</span> 1 Hour Growth Talk
            </p>
          </div>
        </div>
        <div className="lg:flex justify-end lg:mt-0 mt-20">
          {/* <CardSlider /> */}
          <FeedbackCard />
        </div>
      </div>
    </section>
  );
};

export default Impact;
