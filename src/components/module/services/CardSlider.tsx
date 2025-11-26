"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import { reviews } from "@/constants/reviews";

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
    setTimeout(() => setIsAnimating(false), 1400);
  }, [isAnimating]);

  // Auto-advance slides every 5.5 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 5500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + reviews.length) % reviews.length;

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
      {reviews.map((review, index) => {
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
            <div className="p-4 sm:p-5 flex flex-col justify-evenly h-full">
              <h4 className="text-base sm:text-lg lg:text-xl font-semibold line-clamp-4 sm:line-clamp-none">
                &quot;{review.text}&quot;
              </h4>
              <div className="flex items-center justify-between gap-3 sm:gap-5">
                <div className="flex items-center gap-2 sm:gap-4">
                  {review.photo ? (
                    <Image
                      alt={review.name}
                      src={review.photo}
                      height={48}
                      width={48}
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover"
                    />
                  ) : (
                    <div className="h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-neutral-200 flex items-center justify-center">
                      <span className="text-neutral-600 font-bold text-sm sm:text-base">
                        {review.name.charAt(0)}
                      </span>
                    </div>
                  )}
                  <div>
                    <p className="font-bold text-sm sm:text-base">
                      {review.name}
                    </p>
                    <p className="text-neutral-500 text-xs sm:text-sm">
                      {review.role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
