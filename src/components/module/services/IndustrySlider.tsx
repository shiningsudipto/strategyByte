"use client";
import { industries } from "@/constants/services.constants";
import Image from "next/image";
import { Mousewheel } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const IndustrySlider = () => {
  return (
    <div>
      <Swiper
        slidesPerView="auto"
        spaceBetween={20}
        mousewheel
        modules={[Mousewheel]}
        className="mt-20"
      >
        {industries.map((item, index) => (
          <SwiperSlide
            key={index}
            className="max-w-[416px] rounded-[16px] cursor-grab relative overflow-hidden group bg-white"
          >
            <h4 className="text-[32px] font-semibold text-neutral-700 mb-2 z-10 relative px-6 py-10">
              {item.title}
            </h4>
            <Image
              src={item.image}
              alt={item.title}
              height={368}
              width={416}
              className="object-cover rounded-b-[16px]"
            />
            <div
              className="
          absolute inset-0 bg-white px-6 py-6
          translate-y-full group-hover:translate-y-24
          transition-transform duration-500 ease-in-out
        "
            >
              <p className="text-neutral-500 text-lg leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity delay-200">
                {item.description}
              </p>

              <ul className="space-y-2 opacity-0 group-hover:opacity-100 transition-opacity delay-300 list-disc ml-5 mt-40">
                {item.points.map((list, i) => (
                  <li className="text-neutral-800" key={i}>
                    {list}
                  </li>
                ))}
              </ul>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default IndustrySlider;
