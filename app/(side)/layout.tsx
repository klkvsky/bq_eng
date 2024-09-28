"use client";

import { cn } from "@/lib/utils";
import { useScreenSize } from "@/lib/hooks/useScreenSize";

export default function Layout({ children }: { children: React.ReactNode }) {
  const screenSize = useScreenSize();
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
      </div>
    </div>
  );
}
