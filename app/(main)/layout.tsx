import { Suspense } from "react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Gradient from "@/components/Gradient";
import Logo from "@/components/Logo";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col w-full min-h-screen relative z-30">
      <Suspense>
        <Navbar />
      </Suspense>
      <Gradient />
      <Logo />
      <Suspense>{children}</Suspense>
      <Suspense>
        <Footer />
      </Suspense>
    </div>
  );
}
