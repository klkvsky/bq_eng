"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import B from "@/public/assets/B.svg";
import Q from "@/public/assets/Q.svg";
import { usePathname } from "next/navigation";
import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { cn } from "@/lib/utils";

export default function Logo() {
  const { displayMode } = useGallery();
  const pathname = usePathname();
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (pathname === "/") {
        const isBottom =
          window.innerHeight + window.scrollY >=
          document.documentElement.scrollHeight;
        setIsAtBottom(isBottom);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-40 pointer-events-none hidden xl:block">
      <Image
        src={B}
        alt="B"
        width={0}
        height={0}
        className={cn(
          "fixed transition-all duration-1000",
          pathname === "/" && "w-[130px] h-[184px] left-3",
          pathname === "/" && displayMode === "gallery"
            ? isAtBottom
              ? "bottom-10 duration-100"
              : "bottom-3"
            : "bottom-11",
          (pathname.startsWith("/knowledge") ||
            pathname.startsWith("/news") ||
            pathname.startsWith("/contact")) &&
            "w-[73px] h-[103px] left-3 bottom-14",
          (pathname === "/studio" || pathname === "/culture") &&
            "w-[82px] h-[116px] left-3 bottom-[87.8px]"
        )}
        unoptimized
      />
      <Image
        src={Q}
        alt="B"
        width={0}
        height={0}
        className={cn(
          "fixed transition-all duration-1000",
          pathname === "/" && "w-[130px] h-[184px] right-3",
          pathname === "/" && displayMode === "gallery"
            ? "bottom-80"
            : isAtBottom
              ? "bottom-10"
              : "bottom-1.5",
          (pathname.startsWith("/knowledge") ||
            pathname.startsWith("/news") ||
            pathname.startsWith("/contact")) &&
            "w-[73px] h-[103px] bottom-[828px] right-[calc(9*8.33vw+12px)]",
          (pathname === "/studio" || pathname === "/culture") &&
            "w-[100px] h-[140px] right-[calc(100vw-99px-100px)] bottom-[115px]"
        )}
        unoptimized
      />
    </div>
  );
}
