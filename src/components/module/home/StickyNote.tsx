"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

import stickyImg from "@/assets/Sticky-Note.png";
const StickyNote = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: false, margin: "200px" });
  return (
    <div ref={sectionRef}>
      <motion.img
        src={stickyImg.src}
        alt="Sticky Note"
        initial={{ y: -300, opacity: 0, rotate: 0 }}
        animate={
          isInView
            ? { y: 0, opacity: 1, rotate: 0 }
            : { y: -300, opacity: 0, rotate: -20 }
        }
        transition={{ duration: 1, ease: "easeOut", bounce: 0.4 }}
        className="absolute xl:left-[64.5%] lg:left-[72%] xl:top-32 lg:top-12 -translate-x-1/2 z-0 w-44"
      />
    </div>
  );
};

export default StickyNote;
