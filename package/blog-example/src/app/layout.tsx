import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeaderNavigation from "@/components/header/navigation";
import { Kablammo } from "next/font/google";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "hello world",
  description: "first page",
};

 
const kablammo = Kablammo({
  subsets: ["latin"],
  variable: "--font-kablammo",
  weight: ["400"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={kablammo.variable}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <HeaderNavigation />
          <p>{new Date().toString()}</p>
        </header>
        {children}
      </body>
    </html>
  );
}
