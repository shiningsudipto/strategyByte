"use client";
import Image from "next/image";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";
import { navLinks } from "@/constants/importantLinks";

const Navbar = () => {
  const [hoveredItem, setHoveredItem] = useState<number | null>();
  return (
    <nav className="sticky top-8 z-50 w-[950px] mx-auto px-6 py-4 rounded-full border bg-[#EEF1F85C]">
      <div className="container flex h-14 items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Image
            src="/strategyByte-dark.png"
            alt="Strategy Byte Logo"
            height={28}
            width={200}
          />
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            {navLinks.map((link) => {
              // If no dropdown, render a simple link
              if (!link.dropdown) {
                return (
                  <NavigationMenuItem key={link.label}>
                    <NavigationMenuLink asChild>
                      <Link
                        href={link.path}
                        className="hover:rounded-full px-4 py-[10px] text-[#605D5B] hover:text-[#1F1E1D] font-semibold text-base"
                      >
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              }

              // If dropdown, render trigger + content
              return (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuTrigger className="cursor-pointer bg-transparent hover:rounded-full hover:bg-[#EEF1F8] hover:text-[#1F1E1D] py-[10px] px-4 text-[#605D5B] font-semibold text-[15px]">
                    {link.label}
                  </NavigationMenuTrigger>

                  <NavigationMenuContent className="p-4 flex flex-col gap-5 rounded-[20px]">
                    {(() => {
                      const dropdown = link.dropdown || [];
                      const rows = [];
                      for (let i = 0; i < dropdown.length; i += 2) {
                        const rowItems = dropdown.slice(i, i + 2);
                        rows.push(
                          <ul
                            key={i}
                            className="flex gap-4 md:w-[500px] lg:w-[990px]"
                          >
                            {rowItems.map((item, idx) => {
                              const cardIndex = i + idx + 1; // unique index for hover
                              return (
                                <li
                                  key={item.title}
                                  onMouseEnter={() => setHoveredItem(cardIndex)}
                                  onMouseLeave={() => setHoveredItem(null)}
                                  className={`${
                                    hoveredItem === cardIndex
                                      ? "w-[60%]"
                                      : hoveredItem ===
                                        (cardIndex % 2 === 1
                                          ? cardIndex + 1
                                          : cardIndex - 1)
                                      ? "w-[40%]"
                                      : "w-[50%]"
                                  } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                                >
                                  <Link href={item.path}>
                                    <p className="uppercase font-bold text-2xl">
                                      {item.title}
                                    </p>
                                    <p className="mt-3">{item.desc}</p>
                                    <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                                      <FiArrowUpRight size={16} />
                                    </button>
                                  </Link>
                                </li>
                              );
                            })}
                          </ul>
                        );
                      }
                      return rows;
                    })()}
                  </NavigationMenuContent>
                </NavigationMenuItem>
              );
            })}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="rounded-full py-[10px] px-6 bg-[#1F1E1D] text-white font-semibold cursor-pointer">
            Call
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
