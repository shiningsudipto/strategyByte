import { Check } from "lucide-react";

type Services = {
  title: string;
  description: string[];
  action: string;
};

type TProps = {
  title: string;
  title_highlight: string;
  description: string;
  services: Services[];
};

const SEOServices = ({
  title,
  title_highlight,
  description,
  services,
}: TProps) => {
  return (
    <section className="container section-gap-y px-4 lg:px-0">
      <div className="text-center lg:w-[1076px] mx-auto">
        <h2 className="heading mb-5">
          {title} <span className="text-primary">{title_highlight}</span>
        </h2>
        <p className="lg:mx-24 text-xl text-neutral-500">{description}</p>
      </div>
      <div className="grid lg:grid-cols-4 grid-cols-1 gap-5 lg:mt-20 mt-10">
        {services.map((item, index) => (
          <div
            key={index}
            className="p-6 border border-navy-200 hover:border-neutral-700 duration-300 rounded-2xl flex flex-col justify-between group"
          >
            <div>
              <h3 className="lg:text-[40px] text-3xl text-neutral-700">
                {item.title}
              </h3>
              <ul className="lg:mt-10 mt-5 lg:space-y-6 space-y-4 mb-6">
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
            {/* <button className="p-4 rounded-full font-bold text-neutral-700 flex items-center gap-2 border-2 border-neutral-700 w-fit group-hover:bg-neutral-700 group-hover:text-white duration-300">
              Learn More <ArrowUpRight />
            </button> */}
          </div>
        ))}
      </div>
    </section>
  );
};

export default SEOServices;
