import CustomButton from "@/components/ui/CustomButton";
import { Star } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import WavyLine from "./WavyLine";
import dataImg from "@/assets/Data Driven Business Optimization.png";
import Image from "next/image";
// import HeroAnimate from "./HeroAnimate";

const Hero = () => {
  return (
    <div className="bg-navy-bg -mt-[90px] pt-[200px] pb-20">
      <div className="container text-white">
        <div className="w-[764px] mx-auto flex flex-col justify-center items-center">
          <p className="flex items-center text-center justify-center text-neutral-700 text-sm gap-1">
            <Star size={20} fill="#FFC605" color="#FFC605" />
            <span className="text-white">4.5 Ratings with</span>
            <span className="text-teal-100">25 Reviews</span>
          </p>
          <h1 className="font-chopin font-bold text-7xl text-navy-100 pt-5 pb-6 text-center">
            Top Digital Marketing & SEO Services for Australian Businesses
          </h1>
          <p className="text-navy-200 text-2xl text-center mb-16">
            Boost your Australian business with targeted digital marketing
            strategies. From SEO and paid search to content and social media, we
            deliver results that increase visibility and drive customer
            conversions.
          </p>
          <CustomButton
            label="Book a Session"
            icon={<FiArrowUpRight />}
            variant="primary"
          />
        </div>
        <div className="relative h-[600px] mt-20">
          <WavyLine />
          <div className="absolute bottom-0 w-full mx-auto">
            <Image
              src={dataImg}
              alt="Data Driven Business Optimization"
              sizes="500"
              className="mx-auto size-[600px]"
            />
          </div>
        </div>
        {/* <HeroAnimate /> */}
      </div>
    </div>
  );
};

export default Hero;
