"use client";

import { FiArrowUpRight } from "react-icons/fi";
import blogImg1 from "@/assets/blogs/blog1.jpeg";
import blogImg2 from "@/assets/blogs/blog2.jpg";
import blogImg3 from "@/assets/blogs/blog3.jpg";
import blogImg4 from "@/assets/blogs/blog4.jpg";
import Stars from "@/components/icons/Stars";
import Image from "next/image";

const articles = [
  {
    id: 1,
    title: "7 Powerful Reasons to Hire a Web Design Company in Sydney",
    category: "Content Marketing",
    readTime: "11 min",
    thumbnail: blogImg1,
  },
  {
    id: 2,
    title: "How to make powerful Brands, that sounds like a winner",
    category: "Brand Secrets",
    readTime: "25 min",
    thumbnail: blogImg2,
  },
  {
    id: 3,
    title: "7 Powerful Reasons to Hire a Web Design Company in Sydney",
    category: "Content Marketing",
    readTime: "11 min",
    thumbnail: blogImg3,
  },
  {
    id: 4,
    title: "NEW ARTICLE",
    category: "Content Marketing",
    readTime: "11 min",
    thumbnail: blogImg4,
  },
];

import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import "swiper/css/pagination";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

const BlogSlider = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="container lg:mt-14 mt-10 relative">
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
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
        {articles?.map((item) => {
          return (
            <SwiperSlide
              style={{ marginRight: "8px" }}
              key={item?.id}
              className="max-w-[534px]"
            >
              <div className="rounded-[40px] h-[576px] bg-navy-100 group flex flex-col">
                <div className="p-5 flex-1">
                  <p className="mb-10 p-1 rounded-full border border-navy-200 w-fit h-[40px] flex items-center gap-1 overflow-hidden">
                    <Stars className="stroke-2 shrink-0" />
                    <span className="font-bold text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] transition-all duration-300 ease-in-out">
                      NEW ARTICLE
                    </span>
                  </p>

                  <p className="mb-6 mt-10">
                    <span className="text-neutral-700 font-semibold">
                      {item.readTime}
                    </span>{" "}
                    <span className="text-neutral-500">to read...</span>
                  </p>
                  <Link
                    href={"#"}
                    className="text-2xl font-semibold text-neutral-700 group-hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-8 text-maze-500 font-semibold">
                    {item.category}
                  </p>
                </div>

                {/* Image always sticks to the bottom */}
                <Image
                  src={item.thumbnail}
                  alt={item.title}
                  height={240}
                  width={534}
                  className="rounded-b-[40px] h-[200px] object-cover group-hover:h-[240px] transition-all duration-300"
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
      <div className="flex lg:hidden justify-center gap-3 mt-10">
        {articles.map((_, index) => (
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
        {/* Custom Pagination */}
        <div className="lg:flex hidden justify-center gap-3">
          {articles.map((_, index) => (
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
          href={"#"}
          className="border-2 border-neutral-700 rounded-full p-4 hover:underline hover:text-yellow-200 font-bold hover:bg-neutral-700 flex items-center w-fit gap-2 group transition duration-300 book-shadow"
        >
          See All Articles
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

export default BlogSlider;
