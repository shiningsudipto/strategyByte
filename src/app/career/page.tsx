import HeroSection from './_components/HeroSection';
import WhyJoinUs from './_components/WhyJoinUs';
import HiringStepsCarousel from './_components/HiringStepsCarousel';
import RecruitmentSection from './_components/RecruitmentSection';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at StrategyByte | Join Our Team",
  description:
    "Join a team of innovators and strategists. Explore current job openings in digital marketing, web development, and design at StrategyByte.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/career",
  },
  openGraph: {
    title: "Careers at StrategyByte | Join Our Team",
    description:
      "Join a team of innovators and strategists. Explore current job openings in digital marketing, web development, and design at StrategyByte.",
    url: "https://www.strategybyte.com.au/career",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Careers at StrategyByte - Join Our Team",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Careers at StrategyByte | Join Our Team",
    card: "summary_large_image",
    description:
      "Join a team of innovators and strategists. Explore current job openings in digital marketing, web development, and design at StrategyByte.",
    images: ["/logo/twitter-card.png"],
  },
};

const CareerPage = () => {
  return (
    <div className="">
      <HeroSection />
      <WhyJoinUs />
      <HiringStepsCarousel />
      <RecruitmentSection />
    </div>
  );
};

export default CareerPage;
