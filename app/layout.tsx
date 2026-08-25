import type { Metadata } from "next";
import { Lora, Inter } from "next/font/google";
import "./globals.css";
import "./extra.css";

const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: { default: "NovelPush — Your story, everywhere.", template: "%s | NovelPush" },
  description: "Book-first campaign workspace for self-published Amazon authors.",
  metadataBase: new URL("https://novelpush.com"),
  openGraph: {
    title: "NovelPush — Your story, everywhere.",
    description: "Book launch and backlist revival campaigns, thoughtfully organized.",
    type: "website",
    siteName: "NovelPush",
  },
  twitter: { card: "summary_large_image" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${lora.variable} ${inter.variable}`}>{children}</body></html>;
}
