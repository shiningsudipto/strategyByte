"use client";

import React, { useState } from "react";

interface Step {
  step: number;
  title: string;
  description?: string;
  color: string;
  rotation: number;
}

const steps: Step[] = [
  {
    step: 1,
    title: "Apply",
    description: "Submit your application, and we'll take it from there!",
    color: "#ff974d",
    rotation: -10,
  },
  {
    step: 2,
    title: "Recruitment Interview",
    description:
      "We sit with you to understand you skills, experience and goals.",
    color: "#A3B9FF",
    rotation: 10,
  },
  {
    step: 3,
    title: "Technical Assessment",
    description:
      "Showcase your experience in a hands-on test so we know where you stand.",
    color: "#ED9FB1",
    rotation: -10,
  },
  {
    step: 4,
    title: "Final Round Interview",
    description:
      "Meet with your potential future team mates to confirm the fit.",
    color: "#FFC605",
    rotation: 10,
  },
  {
    step: 5,
    title: "Decision & Offer",
    description:
      "We review your journey and, if everything aligns we share with you your offer details.",
    color: "#35FBBC",
    rotation: 10,
  },
];

const HiringStepsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(1);

  React.useEffect(() => {
    const updateCardsPerView = () => {
      if (window.innerWidth >= 1024) {
        setCardsPerView(3); // Desktop: 3 cards
      } else if (window.innerWidth >= 768) {
        setCardsPerView(2); // Tablet: 2 cards
      } else {
        setCardsPerView(1); // Mobile: 1 card
      }
    };

    updateCardsPerView();
    window.addEventListener("resize", updateCardsPerView);
    return () => window.removeEventListener("resize", updateCardsPerView);
  }, []);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(steps.length - cardsPerView, prev + 1));
  };

  const visibleSteps = steps.slice(currentIndex, currentIndex + cardsPerView);

  return (
    <section className="w-full py-16 md:py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-10">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-4xl lg:text-[56px] leading-tight md:leading-[78px] font-bold text-[#1f1e1d]">
              Simple 5 step of <span className="text-[#0061ff]">hiring</span>
            </h2>
            <p className="text-base md:text-lg lg:text-xl leading-6 md:leading-8 text-[#605d5b]">
              We&apos;re looking for adaptable, pro-active team players who are
              ready to drive global impact. Is that you?
            </p>
          </div>

          {/* Cards Container */}
          <div className="relative min-h-[400px] md:min-h-[450px] lg:h-[496px] w-full">
            <div className="flex gap-3 md:gap-5 items-center h-full justify-center md:justify-start">
              {visibleSteps.map((step) => (
                <div
                  key={step.step}
                  className="flex items-center justify-center shrink-0"
                  style={{
                    transform: `rotate(${step.rotation}deg)`,
                    transformOrigin: "center",
                  }}
                >
                  <div
                    className={`
                      w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px]
                      h-[320px] sm:h-[340px] md:h-[350px] lg:h-[356px]
                      rounded-2xl p-6 md:p-8 flex flex-col justify-between
                      shadow-[0px_12px_16px_-4px_rgba(16,24,40,0.08),0px_4px_6px_-2px_rgba(16,24,40,0.03)]
                      ${
                        step.color === "#ffffff"
                          ? "bg-white border border-[#eef1f8]"
                          : ""
                      }
                    `}
                    style={{
                      backgroundColor: step.color,
                    }}
                  >
                    <div className="flex flex-col gap-4 md:gap-6 h-full justify-between">
                      {/* Step Number */}
                      <div className="text-lg md:text-xl font-semibold text-[#1f1e1d] leading-6 md:leading-8">
                        Step {step.step}
                      </div>

                      {/* Title & Description */}
                      <div className="flex flex-col gap-3 md:gap-4">
                        <h3 className="text-2xl sm:text-3xl md:text-4xl leading-tight md:leading-[48px] font-bold text-[#1f1e1d]">
                          {step.title}
                        </h3>
                        {step.description && (
                          <p className="text-sm md:text-base leading-5 md:leading-6 font-semibold text-[#1f1e1d]">
                            {step.description}
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex flex-col-reverse md:flex-row items-center justify-between w-full gap-4 md:gap-0 md:h-12">
            {/* Pagination Dots - Bottom Left on Desktop, Top on Mobile */}
            <div className="flex gap-2 justify-center md:justify-start">
              {steps.slice(0, 3).map((_, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setCurrentIndex(
                      Math.min(index, steps.length - cardsPerView)
                    )
                  }
                  className={`
                    w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all
                    ${index === currentIndex ? "bg-[#1f1e1d]" : "bg-[#aaa6a2]"}
                  `}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Navigation Buttons - Bottom Right on Desktop, Bottom on Mobile */}
            <div className="flex gap-3 md:gap-4">
              <button
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className={`
                  w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] flex items-center justify-center
                  transition-all
                  ${
                    currentIndex === 0
                      ? "border-[#aaa6a2] cursor-not-allowed opacity-50"
                      : "border-[#1f1e1d] hover:bg-[#f5f5f5]"
                  }
                `}
                aria-label="Previous slide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  className="md:w-5 md:h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 15L7.5 10L12.5 5"
                    stroke={currentIndex === 0 ? "#aaa6a2" : "#1f1e1d"}
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              <button
                onClick={handleNext}
                disabled={currentIndex >= steps.length - cardsPerView}
                className={`
                  w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] flex items-center justify-center
                  transition-all
                  ${
                    currentIndex >= steps.length - cardsPerView
                      ? "border-[#aaa6a2] cursor-not-allowed opacity-50"
                      : "border-[#1f1e1d] hover:bg-[#f5f5f5]"
                  }
                `}
                aria-label="Next slide"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 20 20"
                  className="md:w-5 md:h-5"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M7.5 15L12.5 10L7.5 5"
                    stroke={
                      currentIndex >= steps.length - cardsPerView
                        ? "#aaa6a2"
                        : "#1f1e1d"
                    }
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringStepsCarousel;
