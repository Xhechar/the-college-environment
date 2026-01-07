import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";

import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const twkLausanne = localFont({
  src: [
    {
      path: "./assets/fonts/TWK_Lausanne/TWKLausanne-700.woff2",
      weight: '700',
    },
    {
      path: "./assets/fonts/TWK_Lausanne/TWKLausanne-650.woff2",
      weight: '650',
    },
    {
      path: "./assets/fonts/TWK_Lausanne/TWKLausanne-500.woff2",
      weight: '500',
    },
    {
      path: "./assets/fonts/TWK_Lausanne/TWKLausanne-450.woff2",
      weight: '450',
    },
  ],
  variable: '--font-heading'
})

const interSans = Inter({
  subsets: ["latin"],
  variable: '--font-inter'
});

const title = "The College - All-in-one community platform for Bharat."
const desc = "Modern community infrastructure for India and the world."

export const metadata: Metadata = {
  title: "The College",
  description: "The College",
  icons: [
    {
      rel: "icon",
      url: '/logo-face-no-box-new.png',
      sizes: "24x24",
    },
    {
      rel: "icon",
      url: '/logo-face-no-box-new.png',
      sizes: "32x32",
    },
    {
      rel: "icon",
      url: '/logo-face-no-box-new.png',
      sizes: "48x48",
    },
    {
      rel: "icon",
      url: '/logo-face-no-box-new.png',
      sizes: "64x64",
    },
    {
      rel: "icon",
      url: '/logo-face-no-box-new.png',
      sizes: "128x128",
    },
    {
      rel: "icon",
      url: '/logo-face-no-box-new.png',
      sizes: "256x256",
    },
    {
      rel: "apple-touch-icon",
      url: '/logo-face-no-box-new.png',
      sizes: "24x24",
    },
    {
      rel: "apple-touch-icon",
      url: '/logo-face-no-box-new.png',
      sizes: "32x32",
    },
    {
      rel: "apple-touch-icon",
      url: '/logo-face-no-box-new.png',
      sizes: "48x48",
    },
    {
      rel: "apple-touch-icon",
      url: '/logo-face-no-box-new.png',
      sizes: "64x64",
    },
    {
      rel: "apple-touch-icon",
      url: '/logo-face-no-box-new.png',
      sizes: "128x128",
    },
    {
      rel: "apple-touch-icon",
      url: '/logo-face-no-box-new.png',
      sizes: "256x256",
    },
  ],
  openGraph: {
    title: title,
    description: desc,
    url: "https://thecollege.co.in",
    siteName: "The College",
    images: [
      {
        url: "https://thecollege.co.in/thecollege2.png?v=5",
        alt: "The College",
        width: 1280,
        height: 720,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: title,
    description: desc,
    images: ["https://thecollege.co.in/thecollege2.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interSans.variable} ${interSans.className} ${twkLausanne.variable} antialiased`}
      >
        <div className="max-w-[1454px] mx-auto sticky top-8 pb-8 z-50 max-[761px]:top-2 zoom">
          <Navbar />
        </div>
        <div>
          {children}
        </div>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
