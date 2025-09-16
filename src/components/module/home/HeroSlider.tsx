"use client";

import TextType from "@/components/ui/TextType";
import heroImg1 from "@/assets/Hero Images - 1.png";
import heroImg2 from "@/assets/Hero Images - 2.png";
import heroImg3 from "@/assets/Hero Images - 3.png";
import heroImg4 from "@/assets/Hero Images - 4.png";
import heroAvatars from "@/assets/hero-avatars.png";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { Star } from "lucide-react";
import { FiArrowUpRight } from "react-icons/fi";
import Organizations from "./Organizations";

const heroCarouselItems = [
  {
    id: 1,
    img: heroImg1,
  },
  {
    id: 2,
    img: heroImg2,
  },
  {
    id: 3,
    img: heroImg3,
  },
  {
    id: 4,
    img: heroImg4,
  },
];

const HeroSlider = () => {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <div className="section-gap pt-[200px] font-OpenSans">
      <div className="grid grid-cols-3">
        <div className="col-span-2 mt-10">
          <div>
            <h1 className="font-bold text-7xl">Unlock Your Online</h1>
            <TextType
              className="font-bold text-7xl"
              typingSpeed={20}
              pauseDuration={1650}
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
        <div className="col-span-1 relative">
          <div className="absolute z-50 top-10 -left-16 border-2 border-teal-300 py-2 px-5 text-sm text-teal-300 bg-white font-semibold brand-shadow animate-bounce">
            <p>Brand</p>
            <div className="absolute size-2 bg-teal-300 -bottom-[5px] -right-[5px]"></div>
          </div>
          <div className="absolute z-50 top-8 -right-20 border-2 text-vibe-300 text-sm font-semibold border-vibe-300 bg-white py-2 px-5 growth-shadow animate-bounce">
            <p>Growth</p>
            <div className="absolute size-2 bg-vibe-300 -bottom-[5px] -left-[5px]"></div>
          </div>
          <div className="absolute z-50 bottom-16 -left-28 border-2 bg-white text-maze-400 text-sm font-semibold border-maze-400 py-2 px-5 design-shadow animate-bounce">
            <p>Design</p>
            <div className="absolute size-2 bg-maze-400 -top-[5px] -right-[5px]"></div>
          </div>
          <div className="absolute z-50 bottom-8 -right-24 border-2 bg-white text-primary text-sm font-semibold border-primary py-2 px-5 development-shadow animate-bounce">
            <p>Development</p>
            <div className="absolute size-2 bg-primary -top-[5px] -left-[5px]"></div>
          </div>
          <Carousel plugins={[plugin.current]} className="w-full mx-auto">
            <CarouselContent>
              {heroCarouselItems?.map((item) => (
                <CarouselItem key={item?.id}>
                  <Image
                    alt="hero image"
                    src={item?.img}
                    height={580}
                    width={420}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </div>
      <Organizations />
    </div>
  );
};

export default HeroSlider;
