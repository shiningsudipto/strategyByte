// import { features } from "@/constants/services.constants";
import Image from "next/image";

type Feature = {
  serial: string;
  img: string;
  title: string;
  desc: string;
};

type TProps = {
  title: string;
  title_highlight: string;
  description: string;
  img: string;
  features: Feature[];
};

const Marketing = ({
  title,
  title_highlight,
  img,
  description,
  features,
}: TProps) => {
  return (
    <div className="container section-gap lg:py-16 py-10 lg:px-0 px-4">
      <div className="">
        <h2 className="heading">
          {title}
          <span className="text-blue-100">{title_highlight}</span>
        </h2>
        <p className="text-xl text-neutral-500 lg:w-[1000px] mt-5">
          {description}
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10 lg:gap-y-16 gap-y-5 mb-14 lg:mt-[100px] mt-10">
        {features.map((item) => (
          <div key={item.serial}>
            <Image
              src={item.img}
              alt={item.title}
              height={64}
              width={64}
              className="lg:size-16 size-12"
            />
            <h3 className="lg:text-[40px] text-3xl text-blue-100 font-normal mt-5 mb-3">
              {item.title}
            </h3>
            <p className="text-lg text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
      <Image
        src={img}
        alt="approach"
        height={1280}
        width={720}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Marketing;
