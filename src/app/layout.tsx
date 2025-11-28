import type { Metadata } from "next";
import { Licorice, Open_Sans } from "next/font/google";
import "./globals.css";
import "keen-slider/keen-slider.min.css";
import "swiper/css";
import Navbar from "@/components/shared/Navbar";
import localFont from "next/font/local";
import Footer from "@/components/shared/Footer";
import { GoogleTagManager, GoogleAnalytics } from "@next/third-parties/google";
import { Toaster } from "sonner";
import {
  getOpenGraphImages,
  getTwitterImages,
} from "@/constants/metadata.constants";

const chopin = localFont({
  src: [
    {
      path: "../fonts/chopin-font-family/Chopin-Trial-Regular-BF65b1d6917c0ec.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/chopin-font-family/Chopin-Trial-Medium-BF65b1d69162573.otf",
      weight: "500",
      style: "medium",
    },
    {
      path: "../fonts/chopin-font-family/Chopin-Trial-SemiBold-BF65b1d6917f846.otf",
      weight: "600",
      style: "semibold",
    },
    {
      path: "../fonts/chopin-font-family/Chopin-Trial-Bold-BF65b1d691a55be.otf",
      weight: "700",
      style: "bold",
    },
  ],
  variable: "--font-chopin",
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
});
const licorice = Licorice({
  weight: "400",
  variable: "--font-licorice",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.strategybyte.com.au"),
  title: "StrategyByte",
  description:
    "Unlock your digital potential with StrategyByte. We are a Sydney-based agency specializing in SEO, Web Development, and NDIS marketing strategies.",
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://www.strategybyte.com.au",
  },
  keywords: [
    "StrategyByte",
    "StrategyByte Consulting",
    "StrategyByte Services",
    "Business Consulting",
    "Strategy Consulting",
    "Management Consulting",
    "Digital Transformation",
    "Innovation Consulting",
    "Business Strategy",
    "Corporate Strategy",
    "Growth Strategy",
    "Market Entry Strategy",
    "Operational Excellence",
    "Change Management",
    "Strategic Planning",
    "Business Analysis",
    "Competitive Analysis",
    "Customer Experience Strategy",
    "Data-Driven Strategy",
  ],
  openGraph: {
    title: "StrategyByte",
    description:
      "Unlock your digital potential with StrategyByte. We are a Sydney-based agency specializing in SEO, Web Development, and NDIS marketing strategies.",
    url: "https://www.strategybyte.com.au",
    siteName: "StrategyByte",
    images: getOpenGraphImages(),
    locale: "en-US",
    type: "website",
  },
  twitter: {
    title: "StrategyByte",
    card: "summary_large_image",
    description:
      "Unlock your digital potential with StrategyByte. We are a Sydney-based agency specializing in SEO, Web Development, and NDIS marketing strategies.",
    images: getTwitterImages(),
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body
        className={`${openSans.variable} ${chopin.variable} ${licorice.variable} font-OpenSans antialiased`}
      >
        <Toaster richColors />
        <Navbar />
        {children}
        <GoogleAnalytics gaId={process.env.GAID as string} />
        <GoogleTagManager gtmId={process.env.GTMID as string} />
        <Footer />
      </body>
    </html>
  );
}
