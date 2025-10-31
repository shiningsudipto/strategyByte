"use client";
import Tree from "@/components/icons/Tree";
import { menuLinks } from "@/constants/importantLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const pathname = usePathname();
  const headerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLUListElement>(null);

  useEffect(() => {
    const headerEl = headerRef.current;
    const menuEl = menuRef.current;
    if (!headerEl || !menuEl) return;

    gsap.to([headerEl, menuEl], {
      backgroundColor: "#ffffff",
      ease: "none",
      scrollTrigger: {
        trigger: headerEl,
        start: "top top",
        end: "+=300",
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
        end: "+=300",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <>
      {/* Header */}
      <div
        ref={headerRef}
        className="-mt-[100px] lg:pt-[130px] pt-[100px] bg-[#EDF4FF]"
      >
        <div className="container section-gap flex justify-between items-center lg:h-[290px] h-[240px]">
          <div>
            <h6 className="text-navy-700">
              Welcome to StrategyByte’s <strong>Growth Journal</strong>, where
              your journey begins and never stops.
            </h6>
            <h1 className="heading mt-5">Industry updates, growth & more</h1>
          </div>
          <Tree />
        </div>
      </div>

      {/* Sticky Menu */}
      <div className="bg-[#EDF4FF]">
        <ul
          ref={menuRef}
          className="container articleMenu section-gap flex items-center sticky top-0 z-10 border-b"
        >
          {menuLinks.map((link, index) => {
            const isActive = pathname === link.href;

            return (
              <li key={index}>
                <Link
                  href={link.href}
                  className={`px-4 py-2 inline-block font-semibold ${
                    isActive
                      ? "text-primary border-b-2 border-primary"
                      : "text-neutral-500"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default Header;
