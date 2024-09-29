import Link from "next/link";
import { cn } from "@/lib/utils";

export default function SideFooter() {
  return (
    <div
      className={cn(
        "flex flex-row max-md:items-end w-full h-auto md:h-[44px] 2xl:h-[104px] max-md:px-2 max-md:py-3 md:p-3 font-spectral text-[14px] md:text-[16px] 2xl:text-[38px] leading-4 md:leading-5 2xl:leading-[48px] -tracking-[0.28px] md:-tracking-[-0.02em] 2xl:-tracking-[0.76px] xl:mt-[20px] z-50 transition-opacity"
      )}
    >
      <Link
        className="whitespace-nowrap md:w-[calc(3*8.33vw)] xl:w-[16.66vw] ml-auto"
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
  );
}
