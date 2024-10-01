"use client";

import Image from "next/image";
import { Article } from "@/components/home/types";
import { ArticleShareAndInfo } from "../article/ShareAndInfo";
import { ArticleText } from "../article/Text";
import { ArticleImage } from "../article/Image";
import { ArticleVideo } from "../article/Video";
import { ArticleQuote } from "../article/Quote";
import { urlFor } from "@/lib/sanity";


import { cn } from "@/lib/utils";
import RelatedItems from "../RelatedItems";

export default function ArticlePage({ article }: { article: Article }) {
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

  console.log(article.images);
  console.log(article);

  return (
    <div className="flex flex-col items-center pb-20">
      {article.type !== "research" && (
        <div
          className="font-normal text-[20px] md:text-[32px] xl:text-[38px] leading-[24px] md:leading-[36px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.96px] xl:-tracking-[0.03em] text-center w-[calc(6*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(7*8.33vw)]"
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
      {article.images && article.images.length > 0 && (
        <div className="bg-[#B09FB5] w-[calc(9*8.33vw)] relative h-screen flex flex-row overflow-scroll snap-x snap-mandatory -mt-[44px] no-scrollbar">
          {article.images.map((image, index) => (
            <div
              key={index}
              className="snap-center snap-always min-w-[calc(9*8.33vw)] h-full flex flex-col items-center justify-center px-[calc(2.5*8.33vw)]"
            >
              <Image
                src={urlFor(image.asset.url).url()}
                alt="Article image"
                width={0}
                height={0}
                className="w-full h-auto"
                unoptimized
              />
            </div>
          ))}
        </div>
      )}
      {article.type === "research" && (
        <p className="font-normal text-[20px] md:text-[28px] leading-[24px] md:leading-[32px] -tracking-[0.6px] md:-tracking-[-0.01rem] p-2 xl:p-3 font-spectral">
          <span className="font-apercu opacity-30">
            {getArticleType(article.type)}.
          </span>
          <span className="font-apercu opacity-30">{article.title}.</span>
          {article.description}
        </p>
      )}
      {article.type === "research" && (
        <button className="bg-black text-white font-apercu text-[18px] px-[82px] py-2 mr-auto ml-3 mt-6">
          Получить доступ
        </button>
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
                  <div className="flex flex-col gap-4 xl:gap-6 px-2 font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] xl:-tracking-[0.02em] w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
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

        {article.relatedArticles && (
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
