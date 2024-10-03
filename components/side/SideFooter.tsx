"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
export default function SideFooter() {
  const pathname = usePathname();
  return (
    <div
      className={cn(
        "flex-row hidden md:flex max-md:items-end w-full h-auto md:h-[44px] 2xl:h-[104px] max-md:px-2 max-md:py-3 md:p-3 font-spectral text-[14px] md:text-[16px] 2xl:text-[38px] leading-4 md:leading-5 2xl:leading-[48px] -tracking-[0.28px] md:-tracking-[-0.02em] 2xl:-tracking-[0.76px] xl:mt-[20px] z-50 transition-opacity"
      )}
    >
      <Link
        className={cn(
          "whitespace-nowrap md:w-[calc(3*8.33vw)] xl:w-[16.66vw] ml-auto hover:opacity-30 transition-opacity duration-500",
          pathname.startsWith("/privacy-policy") && "opacity-30"
        )}
        href="/privacy-policy"
      >
        Политика конфиденциальности
      </Link>

      <div className="flex flex-row gap-1 md:w-[calc(2*8.33vw)] xl:w-[8.33vw] xl:ml-[calc(2.5*8.33vw)] md:ml-[calc(1*8.33vw)]">
        <Link
          className={cn(
            "hover:opacity-30 transition-opacity duration-500",
            pathname.startsWith("/contacts") && "opacity-30"
          )}
          href="/contacts"
        >
          Вакансии,
        </Link>
        <Link
          className={cn(
            "hover:opacity-30 transition-opacity duration-500",
            pathname.startsWith("/contacts") && "opacity-30"
          )}
          href="/contacts"
        >
          Контакты
        </Link>
      </div>

      <Link
        className="whitespace-nowrap md:w-[calc(2*8.33vw)] md:ml-[calc(2*8.33vw)] xl:ml-[calc(1.5*8.33vw)] xl:text-right hover:opacity-30 transition-opacity duration-500"
        href="https://vosk.design"
        target="_blank"
      >
        Дизайн сайта VOSK
      </Link>
    </div>
  );
}
