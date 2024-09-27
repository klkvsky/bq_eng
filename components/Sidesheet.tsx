"use client";

import { AnimatePresence, motion } from "framer-motion";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";

import { useSideSheet } from "@/lib/SideSheetContext";
import { cn } from "@/lib/utils";

import Knowledge from "./Knowledge";
import News from "./News";
import Digest from "./Digest";

export default function Sidesheet() {
  const sidesheet = useSideSheet();
  const params = useParams();

  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);

  return (
    <div
      className={cn(
        "fixed top-0 right-0 w-screen h-screen flex flex-row items-end justify-end transition-transform duration-[2000ms] ease-in-out",
        !sidesheet.isOpen ? " translate-x-full" : "translate-x-0"
      )}
    >
      <div
        className="absolute top-0 right-0 h-screen"
        style={{ width: `${9 * 8.33}vw` }}
      >
        <div className="w-full h-full relative sidesheet-shadow" />
      </div>

      <div
        className={cn(
          "flex flex-col h-screen bg-white relative",
          isBottomSheetOpen ? "overflow-hidden" : "overflow-scroll"
        )}
        style={{ width: `${9 * 8.33}vw` }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={sidesheet.page}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: "tween", duration: 0.75 }}
            onClick={() => {
              setIsBottomSheetOpen(true);
            }}
          >
            {sidesheet.page === "knowledge" ? <Knowledge /> : <News />}
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          {isBottomSheetOpen && (
            <>
              <motion.div
                className={cn("absolute top-0 left-0 w-full h-full")}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                exit={{ y: 1000 }}
                transition={{ type: "tween", duration: 0.75 }}
              >
                <div className="relative w-full h-full custom-shadow-top" />
              </motion.div>
              <motion.div
                className={cn(
                  "absolute top-0 left-0 w-full h-full bg-white pt-[44px] overflow-y-scroll overflow-x-hidden"
                )}
                initial={{ y: 1000 }}
                animate={{ y: 0 }}
                exit={{ y: 1000 }}
                transition={{ type: "tween", duration: 0.75 }}
                onClick={() => {
                  setIsBottomSheetOpen(false);
                }}
              >
                <Digest />
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
