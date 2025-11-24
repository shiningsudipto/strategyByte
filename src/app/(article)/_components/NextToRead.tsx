"use client";

import { useEffect, useState } from "react";
import BlogCard from "./BlogCard";
import Link from "next/link";
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

interface NextToReadProps {
  categorySlug?: string;
  currentArticleSlug?: string;
}

const NextToRead = ({ categorySlug, currentArticleSlug }: NextToReadProps) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRelatedArticles = async () => {
      if (!categorySlug) {
        setLoading(false);
        return;
      }

      try {
        const excludeParam = currentArticleSlug
          ? `&excludeSlug=${currentArticleSlug}`
          : "";
        const res = await fetch(
          `/api/articles/category/${categorySlug}?limit=4${excludeParam}`
        );
        const data = await res.json();

        // Ensure data is an array
        if (Array.isArray(data)) {
          setArticles(data);
        } else {
          console.error("Invalid response format:", data);
          setArticles([]);
        }
      } catch (error) {
        console.error("Error fetching related articles:", error);
        setArticles([]);
      } finally {
        setLoading(false);
      }
    };

    fetchRelatedArticles();
  }, [categorySlug, currentArticleSlug]);

  if (loading) {
    return (
      <div className="mt-10 py-10 border-t">
        <h3 className="font-chopin text-neutral-700 text-4xl font-bold mb-4">
          Next to read
        </h3>
        <p className="text-neutral-600">Loading related articles...</p>
      </div>
    );
  }

  if (articles.length === 0) {
    return null;
  }

  return (
    <div className="mt-10 py-10 border-t">
      <h3 className="font-chopin text-neutral-700 text-4xl font-bold mb-8">
        Next to read
      </h3>
      <BlogCard data={articles} />
      <Link
        href={"/resources/byte-articles"}
        className="p-4 rounded-full border-2 border-neutral-700 text-neutral-700 font-bold flex items-center w-fit gap-2 mt-14 group-hover:bg-white transition duration-300 hover:bg-neutral-700 hover:text-white"
      >
        View Full Articles <FiArrowUpRight />
      </Link>
    </div>
  );
};

export default NextToRead;
