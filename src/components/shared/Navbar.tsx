"use client";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { FiArrowUpRight } from "react-icons/fi";
import { useState } from "react";

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

        {/* Nav links */}
        <NavigationMenu>
          <NavigationMenuList>
            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/"
                  className="hover:rounded-full px-4 py-[10px] text-[#605D5B] hover:text-[#1F1E1D] font-semibold text-base"
                >
                  Home
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services (dropdown) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer bg-transparent hover:rounded-full hover:bg-[#EEF1F8] hover:text-[#1F1E1D] py-[10px] px-4 text-[#605D5B] font-semibold text-base">
                Services
              </NavigationMenuTrigger>
              {/* services items */}
              <NavigationMenuContent className="p-4 flex flex-col gap-5 rounded-[20px]">
                <ul className="flex gap-4 md:w-[500px] lg:w-[990px]">
                  <li
                    onMouseEnter={() => setHoveredItem(1)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`${
                      hoveredItem === 2 ? "w-[40%]" : "w-[50%] hover:w-[60%]"
                    } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                  >
                    <Link href="#" className="">
                      <p className="uppercase font-bold text-2xl">
                        Website Development
                      </p>
                      <p className="mt-3">
                        We design fast, functional, and conversion-driven
                        websites tailored to specific goals
                      </p>
                      <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                        <FiArrowUpRight size={16} />
                      </button>
                    </Link>
                  </li>

                  <li
                    onMouseEnter={() => setHoveredItem(2)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`${
                      hoveredItem === 1 ? "w-[40%]" : "w-[50%] hover:w-[60%]"
                    } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                  >
                    <Link href="#" className="">
                      <p className="uppercase font-bold text-2xl">
                        Digital Marketing & SEO
                      </p>
                      <p className="mt-3">
                        We create targeted campaigns that drive real results and
                        help your brand grow smarter online
                      </p>
                      <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                        <FiArrowUpRight size={16} />
                      </button>
                    </Link>
                  </li>
                </ul>
                <ul className="flex gap-4 md:w-[500px] lg:w-[990px]">
                  <li
                    onMouseEnter={() => setHoveredItem(3)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`${
                      hoveredItem === 4 ? "w-[40%]" : "w-[50%] hover:w-[60%]"
                    } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                  >
                    <Link href="#" className="">
                      <p className="uppercase font-bold text-2xl">
                        Strategic Branding Management
                      </p>
                      <p className="mt-3">
                        We build, position, and manage your brand with
                        data-driven strategies that boost recognition, trust,
                        and long-term growth
                      </p>
                      <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                        <FiArrowUpRight size={16} />
                      </button>
                    </Link>
                  </li>

                  <li
                    onMouseEnter={() => setHoveredItem(4)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`${
                      hoveredItem === 3 ? "w-[40%]" : "w-[50%] hover:w-[60%]"
                    } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                  >
                    <Link href="#" className="">
                      <p className="uppercase font-bold text-2xl">
                        Business Optimization
                      </p>
                      <p className="mt-3">
                        We optimize your business by refining workflows,
                        maintaining content consistency, and implementing
                        scalable systems to boost efficiency, clarity, and
                        growth.
                      </p>
                      <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                        <FiArrowUpRight size={16} />
                      </button>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Resources (dropdown) */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className="cursor-pointer bg-transparent hover:rounded-full hover:bg-[#EEF1F8] hover:text-[#1F1E1D] py-[10px] px-4 text-[#605D5B] font-semibold text-base">
                Resources
              </NavigationMenuTrigger>
              <NavigationMenuContent className="p-4">
                <ul className="flex gap-4 md:w-[500px] lg:w-[990px]">
                  <li
                    onMouseEnter={() => setHoveredItem(1)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`${
                      hoveredItem === 2 ? "w-[40%]" : "w-[50%] hover:w-[60%]"
                    } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                  >
                    <Link href="#" className="">
                      <p className="uppercase font-bold text-2xl">
                        Case Studies
                      </p>
                      <p className="mt-3">
                        We design fast, functional, and conversion-driven
                        websites tailored to specific goals
                      </p>
                      <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                        <FiArrowUpRight size={16} />
                      </button>
                    </Link>
                  </li>

                  <li
                    onMouseEnter={() => setHoveredItem(2)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={`${
                      hoveredItem === 1 ? "w-[40%]" : "w-[50%] hover:w-[60%]"
                    } h-[225px] p-5 bg-[#F9F9F9] text-[#040915] rounded-[20px] group transition-all duration-300 relative`}
                  >
                    <Link href="#" className="">
                      <p className="uppercase font-bold text-2xl">
                        Byte Articles
                      </p>
                      <p className="mt-3">
                        We create targeted campaigns that drive real results and
                        help your brand grow smarter online
                      </p>
                      <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full absolute bottom-0 right-0 m-4">
                        <FiArrowUpRight size={16} />
                      </button>
                    </Link>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* About */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="hover:rounded-full px-4 py-[10px] text-[#605D5B] hover:text-[#1F1E1D] font-semibold text-base"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
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
