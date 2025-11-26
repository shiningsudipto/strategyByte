import React from "react";
import Image from "next/image";
import CustomButton from "@/components/ui/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About StrategyByte | Digital Transformation Experts",
  description:
    "We help businesses navigate the digital landscape. Learn about our data-driven approach, our values, and our mission to drive sustainable growth.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/about",
  },
  openGraph: {
    title: "About StrategyByte | Digital Transformation Experts",
    description:
      "We help businesses navigate the digital landscape. Learn about our data-driven approach, our values, and our mission to drive sustainable growth.",
    url: "https://www.strategybyte.com.au/about",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "About StrategyByte - Digital Transformation Experts",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "About StrategyByte | Digital Transformation Experts",
    card: "summary_large_image",
    description:
      "We help businesses navigate the digital landscape. Learn about our data-driven approach, our values, and our mission to drive sustainable growth.",
    images: ["/logo/twitter-card.png"],
  },
};

const IMAGES = {
  // Hero Section
  heroBanner: "/about/hero-banner.png",

  // Who We Are Section
  storyBanner: "/about/story-banner.png",
  approachBanner: "/about/approach-banner.png",

  // Our Approach Icons
  iconStrategicVision: "/about/Strategic Vision.png",
  iconPracticalExecution: "/about/Practical Execution.png",
  iconMeasurableResults: "/about/Measuraable Results.png",

  // Core Values Icons
  iconIntegrity: "/about/Integrity.png",
  iconInnovation: "/about/Innovation.png",
  iconCollaboration: "/about/Collaboration.png",
  iconExcellence: "/about/Excellence.png",
  iconPassion: "/about/Passion.png",
  iconResponsibility: "/about/Responsibility.png",
};

