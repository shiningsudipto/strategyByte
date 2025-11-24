import React from 'react';
import Image from 'next/image';

// TODO: Replace these placeholder paths with actual image paths from your assets
const AVATAR_IMAGES = {
  avatar1: '/images/career/avatar-1.png',
  avatar2: '/images/career/avatar-2.png',
  avatar3: '/images/career/avatar-3.png',
};

const StarIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
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
    <div className="relative w-full bg-gradient-to-b from-[#FFFBF0] to-white py-16 md:py-20">
      <div className="container mx-auto px-4">
        {/* Hero Content */}
        <div className="flex flex-col items-center gap-9 max-w-7xl mx-auto">
          {/* Hero Rating and Title Section */}
          <div className="flex flex-col items-center gap-5">
            {/* Rating Section */}
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
              {/* Avatars */}
              <div className="flex items-center justify-center relative">
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.625px] border-white overflow-hidden">
                  <Image
                    src={AVATAR_IMAGES.avatar1}
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-7 h-7 sm:w-8 sm:h-8 rounded-full border-[1.625px] border-white overflow-hidden -ml-1.5 sm:-ml-2">
                  <Image
                    src={AVATAR_IMAGES.avatar2}
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full border-2 border-white overflow-hidden -ml-1.5 sm:-ml-2">
                  <Image
                    src={AVATAR_IMAGES.avatar3}
                    alt="Team member"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

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
            <h1 className="text-center max-w-[640px] px-4">
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
            <p>We provide avenues to building a strong career to ambitious newbies and</p>
            <p>to pros alike.</p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 max-w-7xl mx-auto mt-12 md:mt-16">
          {/* Stat Card 1 */}
          <div className="bg-[#f6f9ff] rounded-2xl p-4 md:p-5 flex flex-col gap-1">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px] font-semibold text-[#091736]">
              43+
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#605d5b]">Brand Shaped</p>
          </div>

          {/* Stat Card 2 */}
          <div className="bg-[#f6f9ff] rounded-2xl p-4 md:p-5 flex flex-col gap-1">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px] font-semibold text-[#091736]">
              6150+
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#605d5b]">Hours Worked</p>
          </div>

          {/* Stat Card 3 */}
          <div className="bg-[#f6f9ff] rounded-2xl p-4 md:p-5 flex flex-col gap-1">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px] font-semibold text-[#091736]">
              650M
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#605d5b]">Help Revenue</p>
          </div>

          {/* Stat Card 4 */}
          <div className="bg-[#f6f9ff] rounded-2xl p-4 md:p-5 flex flex-col gap-1">
            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px] font-semibold text-[#091736]">
              250+
            </p>
            <p className="text-sm sm:text-base md:text-lg text-[#605d5b]">Projects</p>
          </div>
        </div>

        {/* Growth Arrow Badge - Positioned top right */}
        <div className="absolute top-[241px] right-[224px] hidden lg:block">
          <div className="bg-white border-2 border-[#2acf9a] rounded-sm px-5 py-2 rotate-180 scale-y-[-1]">
            <p className="text-sm font-semibold text-[#1fa47a] whitespace-nowrap rotate-180 scale-y-[-1]">
              Kickstart of Drems
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
