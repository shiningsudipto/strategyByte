import bgImg from "@/assets/hero-bg.png";
import HeroSlider from "@/components/module/home/HeroSlider";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center h-[100vh] -mt-[90px]"
    >
      <HeroSlider />
    </div>
  );
};

export default Home;
