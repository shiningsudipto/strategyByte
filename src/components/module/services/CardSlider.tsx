"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

function CardSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const cards = [
    {
      headline: "Daily 280+",
      metric: "+ 40% CVR",
      subHeadline: "Inbound Calls",
      subMetric: "in Online Payments",
      quote:
        '"StrategyByte delivered outstanding results with smart digital marketing and seamless SEO implementation."',
      author: "Jack Wilson",
      title: "VP, Growth",
      avatar: "/avatars/avatar1.png",
      company: "/brands/dropbox.png",
    },
    {
      headline: "37% Upsells",
      metric: "250M Secured",
      subHeadline: "in Q3",
      subMetric: "Funding Round",
      quote:
        '"Their team helped us streamline our funnel, driving higher retention and customer lifetime value."',
      author: "Sarah Chen",
      title: "CEO",
      avatar: "/avatars/avatar1.png",
      company: "/brands/microsoft.png",
    },
    {
      headline: "250M Funding",
      metric: "+ 25% Growth",
      subHeadline: "in One Quarter",
      subMetric: "Revenue Expansion",
      quote:
        '"We saw immediate impact from their data-driven approach. The platform is now faster, stable, and converting better than ever."',
      author: "Mike Johnson",
      title: "Head of Product",
      avatar: "/avatars/avatar1.png",
      company: "/brands/slack.png",
    },
  ];

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  // Auto-advance slides every 4 seconds
  useEffect(() => {
    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, []);

  const getCardPosition = (index: number) => {
    const diff = (index - currentIndex + cards.length) % cards.length;

    if (diff === 0) return "front";
    if (diff === 1) return "middle";
    if (diff === 2) return "back";
    return "hidden";
  };

  return (
    <div className="relative lg:w-[500px] w-[400px] mx-auto lg:h-[456px] h-[450px]">
      {cards.map((card, index) => {
        const position = getCardPosition(index);

        return (
          <div
            key={index}
            className={`
                    absolute inset-0 rounded-2xl shadow-2xl transition-all duration-500 ease-out
                    bg-white border border-white/20
                    ${
                      position === "front"
                        ? "z-30 scale-100 rotate-0 translate-x-0 translate-y-0 opacity-100"
                        : ""
                    }
                    ${
                      position === "middle"
                        ? "z-20 right-20 -top-10 scale-x-[1.2] rotate-6 translate-x-6 translate-y-3"
                        : ""
                    }
                    ${
                      position === "back"
                        ? "z-10 right-40 -top-20 scale-x-[1.4] rotate-12 translate-x-12 translate-y-6"
                        : ""
                    }
                    ${
                      position === "hidden"
                        ? "z-0 scale-85 rotate-4 translate-x-16 translate-y-8 opacity-0"
                        : ""
                    }
                    ${isAnimating ? "transition-all duration-600" : ""}
                  `}
          >
            <div className="p-5 flex flex-col justify-between h-full">
              <div className="grid grid-cols-2 lg:gap-5 gap-2 text-neutral-700">
                <div className="bg-[#F4F4F4] p-4 rounded-full">
                  <p className="lg:text-2xl text-lg font-bold">
                    {card.headline}
                  </p>
                  <p className="lg:text-lg text-base font-semibold">
                    {card.subHeadline}
                  </p>
                </div>
                <div className="bg-[#F4F4F4] p-4 rounded-full">
                  <p className="lg:text-2xl text-lg font-bold">{card.metric}</p>
                  <p className="lg:text-lg text-base font-semibold">
                    {card.subMetric}
                  </p>
                </div>
              </div>
              <h4 className="lg:text-xl text-lg font-semibold">{card.quote}</h4>
              <div className="flex items-center justify-between gap-5">
                <div className="flex items-center gap-4">
                  <Image
                    alt={card.author}
                    src={card.avatar}
                    height={48}
                    width={48}
                  />
                  <div>
                    <p className="font-bold">{card.author}</p>
                    <p className="text-neutral-500 text-sm">{card.title}</p>
                  </div>
                </div>
                <Image
                  alt={card.author}
                  src={card.company}
                  height={36}
                  width={120}
                  className="h-9 w-auto"
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CardSlider;
