"use client";

import { useState, useEffect } from "react";

import { NewsSection } from "@/components/news/NewSection";

import { Article } from "@/components/home/types";
import { getArticles } from "@/lib/sanity";

export default function News() {
  const [magazineArticles, setMagazineArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles(20).then((articles) => {
      const magazineArticles = articles.filter(
        (article) => article.pressReleaseCategory === "magazines"
      );
      setMagazineArticles(magazineArticles);
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 mt-[34px] xl:gap-[120px] min-h-screen">
      {magazineArticles.length > 0 && (
        <NewsSection
          title="Пресса о нас"
          items={magazineArticles}
          isClose={true}
        />
      )}
    </div>
  );
}
