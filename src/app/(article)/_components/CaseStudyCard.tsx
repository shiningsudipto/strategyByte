import Image from "next/image";
import Link from "next/link";

interface CaseStudy {
  id: number;
  slug: string;
  img: string;
  thumbnail: {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
    blurWidth?: number;
    blurHeight?: number;
  };
  file: string;
  title: string;
  published: string;
  cta: string;
}

const CaseStudyCard = ({ data }: { data: CaseStudy[] }) => {
  return (
    <div className="space-y-8">
      {data?.map((item: CaseStudy, index: number) => {
        const lastCaseStudy = data.length === index + 1;
        return (
          <div
            key={item.id}
            className={`flex flex-col pb-8 ${!lastCaseStudy && "border-b"}`}
          >
            <div className="flex flex-col justify-between">
              <div>
                {/* Logo Image */}
                <Image
                  src={item.img}
                  alt={item.title}
                  height={100}
                  width={200}
                  className="h-[80px] w-auto mb-6"
                />
                <p className="text-lg text-neutral-600 mb-4">
                  Published : {item.published}
                </p>
                <Link
                  href={`/resources/case-studies/${item.slug}`}
                  className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold lg:leading-[54px] text-neutral-600 hover:text-neutral-700 transition-colors"
                >
                  {item.title}
                </Link>
              </div>
              <div>
                <Link
                  href={`/resources/case-studies/${item.slug}`}
                  className="bg-yellow-100 rounded-xl border border-yellow-200 text-neutral-700 px-3 py-1.5 font-semibold text-sm w-fit mt-5 inline-block hover:bg-yellow-200 transition-colors"
                >
                  {item.cta}
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyCard;
