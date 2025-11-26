import React from "react";
import type { Metadata } from "next";
import CaseStudyCard from "../../_components/CaseStudyCard";
import { caseStudiesList } from "@/constants/caseStudies.constants";

export const metadata: Metadata = {
  title: "Client Case Studies | StrategyByte Success Stories",
  description:
    "See our results. Explore case studies showing how we've helped businesses like yours achieve measurable growth and ROI.",
  alternates: {
    canonical: "https://www.strategybyte.com.au/resources/case-studies",
  },
  openGraph: {
    title: "Client Case Studies | StrategyByte Success Stories",
    description:
      "See our results. Explore case studies showing how we've helped businesses like yours achieve measurable growth and ROI.",
    url: "https://www.strategybyte.com.au/resources/case-studies",
    siteName: "StrategyByte",
    images: [
      {
        url: "/logo/open-graph-image.png",
        width: 1200,
        height: 630,
        alt: "Client Case Studies - StrategyByte Success Stories",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "Client Case Studies | StrategyByte Success Stories",
    card: "summary_large_image",
    description:
      "See our results. Explore case studies showing how we've helped businesses like yours achieve measurable growth and ROI.",
    images: ["/logo/twitter-card.png"],
  },
};

const CaseStudies = () => {
  return (
    <main className="py-20">
      <section className="container section-gap">
        <CaseStudyCard data={caseStudiesList} />
      </section>
    </main>
  );
};

export default CaseStudies;
