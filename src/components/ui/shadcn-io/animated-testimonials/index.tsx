"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "../../avatar";

export type Testimonial = {
  text: string;
  name: string;
  role: string;
  photo: string;
};

export interface AnimatedTestimonialsProps {
  testimonials: Testimonial[];
  autoplay?: boolean;
  className?: string;
}

export const AnimatedTestimonials = ({
  testimonials,
  autoplay = false,
  className,
}: AnimatedTestimonialsProps) => {
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const isActive = (index: number) => {
    return index === active;
  };

  useEffect(() => {
    if (autoplay) {
      const interval = setInterval(handleNext, 4000);
      return () => clearInterval(interval);
    }
  }, [autoplay]);

  const randomRotateY = () => {
    return Math.floor(Math.random() * 21) - 10;
  };

  return (
    <div
      className={cn(
        "mx-auto max-w-sm px-4 py-20 font-sans antialiased md:max-w-4xl md:px-8 lg:px-12",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-20">
        <div className="relative">
          <div className="relative h-80 lg:w-[400px]">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{
                    opacity: 0,
                    scale: 0.9,
                    z: -100,
                    rotate: randomRotateY(),
                  }}
                  animate={{
                    opacity: isActive(index) ? 1 : 0.7,
                    scale: isActive(index) ? 1 : 0.95,
                    z: isActive(index) ? 0 : -100,
                    rotate: isActive(index) ? 0 : randomRotateY(),
                    zIndex: isActive(index)
                      ? 40
                      : testimonials.length + 2 - index,
                    y: isActive(index) ? [0, -80, 0] : 0,
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.9,
                    z: 100,
                    rotate: randomRotateY(),
                  }}
                  transition={{
                    duration: 0.4,
                    ease: "easeInOut",
                  }}
                  className="absolute inset-0 origin-bottom"
                >
                  <div className="bg-white h-[450px] lg:h-[370px] rounded-2xl"></div>
                </motion.div>
              ))}
            </AnimatePresence>
            <div className="flex flex-col justify-between m-5 absolute top-0 z-50">
              {/* content */}
              <motion.div
                key={active}
                initial={{
                  y: 20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: -20,
                  opacity: 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "easeInOut",
                }}
              >
                <div className="flex items-center gap-4">
                  <Avatar className="size-12">
                    <AvatarImage
                      src={testimonials[active].photo}
                      alt={testimonials[active].name}
                    />
                    <AvatarFallback>
                      {testimonials[active].name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-2xl font-bold text-black ">
                      {testimonials[active].name}
                    </h3>
                    <p className="text-sm">{testimonials[active].role}</p>
                  </div>
                </div>
                <motion.p className="mt-8 text-lg">
                  {testimonials[active].text.split(" ").map((word, index) => (
                    <motion.span
                      key={index}
                      initial={{
                        filter: "blur(10px)",
                        opacity: 0,
                        y: 5,
                      }}
                      animate={{
                        filter: "blur(0px)",
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        duration: 0.2,
                        ease: "easeInOut",
                        delay: 0.02 * index,
                      }}
                      className="inline-block"
                    >
                      {word}&nbsp;
                    </motion.span>
                  ))}
                </motion.p>
              </motion.div>
            </div>
          </div>
        </div>
        {/* navigation buttons */}
        <div className="flex gap-4 mt-24 lg:mt-12 justify-center">
          <button
            onClick={handlePrev}
            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
          >
            <ChevronLeft className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400" />
          </button>
          <button
            onClick={handleNext}
            className="group/button flex h-7 w-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
          >
            <ChevronRight className="h-5 w-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400" />
          </button>
        </div>
      </div>
    </div>
  );
};
