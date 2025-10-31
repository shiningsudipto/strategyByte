import { articleBlogsQuery } from "@/constants/query";
import { fetchFromContentful } from "@/lib/contentful";
import BecomeAuthor from "../../_components/BecomeAuthor";
import BlogCard from "../../_components/BlogCard";

const Articles = async () => {
  const res = await fetchFromContentful(articleBlogsQuery);
  const articles = res?.data?.newsCollection.items || [];
  return (
    <main className="py-10">
      <section className="container section-gap">
        <BlogCard data={articles.slice(0, 4)} />
      </section>
      <BecomeAuthor />
      <section className="container section-gap mt-10">
        <BlogCard data={articles.slice(4)} />
      </section>
    </main>
  );
};

export default Articles;
