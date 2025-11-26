import Blogs from "@/components/module/home/Blogs";
import CaseStudies from "@/components/module/home/CaseStudies";
import FAQ from "@/components/module/home/FAQ";
import HeroSection from "@/components/module/home/HeroSection";
import Process from "@/components/module/home/Process";
import Review from "@/components/module/home/Review";
import Service from "@/components/module/home/Service";
import Contact from "@/components/shared/Contact";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "StrategyByte | Digital Marketing Agency Sydney",
  description:
    "Unlock your digital potential with StrategyByte. We are a Sydney-based agency specializing in SEO, Web Development, and NDIS marketing strategies.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/",
  },
  openGraph: {
    title: "StrategyByte | Digital Marketing Agency Sydney",
    description:
      "Unlock your digital potential with StrategyByte. We are a Sydney-based agency specializing in SEO, Web Development, and NDIS marketing strategies.",
    url: "https://www.strategybyte.com.au/",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "StrategyByte - Digital Marketing Agency Sydney",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "StrategyByte | Digital Marketing Agency Sydney",
    card: "summary_large_image",
    description:
      "Unlock your digital potential with StrategyByte. We are a Sydney-based agency specializing in SEO, Web Development, and NDIS marketing strategies.",
    images: ["/logo/twitter-card.png"],
  },
};

const Home = () => {
  return (
    <>
      <HeroSection />
      <Service />
      <Process />
      <CaseStudies />
      <Review />
      <Blogs />
      <Contact />
      <FAQ />
    </>
  );
};

export default Home;
