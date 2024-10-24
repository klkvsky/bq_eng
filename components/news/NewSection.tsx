"use client";

import { NewsItem } from "./NewsItem";

import { useTransitionRouter } from "next-view-transitions";
import { Article } from "@/components/home/types";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export function NewsSection({
  title,
  items,
  isClose,
}: {
  title: string;
  items: Article[];
  isClose: boolean;
}): React.ReactNode {
  const pathname = usePathname();
  const router = useTransitionRouter();

  const linkURL =
    pathname === "/news/bq" || pathname === "/news/magazines"
      ? "/news"
      : `/news/${title === "Материалы BQ" ? "bq" : "magazines"}`;

  const isMain = pathname === "/news";

  return (
    <div className="flex flex-col">
      <a
        href={linkURL}
        className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] p-2 md:p-3 xl:pb-3 md:pt-0 xl:px-0 xl:pl-3 hover:opacity-30 duration-500  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]"
        onClick={(e) => {
          e.preventDefault();

          router.push(linkURL, {
            onTransitionReady: opacity,
          });
        }}
      >
        {title}{" "}
        <span className={cn("text-xs 2xl:text-[22.5px]", isClose && "ml-1")}>
          {isClose ? "✕" : "→"}
        </span>
      </a>
      <div className="flex flex-col gap-8 md:gap-10">
        {items.slice(0, isMain ? 5 : items.length).map((item, index) => (
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
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  document.documentElement.animate(
    [
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(projectsTitle)",
    }
  );

  document.documentElement.animate(
    [
      isSafari
        ? {
            display: "none",
            opacity: 0,
            filter: "blur(5px)",
          }
        : {
            opacity: 0,
            filter: "blur(5px)",
          },
      {
        opacity: 1,
        filter: "blur(0px)",
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease-in-out",
      fill: "backwards",
      pseudoElement: "::view-transition-new(projectsTitle)",
    }
  );

  document.documentElement.animate(
    [
      isSafari
        ? {
            display: "none",
            opacity: 0,
            filter: "blur(5px)",
          }
        : {
            opacity: 0,
            filter: "blur(5px)",
          },
      {
        opacity: 1,
        filter: "blur(0px)",
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease-in-out",
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
