"use client";

import Link from "next/link";
import { useSideSheet } from "@/lib/SideSheetContext";
import { cn } from "@/lib/utils";

export default function Footer() {
  const sidesheet = useSideSheet();

  return (
    <div
      className={cn(
        "flex flex-row w-screen h-[44px] p-3 font-spectral text-[16px] leading-5 -tracking-[-0.02em] mt-[160px] z-50 transition-opacity",
        sidesheet.isOpen ? sidesheet.scrolledToEnd
          ? "opacity-100"
          : "opacity-0" : "opacity-100"
      )}
    >
      <div className="flex flex-row gap-1">
        <p>BQStudio, 2024</p>
      </div>
      <div className="flex flex-row gap-1 ml-[292px]">
        <Link href="/">Политика конфиденциальности</Link>
      </div>

      <div className="flex flex-row gap-1 ml-auto">
        <Link href="/">Вакансии,</Link>
        <Link href="/">Контакты</Link>
      </div>

      <div className="flex flex-row gap-1 ml-[290px]">
        <Link href="/">Дизайн сайта VOSK</Link>
      </div>
    </div>
  );
}
