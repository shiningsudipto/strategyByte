import bgImg from "@/assets/hero-bg.png";
import HeroSection from "@/components/module/home/HeroSection";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center h-[100vh] -mt-[90px]"
    >
      <HeroSection />
    </div>
  );
};

export default Home;
