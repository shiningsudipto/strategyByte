import React from "react";
import CustomButton from "@/components/ui/CustomButton";
import { FiArrowUpRight, FiClock } from "react-icons/fi";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Client Case Studies | StrategyByte Success Stories",
  description:
    "See our results. Explore case studies showing how we've helped businesses like yours achieve measurable growth and ROI.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/resources/case-studies",
  },
  openGraph: {
    title: "Client Case Studies | StrategyByte Success Stories",
    description:
      "See our results. Explore case studies showing how we've helped businesses like yours achieve measurable growth and ROI.",
    url: "https://www.strategybyte.com.au/resources/case-studies",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Client Case Studies - StrategyByte Success Stories",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Client Case Studies | StrategyByte Success Stories",
    card: "summary_large_image",
    description:
      "See our results. Explore case studies showing how we've helped businesses like yours achieve measurable growth and ROI.",
    images: ["/logo/twitter-card.png"],
  },
};

const CaseStudiesComingSoon = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Coming Soon Section */}
      <section className="relative w-full py-16 sm:py-20 md:py-24 lg:py-32">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col items-center gap-6 sm:gap-8 md:gap-10 text-center">
              {/* Icon */}
              <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full bg-yellow-200 flex items-center justify-center">
                <FiClock className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 text-neutral-700" />
              </div>

              {/* Heading */}
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 leading-tight">
                  Case Studies Coming Soon
                </h1>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-yellow-200 font-semibold">
                  We&apos;re working on something great!
                </p>
              </div>

              {/* Description */}
              <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed text-[#848484] max-w-2xl">
                We&apos;re currently crafting detailed case studies showcasing
                our successful projects and the impact we&apos;ve made for our
                clients. Check back soon to see how we&apos;ve helped businesses
                grow through strategic digital marketing and innovation.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4 sm:mt-6">
                <CustomButton
                  label="Book a Session"
                  icon={<FiArrowUpRight />}
                  variant="bordered"
                  href="/book-a-session"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudiesComingSoon;
