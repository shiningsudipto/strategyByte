"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import { caseStudiesList } from "@/constants/caseStudies.constants";

const CaseStudiesSlider = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="lg:mt-14 mt-5 relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        cssMode={true}
        // loop={true}
        slidesPerView={"auto"}
        spaceBetween={30}
        centeredSlides={true}
        //   pagination={{
        //     clickable: true,
        //   }}
        mousewheel={true}
        keyboard={true}
        modules={[Pagination, Navigation, Keyboard, Mousewheel]}
        className="blogSlider"
      >
        {caseStudiesList?.map((item) => {
          const isHeadAt = item.id === 1;
          return (
            <SwiperSlide
              style={{ marginRight: "16px" }}
              key={item?.id}
              className="lg:max-w-[980px] "
            >
              <div className="grid lg:grid-cols-2 grid-cols-1 group min-h-[508px]">
                <div className="bg-[#F8F8F8] lg:rounded-l-[40px] lg:rounded-t-none rounded-t-[40px] lg:p-6 p-5 flex flex-col justify-between gap-4">
                  {/* brand image */}
                  <div>
                    <Image
                      src={item.img}
                      alt={item.title}
                      height={100}
                      width={200}
                      className={`h-[80px] ${
                        isHeadAt ? "h-[100px] w-[170px]" : "w-auto"
                      }`}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-neutral-700 lg:mt-12 group-hover:underline cursor-pointer">
                      <Link href={"/resources/case-studies/" + item.slug}>
                        {item.title}
                      </Link>
                    </h3>
                    <p className="text-neutral-500 mt-2">{item?.published}</p>
                  </div>
                  <div className="lg:mt-12">
                    <Link
                      href={"/resources/case-studies/" + item.slug}
                      className="bg-neutral-700 rounded-full py-3 px-5 text-white font-bold flex items-center gap-2 w-fit"
                    >
                      Read Full Case
                      <ArrowRight
                        size={20}
                        className="hidden group-hover:block transition duration-300"
                      />
                    </Link>
                  </div>
                </div>
                <div>
                  <Image
                    src={item.thumbnail}
                    alt={item.title}
                    height={500}
                    width={500}
                    className="lg:rounded-r-[40px] lg:rounded-bl-none rounded-b-[40px] h-full"
                  />
                </div>
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex lg:hidden justify-center gap-3 mt-10">
        {caseStudiesList.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              swiperRef.current?.slideTo(index);
              setActiveIndex(index);
            }}
            className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
              activeIndex === index
                ? "bg-neutral-700 scale-125"
                : "bg-neutral-300"
            }`}
          ></button>
        ))}
      </div>
      <div className="flex justify-between items-center gap-2 mt-10 section-gap">
        {/* Custom Pagination index dot */}
        <div className="hidden lg:flex justify-center gap-3">
          {caseStudiesList.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                swiperRef.current?.slideTo(index);
                setActiveIndex(index);
              }}
              className={`size-2 rounded-full transition-all duration-300 cursor-pointer ${
                activeIndex === index
                  ? "bg-neutral-700 scale-125"
                  : "bg-neutral-300"
              }`}
            ></button>
          ))}
        </div>
        <Link
          href={"/resources/case-studies"}
          className="border-2 border-neutral-700 rounded-full p-4 hover:underline hover:text-yellow-200 font-bold hover:bg-neutral-700 flex items-center w-fit gap-2 group transition duration-300 book-shadow"
        >
          Read All Case Studies
          <span className="bg-neutral-700 group-hover:bg-yellow-200 group-hover:text-neutral-700 rounded-full p-1 size-6 text-white transition duration-300">
            <FiArrowUpRight />
          </span>
        </Link>
        <div className="flex items-center gap-4">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="border rounded-full border-neutral-700 size-10 flex items-center justify-center cursor-pointer hover:bg-neutral-700 hover:text-white transition duration-300"
          >
            <ArrowLeft size={20} />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="border rounded-full border-neutral-700 size-10 flex items-center justify-center cursor-pointer hover:bg-neutral-700 hover:text-white transition duration-300"
          >
            <ArrowRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CaseStudiesSlider;
