import bgImg from "@/assets/method-bg.png";
import { processSteps } from "@/constants/home.constants";
import StickyNote from "./StickyNote";

const Process = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="relative bg-cover bg-center py-20 overflow-hidden"
    >
      <div className="container section-gap">
        <StickyNote />
        <div className="mt-20 relative z-10">
          <h2 className="text-[56px] font-bold text-white text-center font-chopin relative">
            StrategyByte’s <br />
            <span className="text-teal-100 relative z-10">Growth Method</span>
          </h2>
          <p className="text-xl text-neutral-200 mt-5 text-center mx-20">
            Trusted by Australian brands for data-driven growth, tailored
            strategies, <br /> and measurable results.
          </p>

          <div className="grid grid-cols-6 gap-[10px] py-20">
            {processSteps?.map((item, index) => (
              <div
                key={item.id}
                className={`p-5 rounded-[36px] bg-white space-y-6 ${
                  index < 3 ? "col-span-2" : "col-span-3"
                }`}
              >
                <p className="text-[56px] font-chopin font-bold text-navy-200">
                  {item.id}
                </p>
                <h2 className="text-5xl font-chopin text-[#0F1C2B]">
                  {item.title}
                </h2>
                <p className="text-neutral-700 text-lg font-OpenSans">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
