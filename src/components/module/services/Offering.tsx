import { services } from "@/constants/services.constants";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Offering = () => {
  return (
    <section className="container section-gap section-gap-y px-4 lg:px-0">
      <div className="text-center">
        <h2 className="heading">
          See All That <br />{" "}
          <span className="text-primary">What We Are Offering</span>
        </h2>
        <p className="subheading text-neutral-500">
          Our approach is designed to maximize the impact of your marketing
          efforts by delivering measurable ROI. We focus on strategic allocation
          of resources, ensuring every dollar spent contributes to meaningful
          growth and business success.
        </p>
      </div>
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 lg:mt-20 mt-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-navy-100 p-8 rounded-[36px] flex flex-col justify-between lg:h-[500px] group hover:bg-neutral-700 hover:text-white duration-300 text-neutral-700"
          >
            <div className="mb-10">
              <Image
                src={service.img}
                alt={service.title}
                height={65}
                width={56}
                className="w-14 h-auto"
              />
              <h3 className="font-semibold lg:text-4xl text-3xl mt-5 mb-6">
                {service.title}
              </h3>
              <p className="text-lg">{service.desc}</p>
            </div>
            <Link
              href={"#"}
              className="border-2 border-neutral-700 rounded-full flex items-center gap-2 py-4 px-3 w-fit font-bold group-hover:bg-white group-hover:text-neutral-700"
            >
              View Full Service <ArrowUpRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Offering;
