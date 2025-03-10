import type { Metadata } from "next";
import "./globals.css";
import Layout from "@/components/templates/Layout";
import { Geist, Open_Sans } from "next/font/google";
import localFont from "next/font/local";

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

const neueMontreal = localFont({
  src: [
    {
      path: '../../public/fonts/NeueMontreal-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-Medium.otf',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-MediumItalic.otf',
      weight: '500',
      style: 'italic',
    },
    {
      path: '../../public/fonts/NeueMontreal-Light.otf',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-LightItalic.otf',
      weight: '300',
      style: 'italic',
    },
    {
      path: '../../public/fonts/NeueMontreal-Bold.otf',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NeueMontreal-BoldItalic.otf',
      weight: '700',
      style: 'italic',
    },
    {
      path: '../../public/fonts/NeueMontreal-Italic.otf',
      weight: '400',
      style: 'italic',
    }
  ],
  variable: '--neue-montreal'
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
    <html lang="en" className={`${openSans.variable} ${geist.variable} ${neueMontreal.variable} font-sans`}>
      <body>
          <Layout>{children}</Layout>
      </body>
    </html>
  );
}