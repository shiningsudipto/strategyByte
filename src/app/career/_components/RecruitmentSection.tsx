import React from "react";
import Link from "next/link";

export interface Job {
  id: string;
  title: string;
  location: string;
  experience: string;
  type: "Hybrid" | "Remote" | "In-office";
  featured?: boolean; // For filled button style
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: "vp-brand-management",
    title: "VP, Brand Management",
    location: "Sydney, Australia",
    experience: "8+ Years",
    type: "Hybrid",
    featured: true,
    responsibilities: [
      "Lead and develop the overall brand strategy",
      "Manage and mentor a team of brand managers",
      "Oversee brand positioning and messaging across all channels",
      "Collaborate with executive leadership on business strategy",
      "Drive brand innovation and market differentiation",
    ],
    qualifications: [
      "8+ years of experience in brand management with 3+ years in leadership",
      "Proven track record of successful brand strategy execution",
      "Strong leadership and team management skills",
      "Excellent strategic thinking and creative problem-solving",
      "MBA or equivalent advanced degree preferred",
    ],
    benefits: [
      "Salary range monthly 8000 AUD - 12000 AUD",
      "Executive health insurance package",
      "Flexible hybrid work arrangement",
      "Stock options and performance bonuses",
      "Executive coaching and development programs",
    ],
  },
];

const ArrowUpRightIcon = ({ color = "#1f1e1d" }: { color?: string }) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5.83333 14.1667L14.1667 5.83333M14.1667 5.83333H5.83333M14.1667 5.83333V14.1667"
      stroke={color}
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const RecruitmentSection = () => {
  return (
    <section className="w-full py-16 md:py-20 bg-white px-2">
      <div className="container mx-auto px-4">
        <div className="max-w-7xl mx-auto flex flex-col gap-20">
          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="text-3xl md:text-4xl lg:text-[56px] leading-tight md:leading-[78px] font-bold">
              <p className="text-[#2eb67d]">We are open</p>
              <p className="text-[#1f1e1d]">currently recruiting</p>
            </div>
            <p className="text-base md:text-lg lg:text-xl leading-6 md:leading-8 text-[#605d5b]">
              We&apos;re growing, and you can be a part of it! Join our team as
              we are looking for passionate candidates to work in a dynamic
              environment. Come be a part of our thriving community!
            </p>
          </div>

          {/* Job Listings */}
          <div className="flex flex-col gap-10 border-t pt-10">
            {jobs.map((job, index) => (
              <React.Fragment key={index}>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0">
                  {/* Job Info */}
                  <div className="flex flex-col gap-6 md:gap-10 md:max-w-[800px]">
                    {/* Job Title */}
                    <h3 className="text-2xl md:text-3xl lg:text-4xl leading-tight md:leading-[48px] font-semibold text-[#1f1e1d]">
                      {job.title}
                    </h3>

                    {/* Job Details */}
                    <div className="flex flex-col sm:flex-row gap-6 md:gap-10">
                      {/* Location */}
                      <div className="flex flex-col gap-1 md:gap-2">
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-[#605d5b]">
                          Location
                        </p>
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 font-semibold text-[#1f1e1d]">
                          {job.location}
                        </p>
                      </div>

                      {/* Experience */}
                      <div className="flex flex-col gap-1 md:gap-2">
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-[#605d5b]">
                          Experience
                        </p>
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 font-semibold text-[#1f1e1d]">
                          {job.experience}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Apply Button */}
                  <Link
                    href={`/career/${job.id}`}
                    className={`
                      flex items-center justify-center gap-2 px-4 md:px-5 py-2.5 md:py-3 rounded-full h-10 md:h-12 transition-all
                      w-full md:w-auto
                      ${
                        job.featured
                          ? "bg-[#1f1e1d] hover:bg-[#000000]"
                          : "border-[1.5px] border-[#1f1e1d] hover:bg-[#f5f5f5]"
                      }
                    `}
                  >
                    <span
                      className={`
                        text-sm md:text-base leading-5 md:leading-6 font-bold
                        ${job.featured ? "text-white" : "text-[#1f1e1d]"}
                      `}
                    >
                      Apply Now
                    </span>
                    <ArrowUpRightIcon
                      color={job.featured ? "#ffffff" : "#1f1e1d"}
                    />
                  </Link>
                </div>

                {/* Divider - Don't show after last item */}
                {index < jobs.length - 1 && (
                  <div className="w-full h-[1px] bg-[#d1cdc9]" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecruitmentSection;
export { jobs };
