"use client";

import { useEffect, useState } from "react";
import BecomeAuthor from "../../_components/BecomeAuthor";
import BlogCard from "../../_components/BlogCard";
import { FiArrowUpRight } from "react-icons/fi";
interface Article {
  sys: {
    id: string;
    publishedAt: string;
  };
  title: string;
  slug: string;
  description: string;
  thumbnail: {
    url: string;
  };
  blogCategory: {
    title: string;
    slug: string;
  };
}

const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [loadingMore, setLoadingMore] = useState(false);

  useEffect(() => {
    const fetchInitialArticles = async () => {
      try {
        const res = await fetch("/api/articles?limit=8&skip=0");
        const data = await res.json();
        console.log(data);
        setArticles(data.articles || []);
        setTotal(data.total || 0);
      } catch (error) {
        console.error("Error fetching articles:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInitialArticles();
  }, []);

  const handleSeeAll = async () => {
    setLoadingMore(true);
    try {
      // Fetch all remaining articles
      const remainingCount = total - articles.length;
      const res = await fetch(
        `/api/articles?limit=${remainingCount}&skip=${articles.length}`
      );
      const data = await res.json();
      setArticles((prev) => [...prev, ...(data.articles || [])]);
    } catch (error) {
      console.error("Error loading more articles:", error);
    } finally {
      setLoadingMore(false);
    }
  };

  const hasMore = articles.length < total;

  if (loading) {
    return (
      <main className="py-10">
        <div className="container section-gap text-center">
          <p>Loading articles...</p>
        </div>
      </main>
    );
  }

  const firstFourArticles = articles.slice(0, 4);
  const remainingArticles = articles.slice(4);

  return (
    <main className="py-10">
      <section className="container section-gap">
        <BlogCard data={firstFourArticles} />
      </section>

      <BecomeAuthor />

      {remainingArticles.length > 0 && (
        <section className="container section-gap mt-10">
          <BlogCard data={remainingArticles} />
        </section>
      )}

      {hasMore && (
        <div className="container section-gap mt-10">
          <button
            onClick={handleSeeAll}
            disabled={loadingMore}
            className="p-4 rounded-full border-2 border-neutral-700 text-neutral-700 font-bold flex items-center w-fit gap-2 mt-14 group-hover:bg-white transition duration-300 hover:bg-neutral-700 hover:text-white"
          >
            {loadingMore ? (
              "Loading..."
            ) : (
              <>
                View Full Service <FiArrowUpRight />
              </>
            )}
          </button>
        </div>
      )}
    </main>
  );
};

export default Articles;
