import { ArrowUpRight, Dot } from "lucide-react";
import CustomButton from "../ui/CustomButton";
import Call from "../actions/Call";
import Image from "next/image";

const Location = ({ name, className }: { name: string; className: string }) => (
  <p
    className={`text-yellow-200 lg:text-lg text-xs flex items-center gap-2 absolute group  cursor-pointer ${className}`}
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
      <div className="container section-gap section-gap-y px-4 lg:px-0">
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
            <Location
              name="DARWIN"
              className="lg:top-14 top-5 lg:left-auto left-[160px]"
            />
            <Location
              name="TOWNSVILLE"
              className="lg:right-2 lg:top-[195px] top-20 right-0"
            />
            <Location
              name="BRISBANE"
              className="lg:-right-14 lg:top-[365px] top-[165px] right-0"
            />
            <Location
              name="GOLD COAST"
              className="lg:-right-30 lg:top-[395px] top-[185px] right-0"
            />
            <Location
              name="SYDNEY"
              className="lg:-right-5 lg:bottom-[280px] bottom-[130px] right-0"
            />
            <Location
              name="CANBERRA"
              className="lg:right-3 lg:bottom-[230px] right-0 bottom-[100px]"
            />
            <Location
              name="ADELAIDE"
              className="lg:right-[205px] lg:bottom-[230px] bottom-[110px] right-[70px]"
            />
            <Location
              name="MELBOURNE"
              className="lg:right-[80px] lg:bottom-[155px] right-0 bottom-[70px]"
            />
            <Location
              name="HOBART"
              className="lg:right-[40px] -right-2 lg:bottom-[30px] bottom-2"
            />
            <Location
              name="PERTH"
              className="lg:left-[50] left-5 lg:bottom-[280px] bottom-[125px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Area;
