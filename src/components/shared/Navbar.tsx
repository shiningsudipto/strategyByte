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

const navLinks = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "Services",
    path: "/services",
    dropdown: [
      {
        title: "Website Development",
        desc: "We design fast, functional, and conversion-driven websites tailored to specific goals",
        path: "#",
      },
      {
        title: "Digital Marketing & SEO",
        desc: "We create targeted campaigns that drive real results and help your brand grow smarter online",
        path: "#",
      },
      {
        title: "Strategic Branding Management",
        desc: "We build, position, and manage your brand with data-driven strategies that boost recognition, trust, and long-term growth",
        path: "#",
      },
      {
        title: "Business Optimization",
        desc: "We optimize your business by refining workflows, maintaining content consistency, and implementing scalable systems to boost efficiency, clarity, and growth.",
        path: "#",
      },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    dropdown: [
      {
        title: "Case Studies",
        desc: "We design fast, functional, and conversion-driven websites tailored to specific goals",
        path: "#",
      },
      {
        title: "Byte Articles",
        desc: "We create targeted campaigns that drive real results and help your brand grow smarter online",
        path: "#",
      },
    ],
  },
  {
    label: "About",
    path: "/about",
  },
];

const Navbar = () => {
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
            {navLinks.map((link, idx) => (
              <NavigationMenuItem key={idx} className="">
                {link.dropdown ? (
                  <>
                    <NavigationMenuTrigger className="cursor-pointer bg-transparent  hover:rounded-full hover:bg-[#EEF1F8] hover:text-[#1F1E1D] py-[10px] px-4 text-[#605D5B] font-semibold text-base">
                      {link.label}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="p-4">
                      <ul className="grid grid-cols-2 gap-4 md:w-[500px] lg:w-[990px]">
                        {link.dropdown.map((item, i) => (
                          <li
                            key={i}
                            className="p-3 bg-[#F9F9F9] text-[#040915] rounded-[20px] group 
                 transition-all duration-300"
                          >
                            <Link
                              href={item.path}
                              className="block rounded-md p-2 h-full"
                            >
                              <p className="block uppercase font-bold text-2xl">
                                {item.title}
                              </p>
                              <p className="block mt-3">{item.desc}</p>
                              <p className="flex justify-end">
                                <button className="p-5 group-hover:bg-[#FFC605] group-hover:border-0 border border-[#2F3F61] rounded-full">
                                  <FiArrowUpRight size={16} />
                                </button>
                              </p>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  <NavigationMenuLink asChild>
                    <Link
                      href={link.path}
                      className="hover:rounded-full px-4 py-[10px] text-[#605D5B] hover:text-[#1F1E1D] font-semibold text-base"
                    >
                      {link.label}
                    </Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-2">
          <button className="rounded-full py-[10px] px-6 bg-[#1F1E1D] text-white font-semibold cursor-pointer">
            Call
          </button>
          <Button className="rounded-full">
            Book a Demo
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
