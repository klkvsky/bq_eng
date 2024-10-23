import { Metadata } from "next";

import { NewsSection } from "@/components/news/NewSection";
import { getArticles } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Новости | BQ",
};

export default async function News() {
  const articles = await getArticles(20);
  const magazineArticles = articles.filter(
    (article) => article.pressReleaseCategory === "magazines"
  );
  const bqArticles = articles.filter(
    (article) => article.pressReleaseCategory === "bq"
  );

  return (
    <div className="flex flex-col gap-8 mt-[34px] md:gap-[160px] xl:gap-[120px] min-h-screen">
      {magazineArticles.length > 0 && (
        <div>
          <NewsSection
            title="Пресса о нас"
            items={magazineArticles}
            isClose={false}
          />
        </div>
      )}
      {bqArticles.length > 0 && (
        <div>
          <NewsSection
            title="Материалы BQ"
            items={bqArticles}
            isClose={false}
          />
        </div>
      )}
    </div>
  );
}
