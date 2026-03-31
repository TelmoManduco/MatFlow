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

// 1. This is what shows up in the Browser Tab name
export const metadata: Metadata = {
  title: "MatFlow | BJJ Technique Library",
  description: "Master the art of Jiu-Jitsu with our curated video library.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      {/* 2. We add 'bg-black' and 'text-white' to the body so the whole site matches */}
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-full bg-black text-white antialiased flex flex-col`}
      >
        {/* Everything inside 'children' is your page.tsx */}
        {children}
      </body>
    </html>
  );
}
