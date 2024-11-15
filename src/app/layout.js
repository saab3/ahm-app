import { Cairo } from "next/font/google";

import Nav from "@/components/layout/nav";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";

import "swiper/css";
import "swiper/css/pagination";
import "./globals.css";
import Head from "next/head";

export const metadata = {
  title: "AHM",
  description: "",
};

const cairoFont = Cairo({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal"],
  display: "swap",
  subsets: ["arabic"],
  variable: "--font-cairo",
});

export default function RootLayout({ children }) {
  return (
    <html dir="rtl" lang="ar">
<head>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
  />
</head>
      <body
        className={`${cairoFont.className} antialiased max-w-[1920px] mx-auto`}
      >
        <Header />
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
