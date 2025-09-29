import { strategies } from "@/constants/services.constants";

const Importancy = () => {
  return (
    <section className="container section-gap section-gap-y grid grid-cols-2 gap-x-40 items-center">
      <div>
        <p className="text-2xl font-semibold text-blue-100 mb-4">
          Why Digital Marketing
        </p>
        <h2 className="heading mb-8">Matters For Your Australian Business </h2>
        <p className="text-neutral-700 text-xl">
          In today’s digital-first world, your online presence driven by
          effective digital marketing and SEO is often the first touchpoint for
          potential customers.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-y-8">
        {strategies.map((item, index) => (
          <div
            key={index}
            className="group relative p-10 bg-navy-100 rounded-[16px] overflow-hidden cursor-pointer transition-all duration-500 ease-in-out"
          >
            {/* Title (always visible) */}
            <h3 className="text-[40px] text-neutral-700 relative z-10">
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
