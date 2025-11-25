"use client";

import { useEffect } from "react";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-red-100 px-4">
          <div className="max-w-2xl w-full">
            <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 text-center">
              <div className="mb-8">
                <div className="inline-flex items-center justify-center w-24 h-24 bg-red-100 rounded-full mb-6">
                  <svg
                    className="w-12 h-12 text-red-600"
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
                <h1 className="text-4xl font-bold text-neutral-900 mb-4">
                  Critical Error
                </h1>
                <p className="text-lg text-neutral-700 mb-2">
                  A critical error has occurred in the application.
                </p>
                <p className="text-sm text-neutral-600">
                  Our team has been automatically notified and is working to
                  resolve this issue.
                </p>
                {error.digest && (
                  <div className="mt-4">
                    <p className="text-xs text-neutral-500 font-mono bg-neutral-100 rounded-lg px-4 py-2 inline-block">
                      Error ID: {error.digest}
                    </p>
                  </div>
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={reset}
                  className="px-8 py-4 bg-red-600 text-white font-bold rounded-full hover:bg-red-700 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Try Again
                </button>
                <a
                  href="/"
                  className="px-8 py-4 border-2 border-neutral-700 text-neutral-700 font-bold rounded-full hover:bg-neutral-700 hover:text-white transition duration-300"
                >
                  Return Home
                </a>
              </div>

              <div className="mt-8 pt-8 border-t border-neutral-200">
                <p className="text-sm text-neutral-600">
                  If this problem persists, please contact our support team at{" "}
                  <a
                    href="mailto:support@strategybyte.com"
                    className="text-neutral-800 font-semibold hover:underline"
                  >
                    support@strategybyte.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
