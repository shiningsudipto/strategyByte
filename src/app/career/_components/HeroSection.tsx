import React from "react";
import Image from "next/image";
import StatsSection from "./StatsSection";

const StarIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 1.61804L12.2451 7.90983L12.3647 8.26286H12.7431H19.5106L14.0395 12.2022L13.7408 12.4209L13.8604 12.7739L16.1056 19.0657L10.6345 15.1264L10.3358 14.9076L10.0371 15.1264L4.56598 19.0657L6.81115 12.7739L6.93079 12.4209L6.63205 12.2022L1.16094 8.26286H7.92848H8.30691L8.42655 7.90983L10.6717 1.61804H10Z"
      fill="#CFA000"
      stroke="#CFA000"
      strokeWidth="1.6"
    />
  </svg>
);

const HeroSection = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-[#FFFBF0] to-white pt-[200px] pb-20 -mt-[90px]">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-9 max-w-7xl mx-auto">
          {/* Hero Rating and Title Section */}
          <div className="flex flex-col items-center gap-5 relative">
            <div className="absolute z-10 top-10 lg:-right-[100px] border-2 border-teal-300 py-2 px-5 text-sm text-teal-300 bg-white font-semibold brand-shadow animate-bounce">
              <p>Kickstart of Dreams</p>
              <div className="absolute size-2 bg-teal-300 -bottom-[5px] -left-[5px]" />
            </div>
            {/* Rating Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              {/* Avatars */}
              <Image
                src={"/avatar-rating.png"}
                alt="Team member"
                quality={100}
                width={80}
                height={32}
                className="object-cover"
              />

              {/* Rating Text */}
              <div className="flex items-center gap-1">
                <div className="flex items-center">
                  <StarIcon />
                </div>
                <p className="text-xs sm:text-sm text-[#1f1e1d] font-normal whitespace-nowrap">
                  4.5/5 with 20 active clients
                </p>
              </div>
            </div>

            {/* Main Title */}
            <h1 className="text-center max-w-[640px] px-4 leading-[120px]">
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-7xl leading-tight font-bold text-[#281c00]">
                Careers at
              </span>
              <span className="block text-3xl sm:text-4xl md:text-5xl lg:text-[56px] xl:text-7xl leading-tight font-bold text-[#0061ff] whitespace-nowrap">
                StrategyByte Inc.
              </span>
            </h1>
          </div>

          {/* Description */}
          <div className="text-center text-sm sm:text-base md:text-lg text-[#605d5b] font-semibold max-w-full px-4">
            <p>
              We provide avenues to building a strong career to ambitious
              newbies and
            </p>
            <p>to pros alike.</p>
          </div>
        </div>

        {/* Stats Section */}
        <StatsSection />
      </div>
    </div>
  );
};

export default HeroSection;
