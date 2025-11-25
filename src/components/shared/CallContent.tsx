"use client";
import Image from "next/image";
import NoteImg from "@/assets/contact-Notes.png";

const CallContent = () => {
  const phoneNumber = "0410745998";
  const displayNumber = "0410 745 998";

  return (
    <div className="p-6 sm:p-8 md:p-10 rounded-[24px] bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Phone Number Section */}
        <div className="flex flex-col gap-6 items-center lg:items-start justify-center">
          <div className="flex flex-col gap-3 text-center lg:text-left">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black">
              Call Us
            </h3>
            <p className="text-sm sm:text-base text-[#848484]">
              Get in touch with our team
            </p>
          </div>

          <a
            href={`tel:${phoneNumber}`}
            className="bg-[#ffc605] hover:bg-[#e6b304] transition-all text-white font-semibold text-base sm:text-lg md:text-xl px-8 py-4 rounded-lg shadow-md hover:shadow-lg"
          >
            {displayNumber}
          </a>
        </div>

        {/* Image Section */}
        <div className="flex justify-center w-full">
          <Image
            src={NoteImg}
            alt="Contact Notes"
            height={520}
            width={590}
            className="max-w-full h-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default CallContent;
