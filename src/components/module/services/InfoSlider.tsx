"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel } from "swiper/modules";
import { TStrategies } from "./Info";

const InfoSlider = ({ strategies }: { strategies: TStrategies[] }) => {
  return (
    <div className="w-full mt-16 relative lg:px-28">
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        mousewheel
        modules={[Mousewheel]}
        className=""
      >
        {strategies.map((strategy, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[400px] min-h-[240px] border bg-white p-10 rounded-[16px] cursor-grab"
          >
            <div className="">
              <h4 className="text-[28px] font-semibold mb-6 text-neutral-800">
                {strategy.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                {strategy.description}
              </p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default InfoSlider;
