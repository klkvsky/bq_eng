"use client";

import localFont from "next/font/local";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GalleryProvider } from "@/lib/ProjectDisplayModeContext";

import MobileProjectsFooter from "@/components/MobileProjectsFooter";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const apercuPro = localFont({
  src: "../public//assets/fonts/ApercuPro-Regular.otf",
  variable: "--apercu",
});
const spectral = localFont({
  src: "../public/assets/fonts/Spectral-Regular.ttf",
  variable: "--spectral",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body
        className={`${apercuPro.variable} ${spectral.variable} antialiased`}
      >
        <GalleryProvider>
          <div className="flex flex-col w-screen min-h-screen relative max-w-[100vw] z-30">
            <Navbar />
            <PageAnimatePresence>{children}</PageAnimatePresence>
            <MobileProjectsFooter />
            <Footer />
            <div
              className={cn(
                "hidden lg:block absolute top-0 right-0 h-[calc(100vh+44px)] -mt-[44px] transition-transform pointer-events-none",
                pathname.startsWith("/knowledge") ||
                  pathname.startsWith("/news")
                  ? "translate-x-0 duration-[700ms] delay-[1100ms] ease-linear"
                  : "translate-x-full delay-0 duration-[600ms] ease-linear"
              )}
              style={{ width: `${9 * 8.33}vw` }}
            >
              <div className="w-full h-full relative sidesheet-shadow" />
            </div>
          </div>
        </GalleryProvider>
      </body>
    </html>
  );
}
