import { features } from "@/constants/services.constants";
import approachImg from "@/assets/Approach.png";
import Image from "next/image";

const Marketing = () => {
  return (
    <div className="container section-gap py-16">
      <div className="flex gap-x-16 mb-[100px] items-center">
        <h2 className="heading w-[663px]">
          Proven Approach To{" "}
          <span className="text-neutral-300">Content Marketing & SEO</span>
        </h2>
        <p className="text-xl text-neutral-500 w-[553px]">
          Our expert team combines advanced SEO techniques with powerful content
          marketing strategies to help your business attract quality traffic,
          improve rankings, and convert leads into loyal customers.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-x-16 mb-14">
        {features.map((item) => (
          <div key={item.serial}>
            <p className="text-4xl text-neutral-700 font-semibold">
              {item.serial}
            </p>
            <h3 className="text-[40px] text-blue-100 font-semibold mt-3 mb-5">
              {item.title}
            </h3>
            <p className="text-lg text-neutral-500">{item.desc}</p>
          </div>
        ))}
      </div>
      <Image
        src={approachImg}
        alt="approach"
        height={1280}
        width={720}
        className="w-full h-auto"
      />
    </div>
  );
};

export default Marketing;
