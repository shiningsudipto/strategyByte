"use client";

import { FiArrowUpRight } from "react-icons/fi";
import Stars from "@/components/icons/Stars";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Link from "next/link";
import "swiper/css/pagination";
import { useRef, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";

interface Article {
  sys: {
    id: string;
    publishedAt: string;
  };
  title: string;
  slug: string;
  description: string;
  thumbnail: {
    url: string;
  };
  blogCategory: {
    title: string;
    slug: string;
  };
}

const BlogSlider = () => {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const swiperRef = useRef<any>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const res = await fetch("/api/articles?limit=4&skip=0");
        if (!res.ok) {
          throw new Error("Failed to fetch articles");
        }
        const data = await res.json();
        setArticles(data.articles || []);
      } catch (error) {
        console.error("Error fetching articles:", error);
        setError(
          error instanceof Error ? error.message : "Failed to load articles"
        );
      } finally {
        setLoading(false);
      }
    };

    fetchArticles();
  }, []);

  const calculateReadTime = (description: string) => {
    const wordsPerMinute = 200;
    const wordCount = description.split(" ").length;
    const minutes = Math.ceil(wordCount / wordsPerMinute);
    return `${minutes} min`;
  };

  // Loading skeleton following card UI
  if (loading) {
    return (
      <div className="container lg:mt-14 mt-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-[40px] h-[576px] bg-navy-100 flex flex-col animate-pulse"
            >
              <div className="p-5 flex-1">
                <div className="mb-10 h-[40px] w-[40px] bg-neutral-200 rounded-full"></div>
                <div className="mb-6 mt-10 h-6 bg-neutral-200 rounded w-24"></div>
                <div className="space-y-3">
                  <div className="h-7 bg-neutral-200 rounded w-full"></div>
                  <div className="h-7 bg-neutral-200 rounded w-3/4"></div>
                </div>
                <div className="mt-8 h-6 bg-neutral-200 rounded w-32"></div>
              </div>
              <div className="h-[200px] bg-neutral-200 rounded-b-[40px]"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Error fallback UI following card design
  if (error) {
    return (
      <div className="container lg:mt-14 mt-10 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[...Array(4)].map((_, index) => (
            <div
              key={index}
              className="rounded-[40px] h-[576px] bg-navy-100 flex flex-col items-center justify-center p-8 text-center"
            >
              <div className="space-y-4">
                <svg
                  className="mx-auto h-12 w-12 text-neutral-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <p className="text-sm text-neutral-500">
                  Unable to load articles
                </p>
                <button
                  onClick={() => window.location.reload()}
                  className="text-xs text-neutral-700 font-semibold hover:underline"
                >
                  Retry
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  // Empty state fallback
  if (articles.length === 0) {
    return (
      <div className="container lg:mt-14 mt-10 relative">
        <div className="rounded-[40px] h-[576px] bg-navy-100 flex flex-col items-center justify-center p-8 text-center">
          <div className="space-y-4">
            <svg
              className="mx-auto h-16 w-16 text-neutral-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <p className="text-lg font-semibold text-neutral-700">
              No articles available yet
            </p>
            <p className="text-sm text-neutral-500">
              Check back soon for new content
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container lg:mt-14 mt-10 relative">
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
        {articles?.map((item) => {
          return (
            <SwiperSlide
              style={{ marginRight: "8px" }}
              key={item?.sys.id}
              className="max-w-[534px]"
            >
              <div className="rounded-[40px] h-[576px] bg-navy-100 group flex flex-col">
                <div className="p-5 flex-1">
                  <p className="mb-10 p-3 rounded-full border border-navy-200 w-fit h-[40px] flex items-center gap-1 overflow-hidden">
                    <Stars className="stroke-2 shrink-0" />
                    <span className="font-bold text-sm opacity-0 max-w-0 group-hover:opacity-100 group-hover:max-w-[200px] transition-all duration-300 ease-in-out">
                      NEW ARTICLE
                    </span>
                  </p>

                  <p className="mb-6 mt-10">
                    <span className="text-neutral-700 font-semibold">
                      {calculateReadTime(item.description)}
                    </span>{" "}
                    <span className="text-neutral-500">to read...</span>
                  </p>
                  <Link
                    href={`/resources/byte-articles/${item.slug}`}
                    className="text-2xl font-semibold text-neutral-700 group-hover:underline"
                  >
                    {item.title}
                  </Link>
                  <p className="mt-8 text-maze-500 font-semibold">
                    {item.blogCategory?.title || "Article"}
                  </p>
                </div>

                {/* Image always sticks to the bottom */}
                <Image
                  src={item.thumbnail.url}
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
        {articles.slice(0, 2).map((_, index) => (
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
        {/* Custom Pagination index dot*/}
        <div className="lg:flex hidden justify-center gap-3">
          {articles.slice(0, 3).map((_, index) => (
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
          href={"/resources/byte-articles"}
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
