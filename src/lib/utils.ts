import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

type FAQItem = {
  question: string;
  answer: string;
  points?: string[];
};

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.points && faq.points.length > 0
          ? `${faq.answer} ${faq.points.join(" ")}`
          : faq.answer,
      },
    })),
  };
}
