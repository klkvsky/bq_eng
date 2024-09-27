"use client";

import PageAnimatePresence from "../components/HOC/PageAnimatePresence";
import { cn } from "@/lib/utils";
import { useSideSheet } from "@/lib/SideSheetContext";
import { useEffect } from "react";

export default function Main({ children }: { children: React.ReactNode }) {
  const sidesheet = useSideSheet();

  useEffect(() => {
    if (sidesheet.isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [sidesheet.isOpen]);

  return (
    <div
      className={cn(
        sidesheet.isOpen
          ? "-translate-x-full"
          : "translate-x-0",
        "transition-transform duration-[2000ms] ease-in-out min-h-[75vh] z-30"
      )}
    >
      <PageAnimatePresence>{children}</PageAnimatePresence>
    </div>
  );
}
