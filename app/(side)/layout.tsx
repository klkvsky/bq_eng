"use client";

import { cn } from "@/lib/utils";
import { useScreenSize } from "@/lib/hooks/useScreenSize";
import { useEffect, useState } from "react";
import Digest from "@/components/Digest";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";

export default function Layout({ children }: { children: React.ReactNode }) {
  const screenSize = useScreenSize();
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [initialLoad, setInitialLoad] = useState(true);
  const searchParams = useSearchParams();

  useEffect(() => {
    const item = searchParams.get("item");
    setIsSheetOpen(item !== null);
    setInitialLoad(false);
  }, [searchParams]);

  const scrollToTop = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "ArrowUp") {
      event.preventDefault();
      const scrollableDiv = document.getElementById("scrollable-digest");
      scrollableDiv?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (isSheetOpen) {
      const handleKeyDown = (event: KeyboardEvent) => scrollToTop(event as unknown as React.KeyboardEvent<HTMLDivElement>);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isSheetOpen]);

  return (
    <div
      className={cn(
        "w-screen h-full lg:h-[calc(100vh-44px)] flex flex-col lg:flex-row lg:items-end lg:justify-end"
      )}
    >
      <div
        className={cn(
          "flex flex-col lg:max-h-screen lg:overflow-y-scroll relative transition-opacity duration-1000"
        )}
        style={{ width: screenSize !== "sm" ? `${9 * 8.33}vw` : "100%" }}
      >
        {children}
        <motion.div
          id="scrollable-digest"
          className="fixed top-full right-0 h-screen max-h-screen w-full bg-white pt-[44px] overflow-y-scroll"
          style={{ width: `${9 * 8.33}vw` }}
          initial={{ y: initialLoad && isSheetOpen ? "-100%" : "0%" }}
          animate={{
            y: isSheetOpen ? "-100%" : "0%",
          }}
          transition={{ duration: 1 }}
          tabIndex={0} // Add this to make the div focusable
        >
          <div className="absolute top-0 right-0 h-screen w-full pointer-events-none">
            <div className="w-full h-full relative custom-shadow-top" />
          </div>
          <Digest />
        </motion.div>
      </div>
    </div>
  );
}
