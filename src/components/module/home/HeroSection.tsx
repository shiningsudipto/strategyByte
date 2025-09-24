import TextType from "@/components/ui/TextType";
import heroAvatars from "@/assets/hero-avatars.png";
import { Star } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Organizations from "./Organizations";
import HeroSlider from "./HeroSlider";
import bgImg from "@/assets/hero-bg.png";
const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center xl:h-[1020px] -mt-[90px] container"
    >
      <div className="section-gap lg:pt-[200px] mt-16 font-OpenSans lg:p-0 p-5">
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-5 grid-cols-1 lg:gap-0 2xl:gap-0 xl:gap-24">
          <div className="2xl:col-span-2 lg:col-span-3 mt-10">
            <div className="2xl:text-7xl xl:text-6xl lg:text-5xl text-[44px] font-chopin">
              <h1 className="font-bold ">Unlock Your Online</h1>
              <TextType
                className="font-bold"
                typingSpeed={20}
                pauseDuration={1750}
                showCursor={true}
                cursorCharacter=""
                text={["Potential.", "Growth.", "Business.", "Engagement."]}
              />
            </div>
            <p className="mt-5 font-OpenSans text-neutral-500 text-xl">
              Strategybyte helps Australian businesses grow with smart websites,
              <br />
              targeted ads, and results-driven digital marketing.
            </p>
            <div className="flex items-center my-10">
              <Image
                alt="hero image"
                src={heroAvatars}
                height={32}
                width={80}
              />
              <p className="flex items-center text-neutral-700">
                <Star size={20} fill="#CFA000" color="#CFA000" />
                <span className="text-sm">4.5/5 with 20 active clients</span>
              </p>
            </div>
            <button className="bg-yellow-200 font-bold cursor-pointer py-5 px-6 rounded-full text-neutral-700 flex items-center gap-2 book-shadow hover:bg-neutral-700 group transition duration-300">
              <span className="group-hover:underline group-hover:text-yellow-200 transition duration-300">
                Book a Session
              </span>
              <span className="bg-neutral-700 group-hover:bg-yellow-200 group-hover:text-neutral-700 rounded-full p-1 size-6 text-white transition duration-300">
                <FiArrowUpRight className="" />
              </span>
            </button>
          </div>
          <HeroSlider />
        </div>
        <Organizations />
      </div>
    </div>
  );
};

export default HeroSection;
