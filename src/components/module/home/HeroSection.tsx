import TextType from "@/components/ui/TextType";
import heroAvatars from "@/assets/hero-avatars.png";
import { Star } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import Image from "next/image";
import Organizations from "./Organizations";
import HeroSlider from "./HeroSlider";
const HeroSection = () => {
  return (
    <div className="section-gap pt-[200px] font-OpenSans">
      <div className="grid grid-cols-3">
        <div className="col-span-2 mt-10">
          <div>
            <h1 className="font-bold text-7xl">Unlock Your Online</h1>
            <TextType
              className="font-bold text-7xl"
              typingSpeed={20}
              pauseDuration={1750}
              showCursor={true}
              cursorCharacter=""
              text={["Potential.", "Growth.", "Business.", "Engagement."]}
            />
          </div>
          <p className="mt-5 font-OpenSans text-neutral-500">
            Strategybyte helps Australian businesses grow with smart websites,
            <br />
            targeted ads, and results-driven digital marketing.
          </p>
          <div className="flex items-center my-10">
            <Image alt="hero image" src={heroAvatars} height={32} width={80} />
            <p className="flex items-center text-neutral-700">
              <Star size={20} fill="#CFA000" color="#CFA000" />
              <span className="text-sm">4.5/5 with 20 active clients</span>
            </p>
          </div>
          <button className="bg-yellow-200 font-bold cursor-pointer py-5 px-6 rounded-full text-neutral-700 flex items-center gap-2 book-shadow">
            Book a Session{" "}
            <span className="bg-neutral-700 rounded-full p-1 size-6">
              <FiArrowUpRight className="text-white" />
            </span>
          </button>
        </div>
        <HeroSlider />
      </div>
      <Organizations />
    </div>
  );
};

export default HeroSection;
