import { processPhases } from "@/constants/services.constants";

const MarketingProcess = () => {
  return (
    <section className="container px-40 section-gap-y overflow-visible">
      <div className="text-center lg:w-[800px] mx-auto">
        <p className="text-primary font-semibold text-2xl mb-4">
          #3 Pillar Concept
        </p>
        <h2 className="heading">
          Our 3-Step{" "}
          <span className="text-[#C4C2BF]">
            Digital Marketing & SEO Process
          </span>
        </h2>
        <p className="text-lg text-neutral-500 mt-5">
          We follow a proven methodology to ensure your digital marketing and
          SEO strategies are executed on time, within budget, and deliver
          results that exceed your expectations.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-16">
        {processPhases.map((process, index) => {
          const bgImages = [
            "/sticky-notes/1st.png",
            "/sticky-notes/2nd.png",
            "/sticky-notes/3rd.png",
          ];
          const rotations = ["-rotate-[8deg]", "", "rotate-[8deg]"];
          const bgImage = bgImages[index];
          const rotation = rotations[index];
          const first = index === 0;
          const second = index === 1;
          const third = index === 2;

          return (
            <div key={index} className="overflow-visible">
              <div
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={`group hover:scale-[1.1] transform duration-300 flex flex-col justify-between overflow-visible  
                  ${first && "p-12 min-h-[500px] w-full"} 
                  ${second && "p-8 m-7 min-h-[450px] w-[400px]"} 
                ${third && "p-16 min-h-[500px] w-full"}`}
              >
                <div className={`${rotation}`}>
                  <div>
                    <h3 className="text-[40px] text-neutral-700 mb-3">
                      {process.title}
                    </h3>
                    <p className="text-sm text-neutral-500">
                      {process.description}
                    </p>
                  </div>
                  <ul className="list-disc ml-5 text-neutral-700 space-y-2 mt-10 font-semibold">
                    {process.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default MarketingProcess;
