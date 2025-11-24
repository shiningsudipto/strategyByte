import { TArticle } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import { format } from "date-fns";

const tags = [
  "Growth Mapping",
  "Activation & Engagement",
  "Design",
  "Brand Strategy",
  "Sales Hacks",
];

function formatDate(dateString: string): string {
  return format(new Date(dateString), "dd MMM, yyyy");
}

const BlogCard = ({ data }: { data: TArticle[] }) => {
  return (
    <div className="space-y-8">
      {data?.map((item: TArticle, index: number) => {
        const lastArticle = data.length === index + 1;
        return (
          <div
            key={item.sys.id}
            className={`grid lg:grid-cols-3 grid-cols-1 pb-8 gap-10 ${
              !lastArticle && "border-b"
            }`}
          >
            <div className="lg:col-span-2 flex flex-col justify-between">
              <div>
                <p className="text-lg text-neutral-600 mb-4">
                  Published : {formatDate(item.sys.publishedAt)}
                </p>
                <Link
                  href={`/resources/${item.slug}`}
                  className="2xl:text-4xl xl:text-3xl lg:text-2xl text-xl font-semibold lg:leading-[54px] text-neutral-600"
                >
                  {item.title}
                </Link>
              </div>
              <div className="flex items-center flex-wrap lg:w-1/2 gap-4 mt-5">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-yellow-100 rounded-xl border border-yellow-200 text-neutral-700 px-3 py-1.5 font-semibold text-sm"
                  >
                    {tag}
                  </p>
                ))}
              </div>
            </div>
            <div>
              <Image
                alt={item.title}
                src={item.thumbnail.url}
                height={285}
                width={500}
                className="rounded-2xl w-full object-cover"
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogCard;
