import Blogs from "@/components/module/home/Blogs";
import CaseStudies from "@/components/module/home/CaseStudies";
import Contact from "@/components/module/home/Contact";
import FAQ from "@/components/module/home/FAQ";
import HeroSection from "@/components/module/home/HeroSection";
import Process from "@/components/module/home/Process";
import Review from "@/components/module/home/Review";
import Service from "@/components/module/home/Service";

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
