"use client";

import { cn } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";

export default function PageTitle({
  title,
  projectPrefix,
  categories,
}: {
  title: string;
  projectPrefix?: string;
  categories: { name: string }[];
}) {
  const router = useTransitionRouter();
  const pathname = usePathname();

  const isCategoryInUrl = (categoryName: string) => {
    const decodedPathname = decodeURIComponent(pathname).toLowerCase();
    return decodedPathname.includes(categoryName.toLowerCase());
  };

  return (
    <h1 className="px-2 md:px-3 font-spectral text-[20px] md:text-[28px] xl:text-[36px]  font-normal leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] 2xl:text-[86.4px] 2xl:leading-[100.8px] 2xl:-tracking-[2.592px]">
      {projectPrefix && (
        <span className="font-apercu opacity-30">{projectPrefix}</span>
      )}
      {title}
      <br className="md:hidden" />
      <br className="md:hidden" />{" "}
      {categories.map((category, index, array) => (
        <>
          <a
            key={index}
            className={cn(
              "transition-opacity font-apercu whitespace-nowrap cursor-pointer duration-500 ",
              isCategoryInUrl(category.name)
                ? "opacity-75 hover:opacity-100"
                : "opacity-30 hover:opacity-100"
            )}
            href={`/list/${encodeURIComponent(category.name)}`}
            onClick={(e) => {
              e.preventDefault();
              const categoryPath = `/list/${encodeURIComponent(category.name)}`;
              const newPath = isCategoryInUrl(category.name)
                ? "/list"
                : categoryPath;
              router.push(newPath, {
                onTransitionReady: opacity,
              });
            }}
          >
            {category.name}
          </a>
          {index < array.length - 2 && ", "}
          {index === array.length - 2 && " и "}
        </>
      ))}
    </h1>
  );
}

function opacity() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

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
      isSafari
        ? {
            display: "none",
            opacity: 0,
          }
        : {
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
