import TextType from "@/components/ui/TextType";
import heroAvatars from "@/assets/hero-avatars.png";
import { Star } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Organizations from "./Organizations";
import HeroSlider from "./HeroSlider";
import bgImg from "@/assets/hero-bg.png";
import CustomButton from "@/components/ui/CustomButton";
const HeroSection = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center xl:h-[1020px] -mt-[90px] container"
    >
      <div className="section-gap lg:pt-[200px] lg:mt-0 mt-16 font-OpenSans lg:p-0 p-5">
        <div className="grid 2xl:grid-cols-3 lg:grid-cols-5 grid-cols-1 lg:gap-0 2xl:gap-0 xl:gap-24">
          <div className="2xl:col-span-2 lg:col-span-3 mt-10">
            <div className="2xl:text-7xl xl:text-6xl lg:text-5xl text-[44px] font-chopin">
              <h1 className="font-bold ">Unlock Your Online</h1>
              <TextType
                className="font-bold"
                typingSpeed={50}
                pauseDuration={1800}
                deletingSpeed={30}
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
            <CustomButton
              label="Book a Session"
              icon={<FiArrowUpRight />}
              variant="primary"
              href="/book-a-session"
            />
          </div>
          <HeroSlider />
        </div>
      </div>
      <Organizations />
    </div>
  );
};

export default HeroSection;
