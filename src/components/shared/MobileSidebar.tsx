import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetFooter,
  SheetClose,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Image from "next/image";
import CustomButton from "../ui/CustomButton";
import { FiArrowUpRight } from "react-icons/fi";
import { navLinks } from "@/constants/importantLinks";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import Link from "next/link";

const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu size={24} />
      </SheetTrigger>
      <SheetContent className="w-full">
        <SheetHeader className="bg-navy-100 ">
          <SheetTitle>
            <Image
              src="/strategyByte-dark.png"
              alt="Strategy Byte Logo"
              height={30}
              width={217}
            />
          </SheetTitle>
        </SheetHeader>
        <Accordion type="single" collapsible className="w-full p-5 space-y-1">
          {navLinks.map((item, index) =>
            item.dropdown ? (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border-b-0"
              >
                <AccordionTrigger className="font-semibold text-neutral-500 text-[17px] border-b-0 p-0">
                  {item.label}
                </AccordionTrigger>
                <AccordionContent className="border-t-0 grid grid-cols-2 gap-2 mt-4">
                  {item.dropdown.map((drop, i) => (
                    <SheetClose asChild key={i}>
                      <Link
                        href={drop.path}
                        className="block bg-navy-100 p-3 rounded-[12px] group"
                      >
                        <h4 className="font-bold text-xl text-neutral-700 group-hover:underline">
                          {drop.title}
                        </h4>
                        <p className="text-xs text-neutral-700 mt-3">
                          {drop.desc}
                        </p>
                      </Link>
                    </SheetClose>
                  ))}
                </AccordionContent>
              </AccordionItem>
            ) : (
              <SheetClose asChild key={index}>
                <Link
                  href={item.path}
                  className="block mb-3 font-semibold text-neutral-500"
                >
                  {item.label}
                </Link>
              </SheetClose>
            )
          )}
        </Accordion>
        <SheetFooter className="border-t py-8 space-y-5">
          <CustomButton
            className="justify-center"
            label="Book a Session"
            icon={<FiArrowUpRight />}
            variant="primary"
          />
          <button className="rounded-full py-4 px-6 bg-[#1F1E1D] text-white font-semibold cursor-pointer">
            Call
          </button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
