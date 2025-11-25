"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function CareerError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Career page error:", error);
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
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h1 className="text-3xl font-bold text-neutral-800 mb-4">
              Unable to Load Career Information
            </h1>
            <p className="text-lg text-neutral-600 mb-2">
              We encountered an error while loading career opportunities.
            </p>
            <p className="text-sm text-neutral-500">
              This position may no longer be available or the page is temporarily
              unavailable.
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
              href="/career"
              className="px-6 py-3 border-2 border-neutral-700 text-neutral-700 font-bold rounded-full hover:bg-neutral-700 hover:text-white transition duration-300"
            >
              View All Positions
            </Link>
          </div>

          <div className="mt-8 pt-6 border-t border-neutral-300">
            <p className="text-sm text-neutral-600">
              Interested in joining our team?{" "}
              <Link
                href="/book-a-session"
                className="text-neutral-800 font-semibold hover:underline"
              >
                Get in touch
              </Link>
            </p>
          </div>

          <div className="mt-6">
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
