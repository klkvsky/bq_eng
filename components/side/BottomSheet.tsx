"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import ArticlePage from "@/components/side/ArticlePage";
import SideFooter from "@/components/side/SideFooter";

import { Article } from "@/components/home/types";
import { getArticleBySlug } from "@/lib/sanity";
import { cn } from "@/lib/utils";

export default function BottomSheet() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const searchParams = useSearchParams();

  const loadSelectedArticle = async (slug: string) => {
    try {
      const article = await getArticleBySlug(slug);
      setSelectedArticle(article);
    } catch (error) {
      console.error("Error loading article:", error);
      setSelectedArticle(null);
    }
  };

  useEffect(() => {
    const articleSlug = searchParams.get("article");
    setIsSheetOpen(articleSlug !== null);

    if (articleSlug) {
      loadSelectedArticle(articleSlug);
      document.body.style.overflow = "hidden";
    } else {
      setSelectedArticle(null);
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchParams]);

  const scrollToTop = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if ((event.metaKey || event.ctrlKey) && event.key === "ArrowUp") {
      event.preventDefault();
      const scrollableDiv = document.getElementById("scrollable-digest");
      scrollableDiv?.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <motion.div
      id="scrollable-digest"
      className="fixed top-full right-0 h-screen md:pb-0 w-full xl:w-[calc(9*8.33vw)]"
      initial={{
        y: isSheetOpen && selectedArticle ? "-100%" : "0%",
        opacity: isSheetOpen ? 1 : 0,
      }}
      animate={{
        y: isSheetOpen && selectedArticle ? "-100%" : "0%",
        opacity: isSheetOpen ? 1 : 0,
      }}
      transition={{ duration: 1 }}
      tabIndex={0}
      onKeyDown={scrollToTop}
    >
      <div className="absolute top-0 right-0 h-full w-full pointer-events-none">
        <div className={cn("w-full h-full relative custom-shadow-top")} />
      </div>
      <div className="h-full overflow-y-scroll xl:pt-[44px] max-h-screen bg-white pt-[32px] md:pt-[48px]">
        <AnimatePresence mode="wait">
          {selectedArticle && (
            <motion.div
              key={selectedArticle?.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ArticlePage article={selectedArticle} />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      <SideFooter />
    </motion.div>
  );
}
