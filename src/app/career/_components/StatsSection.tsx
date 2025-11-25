"use client";
import React, { useState, useEffect, useRef } from "react";

// Stats data array
const statsData = [
  {
    id: 1,
    value: 43,
    suffix: "+",
    label: "Brand Shaped",
  },
  {
    id: 2,
    value: 6150,
    suffix: "+",
    label: "Hours Worked",
  },
  {
    id: 3,
    value: 650,
    suffix: "M",
    label: "Help Revenue",
  },
  {
    id: 4,
    value: 250,
    suffix: "+",
    label: "Projects",
  },
];

// Counter Component
const StatCounter = ({
  value,
  suffix,
}: {
  value: number;
  suffix: string;
}) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = value / steps;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      if (currentStep <= steps) {
        setCount(Math.min(Math.floor(increment * currentStep), value));
      } else {
        clearInterval(timer);
        setCount(value);
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return (
    <div ref={counterRef}>
      <p className="text-3xl sm:text-4xl md:text-5xl lg:text-[56px] leading-tight md:leading-[78px] font-semibold text-[#091736]">
        {count}
        {suffix}
      </p>
    </div>
  );
};

const StatsSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-2 max-w-7xl mx-auto mt-12 md:mt-16">
      {statsData.map((stat) => (
        <div
          key={stat.id}
          className="bg-[#f6f9ff] rounded-2xl p-4 md:p-5 flex flex-col gap-1"
        >
          <StatCounter value={stat.value} suffix={stat.suffix} />
          <p className="text-sm sm:text-base md:text-lg text-[#605d5b]">
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default StatsSection;
