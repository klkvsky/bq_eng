import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GalleryProvider } from "@/lib/ProjectDisplayModeContext";

import BottomSheet from "@/components/side/BottomSheet";
import MobileProjectsFooter from "@/components/home/MobileProjectsFooter";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import SideShadow from "@/components/side/SideShadow";
import ProjectPage from "@/components/home/ProjectPage";
import Logo from "@/components/Logo";
import Gradient from "@/components/Gradient";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GalleryProvider>
      <div className="flex flex-col w-full min-h-screen relative z-30">
        <Suspense>
          <ProjectPage />
        </Suspense>
        <Suspense>
          <Navbar />
        </Suspense>
        <Logo />
        <Gradient />
        <PageAnimatePresence>{children}</PageAnimatePresence>
        <Suspense>
          <MobileProjectsFooter />
        </Suspense>
        <Suspense>
          <Footer />
        </Suspense>
        <SideShadow />
        <Suspense>
          <BottomSheet />
        </Suspense>
      </div>
    </GalleryProvider>
  );
}
