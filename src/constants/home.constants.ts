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
