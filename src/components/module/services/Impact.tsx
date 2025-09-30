import CardSlider from "./CardSlider";

const Impact = () => {
  return (
    <div className=" bg-navy-bg">
      <div className="grid grid-cols-2 container section-gap section-gap-y">
        <div></div>
        <div className="flex justify-end">
          <CardSlider />
        </div>
      </div>
    </div>
  );
};

export default Impact;
