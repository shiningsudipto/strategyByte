"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-neutral-50 to-neutral-100 px-4">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-[40px] shadow-xl p-8 md:p-12 text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-red-100 rounded-full mb-6">
              <svg
                className="w-10 h-10 text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                />
              </svg>
            </div>
            <h1 className="text-4xl font-bold text-neutral-800 mb-4">
              Oops! Something went wrong
            </h1>
            <p className="text-lg text-neutral-600 mb-2">
              We encountered an unexpected error while processing your request.
            </p>
            {error.digest && (
              <p className="text-sm text-neutral-500 font-mono bg-neutral-100 rounded-lg px-4 py-2 inline-block mt-4">
                Error ID: {error.digest}
              </p>
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={reset}
              className="px-8 py-4 bg-neutral-700 text-white font-bold rounded-full hover:bg-neutral-600 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Try Again
            </button>
            <Link
              href="/"
              className="px-8 py-4 border-2 border-neutral-700 text-neutral-700 font-bold rounded-full hover:bg-neutral-700 hover:text-white transition duration-300"
            >
              Go Home
            </Link>
          </div>

          <div className="mt-8 pt-8 border-t border-neutral-200">
            <p className="text-sm text-neutral-500">
              If this problem persists, please{" "}
              <Link
                href="/book-a-session"
                className="text-neutral-700 font-semibold hover:underline"
              >
                contact our support team
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
