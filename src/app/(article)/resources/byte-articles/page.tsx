import { articleBlogsQuery } from "@/constants/query";
import { fetchFromContentful } from "@/lib/contentful";
import { TArticle } from "@/types/types";
import Image from "next/image";

const tags = [
  "Growth Mapping",
  "Activation & Engagement",
  "Design",
  "Brand Strategy",
  "Sales Hacks",
];

const Articles = async () => {
  const res = await fetchFromContentful(articleBlogsQuery);
  const articles = res?.data?.newsCollection.items || [];
  console.log(articles);
  return (
    <div className="section-gap py-10">
      <div className="space-y-8">
        {articles?.map((item: TArticle) => (
          <div
            key={item.sys.id}
            className="grid grid-cols-3 border-b pb-8 gap-10"
          >
            <div className="col-span-2 flex flex-col justify-between">
              <div>
                <p className="text-lg text-neutral-600 mb-4">
                  {item.sys.publishedAt}
                </p>
                <h3 className="text-4xl font-semibold leading-[54px] text-neutral-600">
                  {item.title}
                </h3>
              </div>
              <div className="flex items-center flex-wrap w-1/2 gap-4">
                {tags.map((tag, index) => (
                  <p
                    key={index}
                    className="bg-yellow-100 rounded-xl border border-yellow-200 text-neutral-700 px-3 py-1.5 font-semibold"
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
                className="rounded-xl w-full object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Articles;
