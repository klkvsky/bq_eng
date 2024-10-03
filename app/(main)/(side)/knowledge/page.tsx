"use client";

import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

import { Article } from "@/components/home/types";
import { useState, useEffect } from "react";

import { getArticles } from "@/lib/sanity";

import { AnimatePresence, motion } from "framer-motion";
import React from "react";

export default function Knowledge() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filter, setFilter] = useState<string | null>(null);

  useEffect(() => {
    getArticles(20).then((fetchedArticles) => {
      // Ensure uniqueness by slug
      const uniqueArticles = Array.from(
        new Map(fetchedArticles.map(article => [article.slug.current, article])).values()
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
        return "Исследование";
      case "expedition":
        return "Экспедиция";
      case "digest":
        return "Дайджест";
      case "podcast":
        return "Подкаст";
      case "gallery":
        return "Галерея";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col">
      <h1 className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] xl:mt-[44px] p-2 md:pl-3 md:py-0">
        Мы развиваем архитектуру как культурную практику, реализуя различные
        форматы, такие как: <br className="md:hidden" />
        <br className="md:hidden" />
        {["research", "expedition", "digest", "podcast", "gallery"].map(
          (type) => (
            <React.Fragment key={type}>
              <button
                onClick={() => toggleFilter(type)}
                className={cn(
                  "font-apercu transition-opacity duration-500",
                  filter === type ? "opacity-100" : "opacity-30"
                )}
              >
                {getArticleType(type)}
              </button>
              {type !== "gallery" && ", "}
              {type === "podcast" && "и "}
            </React.Fragment>
          )
        )}
      </h1>

      <div className="flex flex-col max-md:items-center md:grid md:grid-cols-2 xl:grid-cols-3 xl:px-[calc(0.5*8.33vw)] xl:gap-x-[calc(8.33vw)] xl:gap-y-[120px] mt-20 xl:pb-[120px] gap-y-20 md:justify-items-center md:min-h-screen">
        <AnimatePresence mode="popLayout">
          {filteredArticles.map((article) => (
            <Link
              href={`/knowledge?article=${article.slug.current}`}
              key={article.slug.current}
            >
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="xl:aspect-[253/320] relative group xl:hover:custom-shadow-right-articles cursor-pointer max-xl:gap-4 max-xl:flex max-xl:flex-col w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] xl:w-[calc(2*8.33vw)] h-auto"
              >
                {article.image && (
                  <Image
                    src={article.image.asset.url}
                    alt={article.title}
                    width={253}
                    height={320}
                    className="w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] xl:w-[calc(2*8.33vw)] h-auto max-h-[320px]"
                    unoptimized
                  />
                )}
                {article.images && (
                  <Image
                    src={article.images[0].asset.url}
                    alt={article.title}
                    width={253}
                    height={320}
                    className="w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] xl:w-[calc(2*8.33vw)] h-auto max-h-[320px]"
                    unoptimized
                  />
                )}
                <div className="xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full xl:bg-white xl:group-hover:opacity-100 xl:opacity-0 flex flex-col xl:transition-opacity max-md:gap-1">
                  <div className="max-md:flex max-md:flex-row max-md:gap-2 font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30">
                    <p className="xl:pt-3">{getArticleType(article.type)}</p>
                    <p className="xl:hidden">
                      {new Date(article.date).toLocaleDateString()}
                    </p>
                  </div>
                  <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] pr-1">
                    {article.title}
                  </p>
                  <p className="mt-auto font-apercu text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 pb-3 hidden xl:block">
                    {new Date(article.date).toLocaleDateString("ru-RU")}
                  </p>
                </div>
              </motion.div>
            </Link>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
