"use client";

import { NewsItem } from "./NewsItem";

import { useTransitionRouter } from "next-view-transitions";
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
  const router = useTransitionRouter();

  const linkURL =
    pathname === "/news/bq" || pathname === "/news/magazines"
      ? "/news"
      : `/news/${title === "Материалы BQ" ? "bq" : "magazines"}`;

  return (
    <div className="flex flex-col">
      <a
        href={linkURL}
        className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] p-2 md:p-3 xl:pb-3 md:pt-0 xl:px-0 xl:pl-3 hover:opacity-30 duration-500"
        onClick={(e) => {
          e.preventDefault();

          router.push(linkURL, {
            onTransitionReady: opacity,
          });
        }}
      >
        {title} →
      </a>
      <div className="flex flex-col gap-8 md:gap-10">
        {items.map((item, index) => (
          <a
            href={`/news/${item.slug.current}`}
            key={index}
            onClick={(e) => {
              e.preventDefault();

              router.push(`/news/${item.slug.current}`, {
                onTransitionReady: slideUp,
              });
            }}
          >
            <NewsItem item={item} />
          </a>
        ))}
      </div>
    </div>
  );
}

function opacity() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        display: "none",
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      delay: 1000,
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

function slideUp() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
        zIndex: -10,
        mixBlendMode: "normal",
      },
      {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: -10,
        mixBlendMode: "normal",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(125%)",
        zIndex: 100,
        mixBlendMode: "normal",
      },
      {
        opacity: 1,
        transform: "translateX(0)",
        zIndex: 100,
        mixBlendMode: "normal",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
