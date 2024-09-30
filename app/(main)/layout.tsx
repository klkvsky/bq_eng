import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import { GalleryProvider } from "@/lib/ProjectDisplayModeContext";

import MobileProjectsFooter from "@/components/MobileProjectsFooter";
import PageAnimatePresence from "@/components/HOC/PageAnimatePresence";
import SideShadow from "@/components/SideShadow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <GalleryProvider>
      <div className="flex flex-col w-full min-h-screen relative z-30">
        <Navbar />
        <PageAnimatePresence>{children}</PageAnimatePresence>
        <MobileProjectsFooter />
        <Footer />
        <SideShadow />
      </div>
    </GalleryProvider>
  );
}
