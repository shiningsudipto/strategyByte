import Blogs from "@/components/module/home/Blogs";
import CaseStudies from "@/components/module/home/CaseStudies";
import Contact from "@/components/module/home/Contact";
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
    </>
  );
};

export default Home;
