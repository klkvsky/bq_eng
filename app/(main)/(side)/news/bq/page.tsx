"use client";

import { useState, useEffect } from "react";

import { NewsSection } from "@/components/news/NewSection";

import { Article } from "@/components/home/types";
import { getArticles } from "@/lib/sanity";

export default function News() {
  const [bqArticles, setBqArticles] = useState<Article[]>([]);

  useEffect(() => {
    getArticles(20).then((articles) => {
      const bqArticles = articles.filter(
        (article) => article.pressReleaseCategory === "bq"
      );
      setBqArticles(bqArticles);
    });
  }, []);

  return (
    <div className="flex flex-col gap-8 mt-[34px] xl:gap-[120px] min-h-screen">
      {bqArticles.length > 0 && (
        <NewsSection title="Материалы BQ" items={bqArticles} isClose={true} />
      )}
    </div>
  );
}
