import "./globals.css";

import { Climate_Crisis } from "next/font/google";
import type { Metadata } from "next";

const climateCrisis = Climate_Crisis({
  style: "normal",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feed The Beast",
  description: "Feed The Beast fan art for the album by Kim Petras",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-primary-700 text-neutral-950">
      <body className={climateCrisis.className}>{children}</body>
    </html>
  );
}
