import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hexus Engineers | Valves and Fittings",
  description: "Valves and tube fittings for high-pressure work.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased bg-white text-zinc-900 scroll-smooth`}
    >
      <body className="min-h-full flex flex-col font-sans selection:bg-zinc-900 selection:text-white">{children}</body>
    </html>
  );
}
