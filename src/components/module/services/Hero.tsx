import CustomButton from "@/components/ui/CustomButton";
import { Star } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import WavyLine from "./WavyLine";
import Image from "next/image";
// import HeroAnimate from "./HeroAnimate";
type TProps = {
  title: string;
  subtitle: string;
  img: string;
};

const Hero = (props: TProps) => {
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
            {props.title}
          </h1>
          <p className="text-navy-200 text-2xl text-center mb-16">
            {props.subtitle}
          </p>
          <CustomButton
            label="Book a Session"
            icon={<FiArrowUpRight />}
            variant="primary"
            className="z-10"
          />
        </div>
        <div className="relative h-[600px] mt-20">
          <WavyLine />
          <div className="absolute bottom-0 w-full mx-auto">
            <Image
              src={props.img}
              alt="Data Driven Business Optimization"
              width={600}
              height={600}
              className="mx-auto w-[600px] h-auto z-0"
            />
          </div>
        </div>
        {/* <HeroAnimate /> */}
      </div>
    </div>
  );
};

export default Hero;
