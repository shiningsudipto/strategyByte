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
    <div className="container section-gap py-16">
      <div className="">
        <h2 className="heading">
          {title}
          <span className="text-blue-100">{title_highlight}</span>
        </h2>
        <p className="text-xl text-neutral-500 w-[1000px] mt-5">
          {description}
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-10 gap-y-16 mb-14 mt-[100px]">
        {features.map((item) => (
          <div key={item.serial}>
            <Image
              src={item.img}
              alt={item.title}
              height={64}
              width={64}
              className=""
            />
            <h3 className="text-[40px] text-blue-100 font-normal mt-5 mb-3">
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
