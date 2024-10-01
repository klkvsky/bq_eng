"use client";

import { NewsItem } from "./NewsItem";

import Link from "next/link";
import { Article } from "@/components/home/types";
import { usePathname } from "next/navigation";

export function NewsSection({
  title,
  items,
}: {
  title: string;
  items: Article[];
}): React.ReactNode {
  const pathname = usePathname();

  const linkURL =
    pathname === "/news/bq" || pathname === "/news/magazines"
      ? "/news"
      : `/news/${title === "Материалы BQ" ? "bq" : "magazines"}`;

  return (
    <div className="flex flex-col">
      <Link
        href={linkURL}
        className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] p-2 md:p-3 xl:pb-3 md:pt-0 xl:px-0 xl:pl-3 hover:opacity-30 duration-500"
      >
        {title} →
      </Link>
      <div className="flex flex-col gap-8 md:gap-10">
        {items.map((item, index) => (
          <Link href={`/news?article=${item.slug.current}`} key={index}>
            <NewsItem item={item} />
          </Link>
        ))}
      </div>
    </div>
  );
}
