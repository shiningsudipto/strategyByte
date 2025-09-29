"use client";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

import microsoftImg from "@/assets/caseStudy/microsoft.png";
import paypalImg from "@/assets/caseStudy/paypal.png";
import thumbnail from "@/assets/caseStudy/Case Studies - Thumbnail Box.png";
import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

const caseStudiesList = [
  {
    id: 1,
    img: microsoftImg,
    thumbnail: thumbnail,
    title:
      "How we StrategyByte help Dropbox to increase their Retention 3X in just 2 Quarter of 2024",
    tags: [
      "Growth Mapping",
      "Activation & Engagement",
      "Design",
      "Brand Strategy",
      "Sales Hacks",
    ],
    published: "7 Sep, 2024",
    cta: "Read Full Case",
  },
  {
    id: 2,
    img: paypalImg,
    thumbnail: thumbnail,
    title:
      "Paypal remain 100M profitable in 2025 early quarter, How we help them to increase CVR in App",
    tags: [
      "Product Mapping",
      "Activation & Engagement",
      "Analysis",
      "Marketing",
    ],
    published: "7 Sep, 2024",
    cta: "Read Full Case",
  },
  {
    id: 3,
    img: microsoftImg,
    thumbnail: thumbnail,
    title: "Case Study Title Placeholder 3",
    tags: ["Tag A", "Tag B", "Tag C"],
    published: "Date Placeholder",
    cta: "Read Full Case",
  },
  {
    id: 4,
    img: paypalImg,
    thumbnail: thumbnail,
    title: "Case Study Title Placeholder 4",
    tags: ["Tag X", "Tag Y", "Tag Z"],
    published: "Date Placeholder",
    cta: "Read Full Case",
  },
];

const CaseStudiesSlider = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <div className="lg:mt-14 mt-5 relative">
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
        {caseStudiesList?.map((item) => {
          return (
            <SwiperSlide
              style={{ marginRight: "16px" }}
              key={item?.id}
              className="lg:max-w-[980px] "
            >
              <div className="grid lg:grid-cols-2 grid-cols-1 group min-h-[508px]">
                <div className="bg-[#F8F8F8] lg:rounded-l-[40px] rounded-t-[40px] lg:p-6 p-5 lg:space-y-0 space-y-5">
                  <Image
                    src={item.img}
                    alt={item.title}
                    height={48}
                    width={164}
                  />
                  <h3 className="text-2xl font-semibold text-neutral-700 lg:mt-12 group-hover:underline cursor-pointer">
                    {item.title}
                  </h3>
                  <div className="lg:my-8 flex gap-3 items-center content-center self-stretch flex-wrap">
                    {item.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="inline-block bg-yellow-100 border border-yellow-200 rounded-[8px] py-[6px] px-2"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="text-neutral-500">Published : 7 Sep, 2024</p>
                  <div className="lg:mt-12">
                    <Link
                      href={"#"}
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
                    className="lg:rounded-r-[40px] rounded-b-[40px] h-full"
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
        {/* Custom Pagination */}
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
          href={"#"}
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
