import { Geist, Geist_Mono } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";
import { SanityLive } from "@/sanity/live";
import { ToastContainer, ToastProvider } from "@/components/contexts/Toast";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { ObitWriterProvider } from "@/components/contexts/ObitWriter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Lemon",
    template: "Lemon | %s",
  },
  description:
    "This is my super frickin cool Next.js app using the App Router.",
  keywords: ["Next.js", "SEO", "Tailwind", "Sanity CMS"],
  authors: [{ name: "Your Name", url: "https://your-site.com" }],
  // openGraph: {
  //   title: "Lemon",
  //   description:
  //     "Check out my super frickin cool Next.js app with Tailwind and Sanity.",
  //   url: "https://your-site.com",
  //   siteName: "Lemon",
  //   images: [
  //     {
  //       url: "https://your-site.com/og-image.jpg",
  //       width: 1200,
  //       height: 630,
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-gray-800`}
      >
        <ObitWriterProvider>
          <ToastProvider>
            <Navbar />
            <ToastContainer />
            {children}
            <SanityLive />
          </ToastProvider>
        </ObitWriterProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}
