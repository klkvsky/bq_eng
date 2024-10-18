import Image from "next/image";
import { Article } from "@/components/home/types";
import { ArticleShareAndInfo } from "@/components/article/ShareAndInfo";
import { ArticleText } from "@/components/article/Text";
import { ArticleImage } from "@/components/article/Image";
import { ArticleVideo } from "@/components/article/Video";
import { ArticleQuote } from "@/components/article/Quote";
import { getArticleBySlug, urlFor } from "@/lib/sanity";

import { cn } from "@/lib/utils";
import RelatedItems from "@/components/RelatedItems";

export default async function ArticlePage({
  params,
}: {
  params: { slug: string };
}) {
  const article: Article = await getArticleBySlug(params.slug);

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
    <div className="flex flex-col items-center xl:py-10 min-h-screen">
      {article.type !== "research" && (
        <div
          className="font-normal text-[20px] md:text-[32px] xl:text-[38px] leading-[24px] md:leading-[36px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.96px] xl:-tracking-[0.03em] text-center w-[calc(6*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(7*8.33vw)] 2xl:text-[68px] 2xl:leading-[76px] 2xl:-tracking-[1.36px]"
          id="article-page"
        >
          <p className="font-spectral xl:font-apercu xl:opacity-30">
            {getArticleType(article.type) || article.source}:
          </p>
          <p className="font-spectral">{article.title}</p>
        </div>
      )}
      {article.image && (
        <div className="relative custom-shadow-left mt-4 md:mt-6">
          <Image
            src={urlFor(article.image?.asset.url || "").url()}
            alt="Article image"
            width={0}
            height={0}
            className="w-[calc(6*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(7*8.33vw)] h-auto"
            unoptimized
          />
        </div>
      )}
      {article.type !== "research" && (
        <div className="w-full h-px bg-[#E7E9EF] mt-8 md:mt-10" />
      )}
      <div
        className={cn(
          "flex flex-col items-center relative w-full gap-8 md:gap-20",
          article.type !== "research" && "md:mt-6"
        )}
      >
        {article.type !== "research" && (
          <ArticleShareAndInfo
            date={new Date(article.date).toLocaleDateString("ru-RU")}
            type={article.type}
          />
        )}
        {article.content &&
          article.content.map((item, index) => {
            switch (item.type) {
              case "text":
                return (
                  <ArticleText
                    key={index}
                    text={item.text || ""}
                    type={"center"}
                    title={item.textTitle}
                  />
                );
              case "image":
                return (
                  <ArticleImage
                    key={index}
                    src={item.image ? urlFor(item.image.asset.url).url() : ""}
                    type={item.imagePosition || "center"}
                    subtext={item.imageCaption || null}
                  />
                );
              case "video":
                return (
                  <ArticleVideo
                    key={index}
                    src={item.videoUrl || ""}
                    thumbnail={
                      item.videoThumbnail
                        ? urlFor(item.videoThumbnail.asset.url).url()
                        : ""
                    }
                  />
                );
              case "quote":
                return (
                  <ArticleQuote
                    key={index}
                    author={item.quoteAuthor || ""}
                    position={item.quoteAuthorPosition || ""}
                    text={item.quote || ""}
                  />
                );
              case "list":
                return (
                  <div className="flex flex-col gap-4 xl:gap-6 px-2 font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] xl:-tracking-[0.02em] w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                    <p className="font-spectral">{item.listTitle}</p>
                    <ul className="list-disc list-inside">
                      {item.list?.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>
                );
              default:
                return null;
            }
          })}

        {article.relatedArticles && article.relatedArticles.length > 0 && (
          <div className="flex flex-row w-full items-center justify-center gap-20 mt-40">
            <RelatedItems
              title="Другие материалы"
              items={article.relatedArticles}
            />
          </div>
        )}
      </div>
    </div>
  );
}
