import { articleBlogsQuery } from "@/constants/query";
import { fetchFromContentful } from "@/lib/contentful";
import { TArticle } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import BecomeAuthor from "../../_components/BecomeAuthor";

const tags = [
  "Growth Mapping",
  "Activation & Engagement",
  "Design",
  "Brand Strategy",
  "Sales Hacks",
];

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "short",
    year: "numeric",
  };
  return date
    .toLocaleDateString("en-US", options)
    .replace(" ", " ")
    .replace(/(\w{3}) (\d{4})/, "$1, $2");
}

const Articles = async () => {
  const res = await fetchFromContentful(articleBlogsQuery);
  const articles = res?.data?.newsCollection.items || [];
  // console.log(articles);
  return (
    <main className="py-10">
      <section className="container section-gap">
        <div className="space-y-8">
          {articles?.map((item: TArticle, index: number) => {
            const lastArticle = articles.length === index + 1;
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
                      href={item.slug}
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
      </section>
      <BecomeAuthor />
    </main>
  );
};

export default Articles;
