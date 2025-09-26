"use client";
import { motion, useMotionValue, useSpring } from "framer-motion";
import Image from "next/image";
import dataImg from "@/assets/Data Driven Business Optimization.png";
import WavyLine from "./WavyLine";

const HeroAnimate = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(y, { stiffness: 100, damping: 20 });
  const rotateY = useSpring(x, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const percentX = offsetX / rect.width - 0.5;
    const percentY = offsetY / rect.height - 0.5;

    x.set(percentX * -20);
    y.set(percentY * 20);
  };
  return (
    <div className="relative h-[600px] mt-20">
      <WavyLine />
      <div
        className="absolute bottom-0 w-full mx-auto perspective-[1000px]"
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
      >
        <motion.div
          style={{
            rotateX,
            rotateY,
            transformStyle: "preserve-3d",
          }}
          className="mx-auto size-[600px]"
        >
          <Image
            src={dataImg}
            alt="Data Driven Business Optimization"
            sizes="500"
            className="rounded-2xl"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroAnimate;
