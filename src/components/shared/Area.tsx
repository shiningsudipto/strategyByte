import { ArrowUpRight, Dot } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import Call from "../actions/Call";
import Image from "next/image";

const Location = ({ name, className }: { name: string; className: string }) => (
  <p
    className={`text-yellow-200 text-lg flex items-center gap-2 absolute group  cursor-pointer ${className}`}
  >
    <Dot size={30} />{" "}
    <span className="uppercase group-hover:scale-[1.2] duration-300">
      {name}
    </span>
  </p>
);

const Area = () => {
  return (
    <section className="bg-navy-bg">
      <div className="container section-gap section-gap-y">
        <div className="lg:w-[900px] mx-auto text-center flex flex-col justify-center items-center">
          <h2 className="heading text-white">We are everywhere</h2>
          <p className="subheading text-navy-200">
            Our approach is designed to maximize the impact of your marketing
            efforts by delivering measurable ROI. We focus on strategic
            allocation of resources, ensuring every dollar spent contributes to
            meaningful growth and business success.
          </p>
          <div className="flex items-center gap-3 mt-12">
            <CustomButton
              label="View Full Service"
              icon={<ArrowUpRight />}
              variant="primary"
            />
            <Call />
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="relative flex justify-center lg:h-[814px] lg:w-[848px]">
            <Image src={"/map.png"} alt="map" height={814} width={848} />
            <Location name="DARWIN" className="top-14" />
            <Location name="TOWNSVILLE" className="right-2 top-[195px]" />
            <Location name="BRISBANE" className="-right-14 top-[365px]" />
            <Location name="GOLD COAST" className="-right-30 top-[395px]" />
            <Location name="SYDNEY" className="-right-5 bottom-[280px]" />
            <Location name="CANBERRA" className="right-3 bottom-[230px]" />
            <Location
              name="ADELAIDE"
              className="right-[205px] bottom-[230px]"
            />
            <Location
              name="MELBOURNE"
              className="right-[80px] bottom-[155px]"
            />
            <Location name="HOBART" className="right-[40px] bottom-[30px]" />
            <Location name="PERTH" className="left-[50] bottom-[280px]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Area;
