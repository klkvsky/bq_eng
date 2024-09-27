"use client";

import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function MobileProjectsFooter() {
  const pathname = usePathname();
  const { displayMode, handleToggle } = useGallery();

  return (
    <div
      className={cn(
        "md:hidden w-screen h-[36px] bg-white sticky left-0 bottom-0 z-50 p-2 border-t border-t-[#E7E9EF] flex flex-row items-center justify-center gap-2 md:hidden",
        pathname === "/" ? "mt-20" : "hidden"
      )}
    >
      <button className="font-spectral text-[14px] leading-[20px] -tracking-[0.28px] w-[50vw]">
        Направления работ
      </button>
      <div className="w-px h-3 bg-[#E7E9EF]" />
      <button
        className="font-spectral text-[14px] leading-[20px] -tracking-[0.28px] w-[50vw] relative"
        onClick={() => {
          handleToggle(displayMode === "gallery" ? "list" : "gallery");
        }}
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={displayMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 flex items-center justify-center"
          >
            {displayMode === "gallery" ? "Сетка" : "Галерея"}
          </motion.span>
        </AnimatePresence>
      </button>
    </div>
  );
}
