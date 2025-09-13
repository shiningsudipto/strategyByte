import bgImg from "@/assets/hero-bg.png";

const Home = () => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center h-[100vh] -mt-[90px]"
    ></div>
  );
};

export default Home;
