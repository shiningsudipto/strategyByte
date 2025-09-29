import { features } from "@/constants/services.constants";
import approachImg from "@/assets/Approach.png";
import Image from "next/image";

const Marketing = () => {
  return (
    <div className="container section-gap py-16">
      <div className="">
        <h2 className="heading">
          Delivering Measurable Digital Marketing & SEO Results For{" "}
          <span className="text-blue-100">Australian Businesses</span>
        </h2>
        <p className="text-xl text-neutral-500 w-[1000px] mt-5">
          We specialize in delivering high-performance digital marketing
          strategies for Australian businesses. Our services include SEO, paid
          search, content marketing, and social media campaigns, all designed to
          drive results. As an Australia-based digital marketing agency, we
          offer transparent pricing, local support, and strategies that increase
          visibility and convert visitors into customers.
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
