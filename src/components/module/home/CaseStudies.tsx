import microsoftImg from "@/assets/caseStudy/microsoft.png";
import paypalImg from "@/assets/caseStudy/paypal.png";
import { StaticImageData } from "next/image";

type CaseStudy = {
  id: number;
  title: string;
  img: StaticImageData;
  tags: string[];
  published: string;
  cta: string;
};

const caseStudies: CaseStudy[] = [
  {
    id: 1,
    img: microsoftImg,
    title:
      "How we StrategyByte help Dropbox to increase their Retention 3X in just 2 Quarter of 2024",
    tags: [
      "Growth Mapping",
      "Activation & Engagement",
      "Design",
      "Brand Strategy",
      "Sales Hacks",
    ],
    published: "7 Sep, 2024",
    cta: "Read Full Case",
  },
  {
    id: 2,
    img: paypalImg,
    title:
      "Paypal remain 100M profitable in 2025 early quarter, How we help them to increase CVR in App",
    tags: [
      "Product Mapping",
      "Activation & Engagement",
      "Analysis",
      "Marketing",
    ],
    published: "7 Sep, 2024",
    cta: "Read Full Case",
  },
  {
    id: 3,
    img: microsoftImg,
    title: "Case Study Title Placeholder 3",
    tags: ["Tag A", "Tag B", "Tag C"],
    published: "Date Placeholder",
    cta: "Read Full Case",
  },
  {
    id: 4,
    img: paypalImg,
    title: "Case Study Title Placeholder 4",
    tags: ["Tag X", "Tag Y", "Tag Z"],
    published: "Date Placeholder",
    cta: "Read Full Case",
  },
];

const CaseStudies = () => {
  return (
    <div className="py-40 section-gap">
      <h2 className="text-neutral-700 text-[56px] font-chopin font-bold">
        Proven Case Studies
      </h2>
      <p className="text-neutral-500 text-xl mt-4">
        Straight from the StrategyByte desk — industry news, strategy
        breakdowns, and growth hacks that actually work.
      </p>
    </div>
  );
};

export default CaseStudies;
