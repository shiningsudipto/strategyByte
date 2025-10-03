import Hero from "@/components/module/services/Hero";
import Marketing from "@/components/module/services/Marketing";
import { hero, marketing } from "@/constants/service.contentMarketing";

const page = () => {
  return (
    <main>
      <Hero {...hero} />
      <Marketing {...marketing} />
    </main>
  );
};

export default page;
