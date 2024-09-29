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

    // Add this block to handle body scrolling
    if (item !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Clean up function
    return () => {
      document.body.style.overflow = "auto";
    };
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
      const handleKeyDown = (event: KeyboardEvent) =>
        scrollToTop(event as unknown as React.KeyboardEvent<HTMLDivElement>);
      document.addEventListener("keydown", handleKeyDown);
      return () => {
        document.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, [isSheetOpen]);

  return (
    <div
      className={cn(
        "w-screen h-full xl:h-[calc(100vh-44px)] flex flex-col xl:flex-row xl:items-end xl:justify-end"
      )}
    >
      <div
        className={cn(
          "flex flex-col xl:max-h-screen xl:overflow-y-scroll relative transition-opacity duration-1000 w-full xl:w-[calc(9*8.33vw)]"
        )}
      >
        {children}
        <motion.div
          id="scrollable-digest"
          className="fixed top-full right-0 h-screen max-h-screen bg-white mt-[80px] md:mt-0 pb-32 md:pb-0 pt-[44px] overflow-y-scroll w-full xl:w-[calc(9*8.33vw)]"
          initial={{ y: initialLoad && isSheetOpen ? "-100%" : "0%" }}
          animate={{
            y: isSheetOpen ? "-100%" : "0%",
          }}
          transition={{ duration: 1 }}
          tabIndex={0}
        >
          <div className="absolute top-[76px] md:top-0 right-0 h-screen w-full pointer-events-none">
            <div className="w-full h-full relative custom-shadow-top" />
          </div>
          <Digest />
        </motion.div>
      </div>
    </div>
  );
}
