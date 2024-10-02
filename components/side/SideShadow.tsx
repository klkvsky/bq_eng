"use client";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function SideShadow() {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "hidden xl:block fixed top-0 right-0 h-[calc(100vh+44px)] -mt-[44px] transition-all pointer-events-none",
        (pathname.startsWith("/knowledge") || pathname.startsWith("/news") || pathname.startsWith("/contacts") || pathname.startsWith("/privacy-policy"))
          ? "translate-x-0 duration-[700ms] delay-[1100ms] ease-linear opacity-100"
          : "translate-x-full delay-0 duration-[600ms] ease-linear opacity-0"
      )}
      style={{ width: `${9 * 8.33}vw` }}
    >
      <div className="w-full h-full relative sidesheet-shadow" />
    </div>
  );
}
