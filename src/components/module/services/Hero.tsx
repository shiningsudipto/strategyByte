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
          <h1 className="font-chopin text-7xl font-bold text-navy-100 pt-5 pb-6 text-center">
            Data-Driven Business Optimization
          </h1>
          <p className="text-navy-200 text-2xl text-center mb-16">
            Streamline workflows, reduce costs, and boost efficiency with
            tailored process optimization strategies designed to help your
            business scale faster.
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
