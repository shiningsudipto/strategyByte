import { caseStudiesList } from "@/constants/caseStudies.constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

const CaseStudyPage = async ({ params }: Props) => {
  const { slug } = await params;

  // Find the case study by slug
  const caseStudy = caseStudiesList.find((study) => study.slug === slug);

  // If case study not found, show 404
  if (!caseStudy) {
    notFound();
  }

  return (
    <div className="min-h-screen  bg-gray-50">
      <div className="container section-gap py-10">
        {/* Breadcrumb Navigation */}
        <div className="pb-6">
          <div className="flex items-center gap-2 text-sm text-neutral-600">
            <Link href="/" className="hover:text-neutral-900 transition-colors">
              Home
            </Link>
            <ChevronRight size={16} />
            <Link
              href="/resources"
              className="hover:text-neutral-900 transition-colors"
            >
              Resources
            </Link>
            <ChevronRight size={16} />
            <Link
              href="/resources/case-studies"
              className="hover:text-neutral-900 transition-colors"
            >
              Case Studies
            </Link>
            <ChevronRight size={16} />
            <span className="text-neutral-900 font-medium">
              {caseStudy.title}
            </span>
          </div>
        </div>

        {/* Header Section */}
        <div className="border-y border-neutral-200">
          <div className="container py-8">
            <div className="flex items-start justify-between gap-6 flex-wrap">
              <div className="flex-1 min-w-[300px]">
                <h1 className="font-chopin text-neutral-700 text-4xl lg:text-5xl font-bold mb-4">
                  {caseStudy.title}
                </h1>
                <p className="text-neutral-600 text-lg">
                  Published: {caseStudy.published}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* PDF Viewer */}
        <div className="py-10">
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-neutral-200">
            <iframe
              src={`${caseStudy.file}#view=FitH`}
              className="w-full h-[calc(100vh-200px)] min-h-[800px]"
              title={caseStudy.title}
              style={{ border: "none" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyPage;
