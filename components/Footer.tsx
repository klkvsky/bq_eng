"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSideSheet } from "@/lib/SideSheetContext";
import { useScreenSize } from "@/lib/hooks/useScreenSize";
import { cn } from "@/lib/utils";

export default function Footer() {
  const sidesheet = useSideSheet();
  const screenSize = useScreenSize();
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-row max-md:items-end w-screen h-auto md:h-[44px] max-md:px-2 max-md:py-3 md:p-3 font-spectral text-[14px] md:text-[16px] leading-4 md:leading-5 -tracking-[0.28px] md:-tracking-[-0.02em] md:mt-[160px] z-50 transition-opacity",
        pathname === "/" ? "mt-0" : "mt-[80px]",
        pathname === "/knowledge" && "lg:hidden"
      )}
    >
      <p
        style={{ width: screenSize !== "sm" ? `${1 * 8.33}vw` : "auto" }}
        className="whitespace-nowrap"
      >
        BQStudio, 2024
      </p>
      <div className="flex flex-col max-md:gap-1 md:flex-row max-md:ml-[12.5vw] ml-auto">
        <Link
          className="whitespace-nowrap"
          style={{ minWidth: `${2 * 8.33}vw` }}
          href="/"
        >
          Политика конфиденциальности
        </Link>

        <div
          className="flex flex-row gap-1"
          style={{
            width: `${2 * 8.33}vw`,
            marginLeft: screenSize !== "sm" ? `${2.5 * 8.33}vw` : "",
          }}
        >
          <Link href="/">Вакансии,</Link>
          <Link href="/">Контакты</Link>
        </div>

        <Link
          className="whitespace-nowrap"
          style={{ marginLeft: screenSize !== "sm" ? `${1.5 * 8.33}vw` : "" }}
          href="/"
        >
          Дизайн сайта VOSK
        </Link>
      </div>
    </div>
  );
}
