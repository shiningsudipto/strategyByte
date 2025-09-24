import Link from "next/link";
import DataDrivenBusinessOptimization from "@/assets/services/Data Driven Business Optimization.png";
import StrategicBrandManagement from "@/assets/services/Strategic Brand Management.png";
import WebsiteDevelopment from "@/assets/services/Website Development.png";
import DMandSEO from "@/assets/services/dmandseo.png";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const serviceList = [
  {
    id: 1,
    title: "Digital Marketing & SEO",
    description:
      "We create targeted campaigns that drive real results and help your brand grow smarter online.",
    buttonText: "View Full Service",
    img: DMandSEO,
  },
  {
    id: 2,
    title: "Strategic Branding Management",
    description:
      "We build, position, and manage your brand with data-driven strategies that boost recognition, trust, and long-term growth.",
    buttonText: "View Full Service",
    img: StrategicBrandManagement,
  },
  {
    id: 3,
    title: "Website Development",
    description:
      "We design fast, functional, and conversion-driven websites tailored to your specific goals.",
    buttonText: "View Full Service",
    img: WebsiteDevelopment,
  },
  {
    id: 4,
    title: "Business Optimization",
    description:
      "We optimize your business by refining workflows, maintaining content consistency, and implementing scalable systems to boost efficiency, clarity, and growth.",
    buttonText: "View Full Service",
    img: DataDrivenBusinessOptimization,
  },
];

const Service = () => {
  return (
    <section className="container section-gap xl:py-40 lg:py-20">
      <h2 className="heading text-center">
        This is How StrategyByte Powers <br />
        <span className="text-primary">Real Business Growth.</span>
      </h2>
      <p className="text-xl text-neutral-500 mt-5 text-center mx-20">
        Our approach is designed to maximize the impact of your marketing
        efforts by delivering measurable ROI. We focus on strategic allocation
        of resources, ensuring every dollar spent contributes to meaningful
        growth and business success.
      </p>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2 mt-20">
        {serviceList?.map((item) => (
          <div
            key={item?.id}
            className="p-9 rounded-[36px] bg-navy-100 group hover:bg-neutral-700 hover:text-white transition duration-300"
          >
            <Image src={item.img} alt={item.title} height={70} width={56} />
            <h3 className="mt-5 mb-6 font-semibold xl:text-4xl lg:text-3xl text-neutral-700 group-hover:text-white transition duration-300">
              {item?.title}
            </h3>
            <p>{item?.description}</p>
            <Link
              href={"#"}
              className="p-4 rounded-full border-2 border-neutral-700 text-neutral-700 font-bold flex items-center w-fit gap-2 mt-14 group-hover:bg-white transition duration-300"
            >
              View Full Service <FiArrowUpRight />
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
