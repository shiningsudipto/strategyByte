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
import CustomButton from "@/components/ui/CustomButton";
import { generateFAQSchema } from "@/lib/utils";

const FAQ = () => {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section
        style={{ backgroundImage: `url("/FAQ Section Background.png")` }}
        className="relative bg-cover bg-center overflow-hidden container section-gap xl:py-40 lg:py-20 py-10 lg:px-0 px-5"
      >
        <h2 className="heading">
          Get the answers you are <br /> looking for about{" "}
          <span className="text-[#90949F]">StrategyByte</span>
        </h2>
        <div className="flex lg:flex-row flex-col lg:mt-16 xl:gap-16 lg:gap-10 gap-10">
          <div>
            <Accordion
              type="single"
              collapsible
              defaultValue={"what-sets-us-apart"}
            >
              {faqs.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={item.value}
                  className="lg:py-8 py-4"
                >
                  <AccordionTrigger className="text-neutral-700 text-xl font-bold cursor-pointer mb-0">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-lg text-neutral-700 mt-6">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            {/* <CustomButton
            label="See All FAQ's"
            icon={<FiArrowUpRight />}
            variant="bordered"
            className="lg:hidden block mx-auto"
          /> */}
          </div>
          <div className="">
            <div className="xl:w-[512px] lg:w-[400px] w-full border border-[#E0E3EB] rounded-[24px] p-8 bg-white flex flex-col justify-center items-center">
              <Image
                src={shqImg}
                alt="still-have-questions"
                height={48}
                width={120}
              />
              <h3 className="xl:text-4xl lg:text-3xl font-semibold text-neutral-700 mb-4 mt-6 text-center">
                Still Have Question?
              </h3>
              <p className="text-neutral-500 text-lg mb-11 text-center">
                Can’t find the answer you’re looking for? Please Call to our
                friendly team
              </p>
              <CustomButton
                label="Make a Quick Call"
                icon={<Phone size={16} />}
                size={12}
                variant="primary"
                href="tel:0410745998"
              />
            </div>
          </div>
        </div>
        {/* <CustomButton
        className="hidden lg:inline-flex"
        label="See All FAQ's"
        icon={<FiArrowUpRight />}
        variant="bordered"
      /> */}
      </section>
    </>
  );
};

export default FAQ;
