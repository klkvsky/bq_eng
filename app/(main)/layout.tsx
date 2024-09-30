import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GalleryProvider } from "@/lib/ProjectDisplayModeContext";

import MobileProjectsFooter from "@/components/MobileProjectsFooter";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import SideShadow from "@/components/SideShadow";
import ProjectPage from "@/components/home/ProjectPage";
import Logo from "@/components/Logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GalleryProvider>
      <Suspense>
        <div className="flex flex-col w-full min-h-screen relative z-30">
          <ProjectPage />
          <Navbar />
          <Logo />
          <PageAnimatePresence>{children}</PageAnimatePresence>
          <MobileProjectsFooter />
          <Footer />
          <SideShadow />
        </div>
      </Suspense>
    </GalleryProvider>
  );
}
