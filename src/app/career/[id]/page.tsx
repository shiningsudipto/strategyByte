import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { jobs } from '../_components/RecruitmentSection';

interface PageProps {
  params: {
    id: string;
  };
}

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
      stroke="#1f1e1d"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ArrowUpRightIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="white"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function JobDetailPage({ params }: PageProps) {
  const job = jobs.find((j) => j.id === params.id);

  if (!job) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFFBF0] py-6 md:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-8 md:gap-12 lg:gap-20">
          {/* Back Button */}
          <Link
            href="/career"
            className="w-10 h-10 md:w-12 md:h-12 rounded-full border-[1.5px] border-[#1f1e1d] flex items-center justify-center hover:bg-[#f5f5f5] transition-all"
          >
            <ArrowLeftIcon />
          </Link>

          {/* Hero Section */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-12 lg:gap-20">
            {/* Job Title and Info */}
            <div className="flex-1 flex flex-col gap-4 md:gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#281c00] leading-tight">
                {job.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl font-semibold text-[#605d5b]">
                {job.location} | Full Time | {job.type}
              </p>
            </div>

            {/* Apply Button */}
            <button className="bg-[#1f1e1d] flex items-center justify-center gap-2 px-4 md:px-6 py-3 md:py-3.5 h-12 md:h-16 rounded-full hover:bg-black transition-all w-full md:w-auto">
              <span className="text-base md:text-xl leading-6 md:leading-8 font-bold text-white">
                Apply Now
              </span>
              <ArrowUpRightIcon />
            </button>
          </div>

          {/* Content Container */}
          <div className="bg-white border-2 border-[#eef1f8] rounded-3xl md:rounded-[40px] p-6 md:p-8 lg:p-12">
            <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
              {/* Responsibilities Section */}
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl leading-tight md:leading-[62px] font-semibold text-[#1f1e1d]">
                  Responsibilities
                </h2>
                <ul className="list-disc pl-6 md:pl-9 space-y-3 md:space-y-4">
                  {job.responsibilities.map((item, index) => (
                    <li
                      key={index}
                      className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-[#1f1e1d]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-full h-0 border-t-2 border-dashed border-[#6684c4]" />

              {/* Qualifications Section */}
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl leading-tight md:leading-[62px] font-semibold text-[#1f1e1d]">
                  Qualifications
                </h2>
                <ul className="list-disc pl-6 md:pl-9 space-y-3 md:space-y-4">
                  {job.qualifications.map((item, index) => (
                    <li
                      key={index}
                      className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-[#1f1e1d]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Divider */}
              <div className="w-full h-0 border-t-2 border-dashed border-[#6684c4]" />

              {/* Benefits & Conditions Section */}
              <div className="flex flex-col gap-6 md:gap-8 lg:gap-10">
                <h2 className="text-2xl sm:text-3xl md:text-3xl leading-tight md:leading-[62px] font-semibold text-[#1f1e1d]">
                  Benefits & Conditions
                </h2>
                <ul className="list-disc pl-6 md:pl-9 space-y-3 md:space-y-4">
                  {job.benefits.map((item, index) => (
                    <li
                      key={index}
                      className="text-base sm:text-lg md:text-xl leading-6 sm:leading-7 md:leading-8 text-[#1f1e1d]"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// Generate static params for all job IDs
export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id,
  }));
}