const AboutPage = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative w-full bg-[rgba(255,255,255,0.15)] py-12 sm:py-16 md:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                <h1 className="text-2xl md:text-4xl font-bold text-neutral-700 leading-normal lg:text-5xl xl:text-[48px]">
                  Driving Growth Through Digital Marketing & Innovation
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-6 sm:leading-7 md:leading-[28px] text-[#848484]">
                  Strategybyte helps organizations navigate the complex digital
                  landscape with strategic consulting and cutting-edge
                  technology solutions.
                </p>
                <div>
                  <CustomButton
                    label="Book a Session"
                    icon={<FiArrowUpRight />}
                    variant="primary"
                    href="/book-a-session"
                  />
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full aspect-square max-w-md lg:max-w-none mx-auto lg:mx-0">
                <Image
                  src={IMAGES.heroBanner}
                  alt="Digital Marketing Illustration"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-16">
            {/* Section Title */}
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight md:leading-[60px] font-bold text-black text-center">
              Who We Are
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Content - Our Story */}
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-tight md:leading-[36px] font-bold text-[#1f1e1d]">
                  Our Story
                </h3>
                <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 text-sm sm:text-base md:text-[16px] leading-6 md:leading-[25.6px] text-[#848484] text-justify">
                  <p>
                    StrategyByte was founded to help businesses grow in a
                    digital-first world. Starting as a digital consultancy,
                    we&apos;ve become a leading digital marketing and
                    transformation agency in Australia, serving clients locally
                    and globally.
                  </p>
                  <p>
                    With expertise in SEO, website development, and business
                    process automation, we help organizations enhance their
                    online presence, streamline operations, and scale with
                    confidence. Our approach combines strategy, innovation, and
                    insight to deliver meaningful results—at every stage of the
                    digital journey.
                  </p>
                </div>
              </div>

              {/* Right Image */}
              <div className="relative w-full aspect-square max-w-md lg:max-w-none mx-auto lg:mx-0">
                <Image
                  src={IMAGES.storyBanner}
                  alt="Team Working Together"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 items-center">
              {/* Left Image */}
              <div className="relative w-full aspect-square max-w-md lg:max-w-none mx-auto lg:mx-0 order-2 lg:order-1">
                <Image
                  src={IMAGES.approachBanner}
                  alt="Our Approach"
                  fill
                  className="object-cover rounded-2xl"
                />
              </div>

              {/* Right Content - Our Approach */}
              <div className="flex flex-col gap-4 sm:gap-6 md:gap-8 order-1 lg:order-2">
                <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[30px] leading-tight md:leading-[36px] font-bold text-black">
                  Our Approach
                </h3>
                <p className="text-sm sm:text-base md:text-[16px] leading-6 md:leading-[25.6px] text-[#848484] text-justify">
                  We craft tailored digital strategies that bridge the gap
                  between technology and business growth—helping you stay ahead
                  in a digital-first world.
                </p>

                {/* Approach Items */}
                <div className="flex flex-col gap-4 sm:gap-6 md:gap-8">
                  {/* Strategic Vision */}
                  <div className="flex gap-3 sm:gap-4">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                      <Image
                        src={IMAGES.iconStrategicVision}
                        alt="Strategic Vision"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4 className="text-base sm:text-lg md:text-[18px] leading-6 md:leading-[28px] font-bold text-black">
                        Strategic Vision
                      </h4>
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 text-black">
                        We align digital roadmaps with business goals.
                      </p>
                    </div>
                  </div>

                  {/* Practical Execution */}
                  <div className="flex gap-3 sm:gap-4">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                      <Image
                        src={IMAGES.iconPracticalExecution}
                        alt="Practical Execution"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4 className="text-base sm:text-lg md:text-[18px] leading-6 md:leading-[28px] font-bold text-[#1d1d1d]">
                        Practical Execution
                      </h4>
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 text-[#1d1d1d]">
                        Our solutions work in the real world—not just in theory.
                      </p>
                    </div>
                  </div>

                  {/* Measurable Results */}
                  <div className="flex gap-3 sm:gap-4">
                    <div className="relative w-7 h-7 sm:w-8 sm:h-8 flex-shrink-0">
                      <Image
                        src={IMAGES.iconMeasurableResults}
                        alt="Measurable Results"
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex flex-col gap-1 sm:gap-2">
                      <h4 className="text-base sm:text-lg md:text-[18px] leading-6 md:leading-[28px] font-bold text-[#1d1d1d]">
                        Measurable Results
                      </h4>
                      <p className="text-xs sm:text-sm md:text-[14px] leading-5 text-[#1d1d1d]">
                        We focus on outcomes that drive impact.
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-sm sm:text-base md:text-[16px] leading-6 md:leading-[25.6px] text-[#848484] text-justify">
                  Collaboration is at the core of everything we do. As your
                  digital marketing partner, we work alongside your team to help
                  you grow, adapt, and lead with confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Core Values Section */}
      <section className="w-full py-8 sm:py-12 md:py-16 lg:py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-7xl mx-auto flex flex-col gap-8 sm:gap-10 md:gap-16">
            {/* Section Header */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 items-center">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-[48px] leading-tight md:leading-[60px] font-bold text-black text-center">
                Our Core Value
              </h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-[18px] leading-6 md:leading-[28px] text-[#848484] text-center max-w-2xl px-4">
                These values define who we are and how we work at StrategyByte.
              </p>
            </div>

            {/* Values Grid */}
            <div className="flex flex-col gap-3 sm:gap-4 md:gap-6">
              {/* First Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Integrity */}
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(47,63,97,0.5)] flex items-center justify-center">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <Image
                        src={IMAGES.iconIntegrity}
                        alt="Integrity"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-[32px] font-bold text-black">
                    Integrity
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-[25.6px] text-[#848484]">
                    We do what&apos;s right—always. Ethics, honesty, and
                    transparency drive every decision we make.
                  </p>
                </div>

                {/* Innovation */}
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(47,63,97,0.5)] flex items-center justify-center">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <Image
                        src={IMAGES.iconInnovation}
                        alt="Innovation"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-[32px] font-bold text-black">
                    Innovation
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-[25.6px] text-[#848484]">
                    We challenge the norm to deliver forward-thinking digital
                    solutions that create long-term value.
                  </p>
                </div>

                {/* Collaboration */}
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(47,63,97,0.5)] flex items-center justify-center">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <Image
                        src={IMAGES.iconCollaboration}
                        alt="Collaboration"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-[32px] font-bold text-black">
                    Collaboration
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-[25.6px] text-[#848484]">
                    We partner closely with clients to build scalable strategies
                    and achieve shared success.
                  </p>
                </div>
              </div>

              {/* Second Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {/* Excellence */}
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(47,63,97,0.5)] flex items-center justify-center">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <Image
                        src={IMAGES.iconExcellence}
                        alt="Excellence"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-[32px] font-bold text-black">
                    Excellence
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-[25.6px] text-[#848484]">
                    From web design to SEO, we hold ourselves to high
                    standards—refining every detail to deliver outstanding
                    results.
                  </p>
                </div>

                {/* Passion */}
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(47,63,97,0.5)] flex items-center justify-center">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <Image
                        src={IMAGES.iconPassion}
                        alt="Passion"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-[32px] font-bold text-black">
                    Passion
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-[25.6px] text-[#848484]">
                    We love what we do. That passion fuels creative thinking,
                    consistent delivery, and impact-driven results.
                  </p>
                </div>

                {/* Responsibility */}
                <div className="backdrop-blur-md bg-[rgba(255,255,255,0.15)] border border-[rgba(255,255,255,0.2)] rounded-lg p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col gap-4 sm:gap-5 md:gap-6">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full bg-[rgba(47,63,97,0.5)] flex items-center justify-center">
                    <div className="relative w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8">
                      <Image
                        src={IMAGES.iconResponsibility}
                        alt="Responsibility"
                        fill
                        className="object-contain"
                      />
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] leading-6 sm:leading-7 md:leading-[32px] font-bold text-black">
                    Responsibility
                  </h3>
                  <p className="text-xs sm:text-sm md:text-base lg:text-[16px] leading-5 sm:leading-6 md:leading-[25.6px] text-[#848484]">
                    We take ownership of your outcomes—whether it&apos;s
                    improving digital visibility or automating business
                    processes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
