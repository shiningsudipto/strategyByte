import CaseStudiesSlider from "../home/CaseStudiesSlider";

type TProps = {
  title: string;
  description: string;
};

const SuccessStories = ({ title, description }: TProps) => {
  return (
    <section className="container section-gap-y">
      <div className="section-gap">
        <div className="lg:w-[800px]">
          <h2 className="heading">{title}</h2>
          <p className="subheading text-neutral-500">{description}</p>
        </div>
      </div>
      <CaseStudiesSlider />
    </section>
  );
};

export default SuccessStories;
