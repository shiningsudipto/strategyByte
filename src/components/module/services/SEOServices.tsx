import { seoServices } from "@/constants/services.constants";
import { ArrowUpRight, Check } from "lucide-react";

const SEOServices = () => {
  return (
    <section className="container  section-gap-y">
      <div className="text-center mx-auto section-gap">
        <h2 className="heading mb-5">
          Comprehensive Digital Marketing Services for{" "}
          <span className="text-primary">Australian Businesses</span>
        </h2>
        <p className="mx-24 text-xl text-neutral-500">
          Our approach is designed to maximize the impact of your marketing
          efforts by delivering measurable ROI. We focus on strategic allocation
          of resources, ensuring every dollar spent contributes to meaningful
          growth and business success.
        </p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 mt-20">
        {seoServices.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-navy-200 hover:border-neutral-700 duration-300 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <h3 className="text-[40px] text-neutral-700">{item.title}</h3>
              <ul className="mt-10 space-y-6 mb-6">
                {item.description.map((list, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-2 text-neutral-500"
                  >
                    <Check className="text-primary" /> {list}
                  </li>
                ))}
              </ul>
            </div>
            <button className="p-4 rounded-full font-bold text-neutral-700 flex items-center gap-2 border-2 border-neutral-700 w-fit group-hover:bg-neutral-700 group-hover:text-white duration-300">
              Learn More <ArrowUpRight />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SEOServices;
