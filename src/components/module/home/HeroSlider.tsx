"use client";

import heroImg1 from "@/assets/Hero Images - 1.png";
import heroImg2 from "@/assets/Hero Images - 2.png";
import heroImg3 from "@/assets/Hero Images - 3.png";
import heroImg4 from "@/assets/Hero Images - 4.png";
import Image from "next/image";
import { useKeenSlider, KeenSliderInstance } from "keen-slider/react";

const heroCarouselItems = [
  { id: 1, img: heroImg1 },
  { id: 2, img: heroImg2 },
  { id: 3, img: heroImg3 },
  { id: 4, img: heroImg4 },
];

const HeroSlider = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
    },
    [
      (slider: KeenSliderInstance) => {
        let timeout: ReturnType<typeof setTimeout>;

        const clearNextTimeout = () => clearTimeout(timeout);

        const nextTimeout = () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => slider.next(), 1800);
        };

        slider.on("created", nextTimeout);
        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
        slider.on("destroyed", clearNextTimeout);
      },
    ]
  );

  return (
    <div className="col-span-1 relative">
      <div className="absolute z-10 top-10 -left-16 border-2 border-teal-300 py-2 px-5 text-sm text-teal-300 bg-white font-semibold brand-shadow animate-bounce">
        <p>Brand</p>
        <div className="absolute size-2 bg-teal-300 -bottom-[5px] -right-[5px]" />
      </div>
      <div className="absolute z-50 top-8 -right-20 border-2 text-vibe-300 text-sm font-semibold border-vibe-300 bg-white py-2 px-5 growth-shadow animate-bounce">
        <p>Growth</p>
        <div className="absolute size-2 bg-vibe-300 -bottom-[5px] -left-[5px]" />
      </div>
      <div className="absolute z-50 bottom-16 -left-28 border-2 bg-white text-maze-400 text-sm font-semibold border-maze-400 py-2 px-5 design-shadow animate-bounce">
        <p>Design</p>
        <div className="absolute size-2 bg-maze-400 -top-[5px] -right-[5px]" />
      </div>
      <div className="absolute z-50 bottom-8 -right-24 border-2 bg-white text-primary text-sm font-semibold border-primary py-2 px-5 development-shadow animate-bounce">
        <p>Development</p>
        <div className="absolute size-2 bg-primary -top-[5px] -left-[5px]" />
      </div>

      <div ref={sliderRef} className="keen-slider">
        {heroCarouselItems.map((item) => (
          <div className="keen-slider__slide" key={item.id}>
            <Image
              alt="hero image"
              src={item.img}
              height={580}
              width={420}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;
