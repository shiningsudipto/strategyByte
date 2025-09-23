import bgImg from "@/assets/faq-bg.png";
import { faqs } from "@/constants/home.constants";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";
import shqImg from "@/assets/FAQ Images.png";
import { Phone } from "lucide-react";

const FAQ = () => {
  return (
    <section
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="relative bg-cover bg-center overflow-hidden container section-gap py-40"
    >
      <h2 className="heading">
        Get the answers you are <br /> looking for about{" "}
        <span className="text-[#90949F]">StrategyByte</span>
      </h2>
      <div className="flex mt-16 gap-16">
        <div className="">
          <Accordion
            type="single"
            collapsible
            defaultValue={"what-sets-us-apart"}
          >
            {faqs.map((item, index) => (
              <AccordionItem key={index} value={item.value} className="py-8">
                <AccordionTrigger className="text-neutral-700 text-xl font-bold cursor-pointer mb-0">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-lg text-neutral-700 mt-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="w-[512px]">
          <div className="border border-[#E0E3EB] rounded-[24px] p-8 bg-white w-full flex flex-col justify-center items-center">
            <Image
              src={shqImg}
              alt="still-have-questions"
              height={48}
              width={120}
            />
            <h3 className="text-4xl font-semibold text-neutral-700 mb-4 mt-6 text-center">
              Still Have Question?
            </h3>
            <p className="text-neutral-500 text-lg mb-11 text-center">
              Can’t find the answer you’re looking for? Please Call to our
              friendly team
            </p>
            <button className="bg-yellow-200 font-bold cursor-pointer py-5 px-6 rounded-full text-neutral-700 flex items-center gap-2 book-shadow hover:bg-neutral-700 group transition duration-300">
              <span className="group-hover:underline group-hover:text-yellow-200 transition duration-300">
                Make a Quick Call
              </span>
              <span className="bg-neutral-700 group-hover:bg-yellow-200 group-hover:text-neutral-700 rounded-full p-1 size-6 text-white transition duration-300">
                <Phone size={16} />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
