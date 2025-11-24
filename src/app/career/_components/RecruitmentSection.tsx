import React from 'react';
import Link from 'next/link';

export interface Job {
  id: string;
  title: string;
  location: string;
  experience: string;
  type: 'Hybrid' | 'Remote' | 'In-office';
  featured?: boolean; // For filled button style
  responsibilities: string[];
  qualifications: string[];
  benefits: string[];
}

const jobs: Job[] = [
  {
    id: 'business-analyst-mid-sr',
    title: 'Business Analyst (Mid/Sr.)',
    location: 'Sydney, Australia',
    experience: '4+ Years',
    type: 'Hybrid',
    responsibilities: [
      'Analyze business requirements and translate them into technical specifications',
      'Work closely with stakeholders to understand their needs and objectives',
      'Create detailed documentation and process flows',
      'Conduct data analysis to identify trends and insights',
      'Facilitate workshops and meetings with cross-functional teams',
    ],
    qualifications: [
      '4+ years of experience as a Business Analyst',
      'Strong analytical and problem-solving skills',
      'Excellent communication and presentation abilities',
      'Experience with data analysis tools and methodologies',
      'Bachelors degree in Business, IT, or related field',
    ],
    benefits: [
      'Salary range monthly 3000 AUD - 5500 AUD',
      'Health insurance coverage',
      'Flexible hybrid work arrangement',
      'Professional development opportunities',
      'Annual performance bonuses',
    ],
  },
  {
    id: 'vp-brand-management',
    title: 'VP, Brand Management',
    location: 'Sydney, Australia',
    experience: '8+ Years',
    type: 'Hybrid',
    featured: true,
    responsibilities: [
      'Lead and develop the overall brand strategy',
      'Manage and mentor a team of brand managers',
      'Oversee brand positioning and messaging across all channels',
      'Collaborate with executive leadership on business strategy',
      'Drive brand innovation and market differentiation',
    ],
    qualifications: [
      '8+ years of experience in brand management with 3+ years in leadership',
      'Proven track record of successful brand strategy execution',
      'Strong leadership and team management skills',
      'Excellent strategic thinking and creative problem-solving',
      'MBA or equivalent advanced degree preferred',
    ],
    benefits: [
      'Salary range monthly 8000 AUD - 12000 AUD',
      'Executive health insurance package',
      'Flexible hybrid work arrangement',
      'Stock options and performance bonuses',
      'Executive coaching and development programs',
    ],
  },
  {
    id: 'ux-engineer',
    title: 'UX Engineer',
    location: 'Remote (Asia Pacific)',
    experience: '3+ Years',
    type: 'Remote',
    responsibilities: [
      'Design and implement user-centered interfaces',
      'Conduct user research and usability testing',
      'Collaborate with product and engineering teams',
      'Create wireframes, prototypes, and high-fidelity designs',
      'Ensure design consistency across all platforms',
    ],
    qualifications: [
      '3+ years of UX/UI design experience',
      'Proficiency in Figma, Sketch, or similar design tools',
      'Strong understanding of user-centered design principles',
      'Experience with front-end technologies (HTML, CSS, JavaScript)',
      'Portfolio demonstrating design work and process',
    ],
    benefits: [
      'Salary range monthly 2500 AUD - 4500 AUD',
      'Fully remote work arrangement',
      'Health insurance coverage',
      'Home office setup allowance',
      'Professional development budget',
    ],
  },
  {
    id: 'lead-backend-engineer',
    title: 'Lead Backend Engineer',
    location: 'Dhaka, Bangladesh',
    experience: '7+ Years',
    type: 'Hybrid',
    responsibilities: [
      'Lead backend development and architecture decisions',
      'Mentor and guide junior and mid-level engineers',
      'Design scalable and maintainable backend systems',
      'Collaborate with frontend teams and product managers',
      'Ensure code quality and best practices',
    ],
    qualifications: [
      '7+ years of backend development experience',
      'Strong expertise in Node.js, Python, or Java',
      'Experience with cloud platforms (AWS, GCP, or Azure)',
      'Deep understanding of database design and optimization',
      'Leadership experience and excellent communication skills',
    ],
    benefits: [
      'Salary range monthly 1800 AUD - 3500 AUD',
      'Health insurance coverage',
      'Hybrid work mode with flexible schedule',
      'Learning and development opportunities',
      'Annual performance bonuses',
    ],
  },
  {
    id: 'senior-content-writer',
    title: 'Senior Content Writer',
    location: 'Remote, Full-time',
    experience: '4+ Years',
    type: 'Remote',
    responsibilities: [
      'Create engaging content for various platforms',
      'Develop content strategy aligned with brand voice',
      'Edit and proofread content from team members',
      'Collaborate with marketing and design teams',
      'Research industry trends and topics',
    ],
    qualifications: [
      '4+ years of professional content writing experience',
      'Exceptional writing and editing skills',
      'Experience with SEO and content optimization',
      'Strong research and analytical abilities',
      'Portfolio of published work',
    ],
    benefits: [
      'Salary range monthly 2000 AUD - 3800 AUD',
      'Fully remote work arrangement',
      'Health insurance coverage',
      'Flexible working hours',
      'Professional development opportunities',
    ],
  },
  {
    id: 'seo-manager',
    title: 'SEO Manager',
    location: 'Remote, Full-time',
    experience: '5+ Years',
    type: 'Remote',
    responsibilities: [
      'Develop and execute comprehensive SEO strategies',
      'Conduct keyword research and competitive analysis',
      'Optimize website content and technical SEO elements',
      'Monitor and report on SEO performance metrics',
      'Stay updated with search engine algorithm changes',
    ],
    qualifications: [
      '5+ years of SEO experience with proven results',
      'Deep knowledge of SEO tools and analytics platforms',
      'Experience with technical SEO and site audits',
      'Strong analytical and data-driven mindset',
      'Excellent communication and reporting skills',
    ],
    benefits: [
      'Salary range monthly 2800 AUD - 4500 AUD',
      'Fully remote work arrangement',
      'Health insurance coverage',
      'Professional certification support',
      'Performance-based bonuses',
    ],
  },
  {
    id: 'marketing-coordinator',
    title: 'Marketing Co-ordinator',
    location: 'Sydney, Australia (Part Time)',
    experience: '1+ Years / Fresher',
    type: 'Hybrid',
    responsibilities: [
      'Support marketing campaign execution',
      'Coordinate with internal teams and external vendors',
      'Manage marketing materials and assets',
      'Assist with social media content and scheduling',
      'Track and report marketing metrics',
    ],
    qualifications: [
      '1+ years of marketing experience or fresh graduate',
      'Strong organizational and communication skills',
      'Familiarity with marketing tools and platforms',
      'Creative mindset and attention to detail',
      'Bachelors degree in Marketing or related field',
    ],
    benefits: [
      'Salary range monthly 1200 AUD - 2200 AUD (Part-time)',
      'Flexible part-time schedule',
      'Health insurance coverage',
      'Growth opportunities within the company',
      'Training and mentorship programs',
    ],
  },
];

