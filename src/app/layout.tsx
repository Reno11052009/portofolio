import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arsya Mayreno Arnaldo - Portofolio",
  description: "Personal portofolio showcasing web development projects and skills.",
};

import dynamic from "next/dynamic";
const SmoothScrolling = dynamic(() => import("@/components/SmoothScrolling"));

import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body className="flex flex-col min-h-screen text-white bg-black">
        <SmoothScrolling>
          {children}
        </SmoothScrolling>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
