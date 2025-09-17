import bgImg from "@/assets/hero-bg.png";
import HeroSection from "@/components/module/home/HeroSection";
import Process from "@/components/module/home/Process";
import Service from "@/components/module/home/Service";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center h-[1020px] -mt-[90px]"
    >
      <HeroSection />
      <Service />
      <Process />
    </div>
  );
};

export default Home;
