import { TOfTitleAndDesc } from "@/types/types";

type TProps = {
  title: string;
  subtitle: string;
  description: string;
  strategies: TOfTitleAndDesc[];
};

const Importancy = ({ title, subtitle, description, strategies }: TProps) => {
  return (
    <section className="container px-4 lg:px-0 section-gap section-gap-y grid lg:grid-cols-2 grid-cols-1 lg:gap-x-40 gap-y-10 items-center">
      <div>
        <p className="text-2xl font-semibold text-blue-100 mb-4">{title}</p>
        <h2 className="heading mb-8">{subtitle}</h2>
        <p className="text-neutral-700 text-xl">{description}</p>
      </div>
      <div className="grid grid-cols-1 gap-y-8">
        {strategies.map((item, index) => (
          <div
            key={index}
            className="group relative p-10 bg-navy-100 rounded-[16px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
          >
            {/* Title (always visible) */}
            <h3 className="lg:text-[40px] text-3xl text-neutral-700 relative z-10">
              {item.title}
            </h3>

            {/* Animated collapsible description */}
            <div
              className="
          max-h-0 overflow-hidden
          transition-all duration-500 ease-in-out
          group-hover:max-h-[500px]  /* enough space for longest text */
        "
            >
              <p
                className="
            text-neutral-700 text-lg mt-6
            opacity-0 translate-y-4
            transition-all duration-500 ease-in-out
            group-hover:opacity-100 group-hover:translate-y-0
          "
              >
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Importancy;
