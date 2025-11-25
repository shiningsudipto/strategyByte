import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-navy-50 via-neutral-50 to-yellow-50 px-4 py-20">
      <div className="max-w-4xl w-full">
        <div className="text-center">
          {/* 404 Large Number */}
          <div className="mb-8">
            <h1 className="text-[180px] md:text-[240px] font-bold leading-none bg-gradient-to-br from-neutral-800 via-neutral-600 to-neutral-400 bg-clip-text text-transparent">
              404
            </h1>
            <div className="relative -mt-20 md:-mt-28">
              <div className="inline-block relative">
                <div className="absolute inset-0 bg-yellow-200 blur-3xl opacity-30 rounded-full"></div>
                <svg
                  className="relative w-24 h-24 md:w-32 md:h-32 text-yellow-400 mx-auto animate-bounce"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="mb-12 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-800">
              Oops! Page Not Found
            </h2>
            <p className="text-xl md:text-2xl text-neutral-600 max-w-2xl mx-auto">
              The page you&apos;re looking for seems to have wandered off into
              the digital wilderness.
            </p>
            <p className="text-base md:text-lg text-neutral-500 max-w-xl mx-auto">
              Don&apos;t worry though, we&apos;ll help you get back on track!
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              href="/"
              className="group relative px-8 py-4 bg-neutral-700 text-white font-bold rounded-full hover:bg-neutral-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 flex items-center gap-3"
            >
              <svg
                className="w-5 h-5 transition-transform group-hover:-translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
              Back to Home
            </Link>

            <Link
              href="/book-a-session"
              className="group px-8 py-4 border-2 border-neutral-700 text-neutral-700 font-bold rounded-full hover:bg-neutral-700 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg flex items-center gap-3"
            >
              Book a Session
              <svg
                className="w-5 h-5 transition-transform group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
            </Link>
          </div>

          {/* Helpful Links */}
          <div className="bg-white/50 backdrop-blur-sm rounded-[40px] p-8 md:p-10 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-neutral-800 mb-6">
              Looking for something specific?
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link
                href="/our-services/website-development"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Services
              </Link>
              <Link
                href="/resources/byte-articles"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Articles
              </Link>
              <Link
                href="/resources/case-studies"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Case Studies
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                About Us
              </Link>
              <Link
                href="/career"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Careers
              </Link>
              <Link
                href="/our-services/brand-management"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Branding
              </Link>
              <Link
                href="/our-services/digital-marketing"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Marketing
              </Link>
              <Link
                href="/terms-and-condition"
                className="text-sm font-medium text-neutral-600 hover:text-neutral-800 hover:underline transition duration-300"
              >
                Terms
              </Link>
            </div>
          </div>

          {/* Fun Message */}
          <div className="mt-12">
            <p className="text-sm text-neutral-500 italic">
              &quot;Not all who wander are lost... but this page definitely
              is.&quot;
            </p>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-navy-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
      </div>
    </div>
  );
}
