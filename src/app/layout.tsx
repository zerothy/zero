import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/templates/Layout";
import { Geist, Open_Sans } from "next/font/google";

const geist = Geist({
  display: "swap",
  subsets: ["latin"],
  variable: "--geist",
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const openSans = Open_Sans({
  display: "swap",
  subsets: ["latin"],
  variable: "--open-sans",
  weight: ['300', '400', '600', '700', '800'],
});

export const metadata: Metadata = {
  title: "Zero",
  description: "Zero Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${geist.variable} font-sans`}>
      <body>
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}