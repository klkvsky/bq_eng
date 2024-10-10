"use client";

import { useState, useEffect } from "react";

import { NewsSection } from "@/components/news/NewSection";

import { Article } from "@/components/home/types";
import { getArticles } from "@/lib/sanity";

export default function News() {
  const [magazineArticles, setMagazineArticles] = useState<Article[]>([]);
  const [bqArticles, setBqArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles(20).then((articles) => {
      const magazineArticles = articles.filter(
        (article) => article.pressReleaseCategory === "magazines"
      );
      const bqArticles = articles.filter(
        (article) => article.pressReleaseCategory === "bq"
      );
      setMagazineArticles(magazineArticles);
      setBqArticles(bqArticles);
    });
  }, []);

  return (
    <div className="md:mt-10 xl:mt-20 flex flex-col xl:mb-32 gap-8 xl:gap-32 min-h-screen">
      {magazineArticles.length > 0 && (
        <div>
          <NewsSection title="Пресса о нас" items={magazineArticles} isClose={false} />
        </div>
      )}
      {bqArticles.length > 0 && (
        <div>
          <NewsSection title="Материалы BQ" items={bqArticles} isClose={false} />
        </div>
      )}
    </div>
  );
}
