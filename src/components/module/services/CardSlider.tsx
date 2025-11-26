"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const cards = [
    {
      headline: "Daily 280+",
      metric: "+ 40% CVR",
      subHeadline: "Inbound Calls",
      subMetric: "in Online Payments",
      quote:
        '"StrategyByte delivered outstanding results with smart digital marketing and seamless SEO implementation."',
      author: "Jack Wilson",
      title: "VP, Growth",
      avatar: "/avatars/avatar1.png",
      company: "/brands/dropbox.png",
    },
    {
      headline: "37% Upsells",
      metric: "250M Secured",
      subHeadline: "in Q3",
      subMetric: "Funding Round",
      quote:
        '"Their team helped us streamline our funnel, driving higher retention and customer lifetime value."',
      author: "Sarah Chen",
      title: "CEO",
      avatar: "/avatars/avatar1.png",
      company: "/brands/microsoft.png",
    },
    {
      headline: "250M Funding",
      metric: "+ 25% Growth",
      subHeadline: "in One Quarter",
      subMetric: "Revenue Expansion",
      quote:
        '"We saw immediate impact from their data-driven approach. The platform is now faster, stable, and converting better than ever."',
      author: "Mike Johnson",
      title: "Head of Product",
      avatar: "/avatars/avatar1.png",
      company: "/brands/slack.png",
    },
  ];

  // Detect screen size for mobile optimization
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 1400);
  }, [isAnimating, cards.length]);

  // const prevSlide = () => {
  //   if (isAnimating) return;
  //   setIsAnimating(true);
  //   setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
  //   setTimeout(() => setIsAnimating(false), 1400);
  // };

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;

    // Mobile: Simplified 2-card stack
    if (isMobile) {
      if (diff === 0) return "front-mobile";
      if (diff === 1) return "back-mobile";
      return "hidden";
    }

    // Desktop: 3-card stack
    if (diff === 0) return "front";
    if (diff === 1) return "middle";
    if (diff === 2) return "back";
    return "hidden";
  };

  return (
    <div className="relative lg:w-full max-w-[340px] sm:max-w-[380px] md:max-w-[450px] lg:max-w-[500px] mx-auto h-[420px] sm:h-[450px] lg:h-[456px] px-4 sm:px-0 lg:overflow-x-visible overflow-x-hidden">
      {cards.map((card, index) => {
        const position = getCardPosition(index);

        return (
          <div
            key={index}
            style={{
              willChange: "transform, opacity",
              backfaceVisibility: "hidden",
              WebkitBackfaceVisibility: "hidden",
              transform: "translate3d(0, 0, 0)",
            }}
            className={`
                    absolute inset-0 rounded-2xl shadow-2xl bg-white border border-white/20
                    transition-all duration-[1400ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]
                    ${
                      position === "front" || position === "front-mobile"
                        ? "z-30 !scale-100 !rotate-0 !translate-x-0 !translate-y-0 opacity-100"
                        : ""
                    }
                    ${
                      position === "back-mobile"
                        ? "z-20 !scale-x-[1.12] sm:!scale-x-[1.15] !rotate-2 sm:!rotate-3 !translate-x-2 sm:!translate-x-3 !translate-y-1 sm:!translate-y-2 opacity-70"
                        : ""
                    }
                    ${
                      position === "middle"
                        ? "z-20 right-20 -top-10 !scale-x-[1.2] !rotate-6 !translate-x-6 !translate-y-3 opacity-80"
                        : ""
                    }
                    ${
                      position === "back"
                        ? "z-10 right-40 -top-20 !scale-x-[1.4] !rotate-12 !translate-x-12 !translate-y-6 opacity-60"
                        : ""
                    }
                    ${
                      position === "hidden"
                        ? "z-0 !scale-85 !rotate-4 !translate-x-16 !translate-y-8 opacity-0 pointer-events-none"
                        : ""
                    }
                  `}
          >
            <div className="p-4 sm:p-5 flex flex-col justify-between h-full">
              <div className="grid grid-cols-2 gap-2 sm:gap-3 lg:gap-5 text-neutral-700">
                <div className="bg-[#F4F4F4] p-3 sm:p-4 rounded-full">
                  <p className="text-base sm:text-lg lg:text-2xl font-bold">
                    {card.headline}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold">
                    {card.subHeadline}
                  </p>
                </div>
                <div className="bg-[#F4F4F4] p-3 sm:p-4 rounded-full">
                  <p className="text-base sm:text-lg lg:text-2xl font-bold">
                    {card.metric}
                  </p>
                  <p className="text-sm sm:text-base lg:text-lg font-semibold">
                    {card.subMetric}
                  </p>
                </div>
              </div>
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold line-clamp-4 sm:line-clamp-none">
                {card.quote}
              </h4>
              <div className="flex items-center justify-between gap-3 sm:gap-5">
                <div className="flex items-center gap-2 sm:gap-4">
                  <Image
                    alt={card.author}
                    src={card.avatar}
                    height={48}
                    width={48}
                    className="h-10 w-10 sm:h-12 sm:w-12"
                  />
                  <div>
                    <p className="font-bold text-sm sm:text-base">
                      {card.author}
                    </p>
                    <p className="text-neutral-500 text-xs sm:text-sm">
                      {card.title}
                    </p>
                  </div>
                </div>
                <Image
                  alt={card.author}
                  src={card.company}
                  height={36}
                  width={120}
                  className="h-7 sm:h-9 w-auto"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
