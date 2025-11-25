import React from 'react';
import Link from 'next/link';

const ArrowLeftIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const sections = [
  {
    title: 'License & Content Liability',
    content:
      "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
  },
  {
    title: 'Privacy Policy',
    content:
      "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
  },
  {
    title: 'Reservation Of Rights',
    content:
      "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
  },
  {
    title: 'Cookies',
    content:
      "We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that are rising on your Website. No link(s) should appear on any Website that may be interpreted as libellous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.",
  },
];

export default function TermsAndConditionPage() {
  return (
    <div className="min-h-screen bg-[#FFFBF0] py-8 md:py-12 lg:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-16">
          {/* Content Container */}
          <div className="flex flex-col gap-10 md:gap-16 lg:gap-20">
            {/* Back Button */}
            <Link
              href="/"
              className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#1f1e1d] flex items-center justify-center hover:bg-black transition-all"
            >
              <ArrowLeftIcon />
            </Link>

            {/* Hero Section */}
            <div className="flex flex-col gap-4 md:gap-5 lg:gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight md:leading-[72px] lg:leading-[92px] font-bold text-[#281c00]">
                Terms & Conditions
              </h1>
              <div className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#605d5b] text-justify">
                <p>Welcome to StrategyByte!</p>
                <p>
                  These terms and conditions outline the rules and regulations for the use of Octet Design Studios Website,
                </p>
                <p>located at Sydney, Australia</p>
                <p>&nbsp;</p>
                <p>
                  By accessing this website we assume you accept these terms and conditions. Do not continue to use Octet Design Studio if you do not agree to take all of the terms and conditions stated on this page.
                </p>
                <p>&nbsp;</p>
                <p>
                  The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and all Agreements: &quot;Client&quot;, &quot;You&quot; and &quot;Your&quot; refers to you, the person log on this website and compliant to the Company&apos;s terms and conditions. &quot;The Company&quot;, &quot;Ourselves&quot;, &quot;We&quot;, &quot;Our&quot; and &quot;Us&quot;, refers to our Company. &quot;Party&quot;, &quot;Parties&quot;, or &quot;Us&quot;, refers to both the Client and ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner for the express purpose of meeting the Client&apos;s needs in respect of the provision of the Company&apos;s stated services, in accordance with and subject to, prevailing law of India. Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same.
                </p>
              </div>
            </div>
          </div>

          {/* Sections */}
          {sections.map((section, index) => (
            <div key={index} className="flex flex-col gap-6 md:gap-8 lg:gap-10">
              <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl leading-tight md:leading-[52px] lg:leading-[62px] font-semibold text-[#1f1e1d]">
                {section.title}
              </h2>
              <p className="text-sm sm:text-base md:text-lg leading-6 sm:leading-7 md:leading-8 text-[#1f1e1d] text-justify">
                {section.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
