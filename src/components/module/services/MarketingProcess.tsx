type TProcess = {
  title: string;
  description: string;
  points: string[];
};

type TProps = {
  title_highlight: string;
  description: string;
  process: TProcess[];
};

const MarketingProcess = ({
  title_highlight,
  description,
  process,
}: TProps) => {
  return (
    <section className="container lg:px-40 section-gap-y overflow-hidden px-4">
      <div className="text-center lg:w-[800px] mx-auto px-4 lg:px-0">
        <p className="text-primary font-semibold text-2xl mb-4">
          #3 Pillar Concept
        </p>
        <h2 className="heading">
          Our 3-Step <span className="text-[#C4C2BF]">{title_highlight}</span>
        </h2>
        <p className="text-lg text-neutral-500 mt-5">{description}</p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-5 mt-16 place-items-center">
        {process.map((process, index) => {
          const bgImages = [
            "/sticky-notes/1st.png",
            "/sticky-notes/2nd.png",
            "/sticky-notes/3rd.png",
          ];
          const rotations = ["-rotate-[8deg]", "", "rotate-[8deg]"];
          const bgImage = bgImages[index];
          const rotation = rotations[index];
          const second = index === 1;

          return (
            <div key={index} className="overflow-visible w-full max-w-[400px] mx-auto lg:max-w-[500px]">
              <div
                style={{
                  backgroundImage: `url(${bgImage})`,
                  backgroundSize: "contain",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
                className={`group hover:scale-[1.1] transform duration-300 flex items-center justify-center w-full aspect-square
                  ${second && "lg:m-7"}`}
              >
                <div className={`${rotation} w-full h-full flex flex-col justify-between p-[15%] sm:p-[16%] lg:p-[18%]`}>
                  <div className="flex-shrink-0">
                    <h3 className="text-base sm:text-xl lg:text-2xl text-neutral-700 mb-1 sm:mb-2 leading-tight font-semibold">
                      {process.title}
                    </h3>
                    <p className="text-[10px] sm:text-xs lg:text-xs text-neutral-500 leading-tight">
                      {process.description}
                    </p>
                  </div>
                  <ul className="list-disc ml-3 sm:ml-4 lg:ml-5 text-neutral-700 text-xs sm:text-sm lg:text-sm space-y-1 sm:space-y-1.5 lg:space-y-1.5 mt-3 sm:mt-5 lg:mt-6 font-semibold">
                    {process.points.map((point, i) => (
                      <li key={i} className="leading-snug">{point}</li>
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
