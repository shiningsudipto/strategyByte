"use client";

import Tree from "@/components/icons/Tree";
import { menuLinks } from "@/constants/importantLinks";
import Link from "next/link";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Articles = () => {
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const headerEl = headerRef.current;
    const menuEl = menuRef.current;
    if (!headerEl || !menuEl) return;

    // Animate header and menu background color on scroll
    gsap.to([headerEl, menuEl], {
      backgroundColor: "#ffffff",
      ease: "none",
      scrollTrigger: {
        trigger: headerEl,
        start: "top top",
        end: "+=300", // scroll distance
        scrub: true,
      },
    });
    gsap.to([headerEl, menuEl], {
      height: "180px",
      alignItems: "end",
      ease: "none",
      scrollTrigger: {
        trigger: headerEl,
        start: "top top",
        end: "+=300", // scroll distance
        scrub: true,
      },
    });

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div>
      {/* Header */}
      <div
        ref={headerRef}
        className="section-gap -mt-[100px] pt-[130px] bg-[#EDF4FF]"
      >
        {/* Header content */}
        <div className="flex justify-between items-center h-[290px]">
          <div>
            <h6 className="text-navy-700">
              Welcome to StrategyByte’s <strong>Growth Journal</strong>, where
              your journey begins and never stops.
            </h6>
            <h1 className="heading mt-5">Industry updates, growth & more</h1>
          </div>
          <div>
            <Tree />
          </div>
        </div>
      </div>

      {/* Sticky menu */}
      <ul
        ref={menuRef}
        className="articleMenu section-gap flex items-center bg-[#EDF4FF] sticky top-0 z-10 border-b"
      >
        {menuLinks.map((link, index) => (
          <li key={index}>
            <Link
              href={link.href}
              className={`px-4 py-2 inline-block font-semibold ${
                link.active
                  ? "text-primary border-b-2 border-primary"
                  : "text-neutral-500"
              }`}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Blog content */}
      <div className="p-10 space-y-20">
        <p className="text-xl font-medium">Blog Post 1</p>
        <p className="text-xl font-medium">Blog Post 2</p>
        <p className="text-xl font-medium">Blog Post 3</p>
        <p className="text-xl font-medium">Blog Post 4</p>
        <p className="text-xl font-medium">Blog Post 5</p>
      </div>
    </div>
  );
};

export default Articles;
