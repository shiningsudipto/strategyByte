"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function ArticleError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Article error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-2xl w-full">
        <div className="bg-navy-100 rounded-[40px] shadow-lg p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-100 rounded-full mb-6">
              <svg
                className="w-8 h-8 text-yellow-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-neutral-800 mb-4">
              Unable to Load Article
            </h1>
            <p className="text-lg text-neutral-600 mb-2">
              We encountered an error while trying to load this content.
            </p>
            <p className="text-sm text-neutral-500">
              The article may have been moved or is temporarily unavailable.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="px-6 py-3 bg-neutral-700 text-white font-bold rounded-full hover:bg-neutral-600 transition duration-300"
            >
              Try Again
            </button>
            <Link
              href="/resources/byte-articles"
              className="px-6 py-3 border-2 border-neutral-700 text-neutral-700 font-bold rounded-full hover:bg-neutral-700 hover:text-white transition duration-300"
            >
              Browse All Articles
            </Link>
          </div>

          <div className="mt-8">
            <Link
              href="/"
              className="text-sm text-neutral-600 hover:text-neutral-800 hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
