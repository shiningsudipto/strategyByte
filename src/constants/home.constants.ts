type ProcessStep = {
  id: number;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 1,
    title: "Discovery",
    description:
      "We start by identifying your business goals, audience, and challenges to define a clear digital strategy.",
  },
  {
    id: 2,
    title: "Planning",
    description:
      "Our team develops a structured project roadmap with milestones, timelines, and resource allocation to guide execution.",
  },
  {
    id: 3,
    title: "Development",
    description:
      "Using the latest technologies, we build secure, scalable websites and custom digital platforms designed for long-term growth.",
  },
  {
    id: 4,
    title: "Testing",
    description:
      "We conduct comprehensive QA to ensure site speed, cross-device compatibility, and SEO readiness.",
  },
  {
    id: 5,
    title: "Deployment",
    description:
      "Once ready, we launch your solution with full support—ensuring smooth operation, ongoing optimization, and measurable results.",
  },
];

export const faqs = [
  {
    value: "focus-areas",
    question: "What are your focus areas as a marketing agency?",
    answer:
      "We focus on digital marketing, strategic branding, UI/UX design, and business optimization to help businesses grow online.",
  },
  {
    value: "what-sets-us-apart",
    question: "What sets StrategyByte apart from other top marketing agencies?",
    answer:
      "We deliver holistic solutions powered by strategic marketing and data-driven insights to boost visibility, engagement, and impact.",
  },
  {
    value: "services-for-startups",
    question:
      "What services do you offer for start-ups, and how can they add value to my business?",
    answer:
      "We provide branding, website/app development, and marketing support to help start-ups build credibility and scale quickly.",
  },
  {
    value: "redesign-help",
    question:
      "Can you help us redesign our app, website, or enterprise/B2B software?",
    answer:
      "Yes, we specialize in redesigning digital products with modern, user-friendly, and scalable UI/UX solutions.",
  },
  {
    value: "time-estimation",
    question: "How do you estimate the time for the UI/UX project?",
    answer:
      "Timelines depend on project scope and complexity, ranging from weeks for smaller projects to months for larger ones.",
  },
  {
    value: "project-cost",
    question: "How much does a UI/UX design project cost?",
    answer:
      "Costs vary by size, features, and customization. We provide a clear, tailored proposal after understanding your needs.",
  },
];
