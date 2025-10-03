import InfoSlider from "./InfoSlider";

export type TStrategies = {
  title: string;
  description: string;
};

type TProps = {
  title: string;
  subtitle: string;
  description: string;
  strategies: TStrategies[];
};

const Info = ({ title, subtitle, description, strategies }: TProps) => {
  return (
    <div className="bg-yellow-100">
      <div className="container section-gap-y">
        <div className="section-gap space-y-5 text-center">
          <h3 className="text-[40px] text-neutral-500">{subtitle}</h3>
          <h2 className="heading w-[764px] mx-auto">{title}</h2>
          <p className="text-neutral-700 text-lg w-[1000px] mx-auto">
            {description}
          </p>
        </div>
        <InfoSlider strategies={strategies} />
      </div>
    </div>
  );
};

export default Info;
