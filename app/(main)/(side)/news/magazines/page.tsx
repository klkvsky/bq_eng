import { Metadata } from "next";

import { NewsSection } from "@/components/news/NewSection";
import { getArticles } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Пресса о нас | BQ",
  description: "Пресса о нас | BQ",
};

export default async function News() {
  const articles = await getArticles(20);
  const magazineArticles = articles.filter(
    (article) => article.pressReleaseCategory === "magazines"
  );

  return (
    <div className="flex flex-col gap-8 mt-[34px] md:gap-[160px] xl:gap-[120px] min-h-screen">
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
