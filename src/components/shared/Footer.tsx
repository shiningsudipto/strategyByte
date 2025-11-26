import {
  company,
  contact,
  resources,
  services,
} from "@/constants/footer.constants";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook } from "react-icons/fa";
import { Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-navy-bg">
      <div className="container section-gap text-white xl:pt-40 lg:pt-20 pt-10 pb-10 lg:pb-16">
        {/* 1st section */}
        <div className="lg:pb-16 pb-10 lg:px-0 px-5 grid lg:grid-cols-4 grid-cols-1 gap-y-5">
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Services</h4>
            <div className="flex flex-col">
              {services.map((item, index) => (
                <Link
                  href={item?.href}
                  key={index}
                  className="py-2 inline-block hover:text-yellow-200 transition duration-300"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Resources</h4>
            <div className="flex flex-col">
              {resources.map((item, index) => (
                <Link
                  href={item?.href}
                  key={index}
                  className="py-2 inline-block hover:text-yellow-200 transition duration-300"
                >
                  {item.title}
                </Link>
              ))}
              <Link
                href={"/book-a-session"}
                className="p-[2px] rounded-full bg-gradient-to-r from-[#FFC605] to-[#76B0FF] inline-block mt-2 w-fit hover:scale-105 transition duration-300"
              >
                <button className="bg-navy-bg py-2 px-4 rounded-full">
                  Schedule a Call
                </button>
              </Link>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Company</h4>
            <div className="flex flex-col">
              {company.map((item, index) => (
                <Link href={item.href} key={index} className="py-2 hover:text-yellow-200 transition duration-300">
                  {item.title}{" "}
                  {index === 0 && (
                    <span className="text-yellow-200">We&apos;re hiring</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Contact</h4>
            <div className="flex flex-col gap-1">
              {contact.map((item, index) => {
                const IconComponent =
                  item.icon === "phone"
                    ? Phone
                    : item.icon === "email"
                    ? Mail
                    : MapPin;

                return (
                  <a
                    key={index}
                    href={item.href}
                    target={item.icon === "location" ? "_blank" : undefined}
                    rel={
                      item.icon === "location"
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="py-2 flex items-start gap-3 hover:text-yellow-200 transition duration-300 group"
                  >
                    <IconComponent
                      size={20}
                      className="shrink-0 mt-0.5 group-hover:scale-110 transition duration-300"
                    />
                    <span className="flex-1">
                      <span className="font-medium">{item.type}:</span>{" "}
                      {item.displayValue}
                    </span>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="lg:py-16 py-10 lg:px-0 px-5 border-t border-[#4971C7] flex lg:flex-row flex-col items-center xl:gap-x-[100px] lg:gap-x-10">
          <Image
            src={"/strategyByte-big-light-logo-.png"}
            alt="strategyByte"
            height={84}
            width={500}
            className="xl:w-full h-auto"
          />
          <div className="xl:w-auto lg:w-[600px]">
            <p>
              We offer a comprehensive suite of digital marketing services that
              cover all aspects of our online presence. From SEO and social
              media marketing to content creation and PPC advertising, they have
              the expertise and resources to handle our diverse marketing
              needs. 
            </p>
            <div className="flex items-center gap-2 mt-2">
              <Image
                src={"/Google.webp"}
                alt="strategyByte"
                height={100}
                width={100}
                quality={100}
                className="size-[100px]"
              />
              <Image
                src={"/Hubspot.webp"}
                alt="strategyByte"
                height={100}
                width={100}
                quality={100}
                className="size-[105px]"
              />
            </div>
          </div>
        </div>
        {/* 3rd section */}
        <div className="flex justify-between items-center lg:flex-row flex-col">
          <p>All right reserved, copyright ©2025 Australia</p>
          {/* <p>Cookies settings</p> */}
          <div className="flex items-center gap-4">
            <a
              href="https://www.facebook.com/StrategyByteAU"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:text-yellow-200 transform duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="https://www.instagram.com/strategybyte_au"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:text-yellow-200 transform duration-300"
            >
              <RiInstagramFill size={30} />
            </a>
            <a
              href="https://www.linkedin.com/company/strategybyte"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 hover:text-yellow-200 transform duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
