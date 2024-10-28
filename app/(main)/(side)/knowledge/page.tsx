"use client";

import Image from "next/image";

import { useTransitionRouter } from "next-view-transitions";

import { cn } from "@/lib/utils";

import { Article } from "@/components/home/types";
import { useState, useEffect } from "react";

import { getArticles } from "@/lib/sanity";

import React from "react";

export default function Knowledge() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  const router = useTransitionRouter();

  useEffect(() => {
    getArticles(20).then((fetchedArticles) => {
      // Ensure uniqueness by slug
      const uniqueArticles = Array.from(
        new Map(
          fetchedArticles.map((article) => [article.slug.current, article])
        ).values()
      );
      setArticles(uniqueArticles);
    });
  }, []);

  const filteredArticles = React.useMemo(() => {
    return articles.filter((article) => {
      if (article.type === "press-release") return false;
      if (!filter) return true;
      return article.type === filter;
    });
  }, [articles, filter]);

  const toggleFilter = (newFilter: string) => {
    setFilter(filter === newFilter ? null : newFilter);
  };

  const getArticleType = (type: string) => {
    switch (type) {
      case "research":
        return "Research";
      case "expedition":
        return "Expedition";
      case "digest":
        return "Digest";
      case "podcast":
        return "Podcast";
      case "gallery":
        return "Gallery";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div
        className="fixed top-[125%] right-0 w-full xl:w-[calc(9*8.33vw)] h-full"
        style={{
          viewTransitionName: "topShadow",
        }}
      >
        <div className="relative w-full h-full custom-shadow-top" />
      </div>
      <h1 className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] p-2 md:pl-3 md:py-0 2xl:text-[68px] 2xl:leading-[76px] 2xl:-tracking-[1.36px]">
        We develop architecture as a cultural practice, implementing various
        formats, such as: <br className="md:hidden" />
        <br className="md:hidden" />
        {["research", "expedition", "digest", "podcast", "gallery"].map(
          (type) => (
            <React.Fragment key={type}>
              <button
                onClick={() => toggleFilter(type)}
                className={cn(
                  "font-apercu transition-opacity duration-500 hover:opacity-100",
                  filter === type ? "opacity-75" : "opacity-30"
                )}
              >
                {getArticleType(type)}
              </button>
              {type !== "gallery" && ", "}
              {type === "podcast" && "and "}
            </React.Fragment>
          )
        )}
      </h1>

      <div className="flex flex-col max-md:items-center md:grid md:grid-cols-2 max-xl:md:gap-x-[calc(2*8.33vw)] max-xl:md:px-[calc(2*8.33vw)] xl:grid-cols-3 xl:px-[calc(0.5*8.33vw)] xl:gap-x-[calc(8.33vw)] xl:gap-y-[calc(8.33vw)] mt-20 gap-y-0 md:justify-items-center md:min-h-screen">
        {filteredArticles.map((article) => (
          <a
            href={`/knowledge/${article.slug.current}`}
            key={article.slug.current}
            onClick={(e) => {
              e.preventDefault();

              router.push(`/knowledge/${article.slug.current}`, {
                onTransitionReady: slideUp,
              });
            }}
          >
            <div className="aspect-[253/320] relative group xl:hover:custom-shadow-right-articles cursor-pointer max-md:gap-2 max-xl:gap-4 max-xl:flex max-xl:flex-col w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] xl:w-[calc(2*8.33vw)] max-xl:mt-10">
              <div className="relative aspect-[253/320]">
                {article.image && (
                  <Image
                    src={article.image.asset.url}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                  />
                )}
                {article.images && (
                  <Image
                    src={article.images[0].asset.url}
                    alt={article.title}
                    fill
                    className="object-cover object-center"
                  />
                )}
              </div>
              <div className="xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full xl:bg-white xl:group-hover:opacity-100 xl:opacity-0 flex flex-col xl:transition-opacity max-md:gap-0">
                <div className="max-xl:flex max-xl:flex-row max-xl:gap-2 font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                  <p className="xl:pt-3">{getArticleType(article.type)}</p>
                  <p className="xl:hidden">
                    {new Date(article.date).toLocaleDateString()}
                  </p>
                </div>
                <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] pr-1 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                  {article.title}
                </p>
                <p className="mt-auto font-apercu text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 pb-3 hidden xl:block 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                  {new Date(article.date).toLocaleDateString("ru-RU")}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
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
        transform: "translateY(0)",
        zIndex: -10,
        mixBlendMode: "normal",
      },
      {
        opacity: 1,
        transform: "translateY(-125%)",
        zIndex: -10,
        mixBlendMode: "normal",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(topShadow)",
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
        transform: "translateY(0)",
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
