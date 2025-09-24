import {
  company,
  contact,
  resources,
  services,
} from "@/constants/footer.constants";
import Image from "next/image";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin, FaFacebook, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <nav className="bg-navy-bg">
      <div className="container section-gap text-white pt-40 pb-16">
        {/* 1st section */}
        <div className="pb-16 grid lg:grid-cols-4 grid-cols-1">
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Services</h4>
            <div>
              {services.map((item, index) => (
                <p key={index} className="py-2">
                  {item.title}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Resources</h4>
            <div>
              {resources.map((item, index) => (
                <p key={index} className="py-2">
                  {item.title}
                </p>
              ))}
              <div className="p-[2px] rounded-full bg-gradient-to-r from-[#FFC605] to-[#76B0FF] inline-block mt-2">
                <button className="bg-navy-bg py-2 px-4 rounded-full">
                  Schedule a Call
                </button>
              </div>
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Company</h4>
            <div>
              {company.map((item, index) => (
                <p key={index} className="py-2">
                  {item.title}{" "}
                  {index === 0 && (
                    <span className="text-yellow-200">We’re hiring</span>
                  )}
                </p>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-xl font-semibold py-2 mb-2">Contact</h4>
            <div className="">
              {contact.map((item, index) => (
                <p key={index} className="py-2">
                  <span className="">{item.type}:</span> {item.value}
                </p>
              ))}
            </div>
          </div>
        </div>
        {/* 2nd section */}
        <div className="py-16 border-t border-[#4971C7] flex lg:flex-row flex-col items-center gap-x-[100px]">
          <Image
            src={"/strategyByte-big-light-logo-.png"}
            alt="strategyByte"
            height={84}
            width={500}
            className="w-full"
          />
          <p>
            We offer a comprehensive suite of digital marketing services that
            cover all aspects of our online presence. From SEO and social media
            marketing to content creation and PPC advertising, they have the
            expertise and resources to handle our diverse marketing needs. 
          </p>
        </div>
        {/* 3rd section */}
        <div className="flex justify-between items-center lg:flex-row flex-col">
          <p>All right reserved, copyright ©2025 Australia</p>
          <p>Cookies settings</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-3 hover:text-yellow-200 transform duration-300"
            >
              <FaFacebook size={28} />
            </a>
            <a
              href="#"
              className="p-3 hover:text-yellow-200 transform duration-300"
            >
              <RiInstagramFill size={30} />
            </a>
            <a
              href="#"
              className="p-3 hover:text-yellow-200 transform duration-300"
            >
              <FaLinkedin size={28} />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
