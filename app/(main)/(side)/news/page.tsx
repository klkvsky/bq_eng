"use client";

import { useState, useEffect } from "react";

import { NewsSection } from "@/components/news/NewSection";

import { Article } from "@/components/home/types";
import { getArticles } from "@/lib/sanity";
import { AnimatePresence, motion } from "framer-motion";

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
    <div className="md:mt-10 xl:mt-20 flex flex-col xl:mb-32 gap-8 xl:gap-32 min-h-[70vh]">
      <AnimatePresence>
        {magazineArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NewsSection title="Пресса о нас" items={magazineArticles} />
          </motion.div>
        )}
        {bqArticles.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <NewsSection title="Материалы BQ" items={bqArticles} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