const ArrowUpRightIcon = ({ color = '#1f1e1d' }: { color?: string }) => (
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
              We&apos;re growing, and you can be a part of it! Join our team as we are looking for passionate candidates to work in a dynamic environment. Come be a part of our thriving community!
            </p>
          </div>

          {/* Job Listings */}
          <div className="flex flex-col gap-10">
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
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-[#605d5b]">Location</p>
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 font-semibold text-[#1f1e1d]">
                          {job.location}
                        </p>
                      </div>

                      {/* Experience */}
                      <div className="flex flex-col gap-1 md:gap-2">
                        <p className="text-sm md:text-base lg:text-lg leading-6 md:leading-7 text-[#605d5b]">Experience</p>
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
                      ${job.featured
                        ? 'bg-[#1f1e1d] hover:bg-[#000000]'
                        : 'border-[1.5px] border-[#1f1e1d] hover:bg-[#f5f5f5]'
                      }
                    `}
                  >
                    <span
                      className={`
                        text-sm md:text-base leading-5 md:leading-6 font-bold
                        ${job.featured ? 'text-white' : 'text-[#1f1e1d]'}
                      `}
                    >
                      Apply Now
                    </span>
                    <ArrowUpRightIcon color={job.featured ? '#ffffff' : '#1f1e1d'} />
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
