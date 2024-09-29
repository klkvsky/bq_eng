"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();

  return (
    <div
      className={cn(
        "flex flex-row max-md:items-end w-screen h-auto md:h-[44px] 2xl:h-[104px] max-md:px-2 max-md:py-3 md:p-3 2xl:px-6 2xl:py-7 font-spectral text-[14px] md:text-[16px] 2xl:text-[38px] leading-4 md:leading-5 2xl:leading-[48px] -tracking-[0.28px] md:-tracking-[-0.02em] 2xl:-tracking-[0.76px] xl:mt-[160px] 2xl:mt-[352px] z-50 transition-opacity",
        pathname === "/" ? "mt-0" : "mt-[80px]",
        pathname === "/knowledge" && "lg:hidden"
      )}
    >
      <p className="whitespace-nowrap w-auto md:w-[calc(1.5*8.33vw)] xl:w-[8.33vw]">
        BQStudio, 2024
      </p>
      <div className="flex flex-col max-md:gap-1 md:flex-row max-md:ml-[12.5vw] ml-auto">
        <Link
          className="whitespace-nowrap md:w-[calc(3*8.33vw)] xl:w-[16.66vw]"
          href="/"
        >
          Политика конфиденциальности
        </Link>

        <div className="flex flex-row gap-1 md:w-[calc(2*8.33vw)] xl:w-[8.33vw] xl:ml-[calc(2.5*8.33vw)] md:ml-[calc(1*8.33vw)]">
          <Link href="/">Вакансии,</Link>
          <Link href="/">Контакты</Link>
        </div>

        <Link
          className="whitespace-nowrap md:w-[calc(2*8.33vw)] md:ml-[calc(2*8.33vw)] xl:ml-[calc(1.5*8.33vw)] xl:text-right"
          href="/"
        >
          Дизайн сайта VOSK
        </Link>
      </div>
    </div>
  );
}
