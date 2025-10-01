import CaseStudiesSlider from "../home/CaseStudiesSlider";

const SuccessStories = () => {
  return (
    <section className="container section-gap-y">
      <div className="section-gap">
        <div className="lg:w-[800px]">
          <h2 className="heading">
            Our Digital Marketing & SEO Success Stories
          </h2>
          <p className="subheading">
            Discover how our Australian-based web development services have
            helped businesses across various industries achieve their digital
            goals. 
          </p>
        </div>
      </div>
      <CaseStudiesSlider />
    </section>
  );
};

export default SuccessStories;
