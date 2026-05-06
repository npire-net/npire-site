import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { APP_URL, BRAND_NAME } from "@/lib/site-config";
import "./globals.css";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

const TITLE = `${BRAND_NAME} — Tools for product teams`;
const DESCRIPTION =
  "Three independent products from one studio: Layers, Ambassador, and Benchmark.";

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    type: "website",
    url: APP_URL,
    siteName: BRAND_NAME,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
  metadataBase: new URL(APP_URL),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark`}>
      <body className="bg-background text-foreground antialiased">{children}</body>
    </html>
  );
}
