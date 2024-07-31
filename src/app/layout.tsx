import type { Metadata } from "next";
import Link from 'next/link'

import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio | Kwame Davour",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
 <html lang="en">
      <html lang="en">
      <body className={inter.className}>
          <Navbar />
          {children}
          <Footer />
          </body>
    </html>
    </html>
  );
}
