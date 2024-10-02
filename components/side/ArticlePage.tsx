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
import { useState } from "react";

export default function ArticlePage({ article }: { article: Article }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormSubmitted) return
    setIsLoading(true);

    const formData = {
      name,
      email,
      company,
      articleTitle: article.title,
    };

    console.log(formData);

    fetch(
      "https://script.google.com/macros/s/AKfycbzO8Jh3zfQ4vig2Z9Cbu25u9FwZcEwEi1EQJ0Mtf2648lRbrm0e2z76FLVkU14DuRZf/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(formData),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log("Response from server:", data);
        setIsFormSubmitted(true);
      })
      .catch((error) => {
        console.error("Error:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div className="flex flex-col items-center pb-20 relative">
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
        <div className="bg-[#B09FB5] w-screen xl:w-[calc(9*8.33vw)] relative h-[50vh] xl:h-screen flex flex-row overflow-scroll snap-x snap-mandatory lg:-mt-[44px] no-scrollbar">
          {article.images.map((image, index) => (
            <div
              key={index}
              className="snap-center snap-always min-w-[100vw] xl:min-w-[calc(9*8.33vw)] h-full flex flex-col items-center justify-center px-[calc(2.5*8.33vw)]"
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
            {getArticleType(article.type)}. <br className="md:hidden" />
          </span>
          <span className="font-apercu opacity-30">{article.title}.</span>{" "}
          <br className="md:hidden" />
          {article.description}
        </p>
      )}
      {article.type === "research" && (
        <button
          className="bg-black text-white font-apercu text-[18px] px-[82px] py-2 xl:mr-auto xl:ml-3 mt-6 max-md:w-[90vw]"
          onClick={() => {
            setIsModalOpen(true);
          }}
        >
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
      <form
        onSubmit={handleSubmit}
        className={cn(
          "fixed left-0 w-full h-full bg-white flex flex-col p-2 md:pl-3 md:py-0 gap-20 transition-all duration-1000",
          !isModalOpen
            ? "top-full opacity-0 pointer-events-none"
            : "top-0 opacity-100"
        )}
      >
        <h1 className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] xl:mt-[44px] max-xl:pt-[44px]">
          <span className="font-apercu opacity-30">
            {isFormSubmitted
              ? "Спасибо за оставленную заявку!"
              : "Добро пожаловать в BQ Studio!"}
          </span>{" "}
          {isFormSubmitted
            ? " Пожалуйста, проверьте вашу почту, чтобы скачать исследование. Если вы не получили письмо в течение нескольких минут, проверьте папку «Спам» или «Промоакции»."
            : `
          Вы оставляете заявку на доступ к исследованию "${article.title}"
          `}
        </h1>

        {!isFormSubmitted && (
          <input
            type="text"
            placeholder="Имя Фамилия"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="w-full border-b border-b-[#E7E9EF] text-black font-spectral text-[28px] font-normal leading-[32px] tracking-[-0.56px] outline-none"
          />
        )}
        {!isFormSubmitted && (
          <div className="flex flex-row gap-3">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full border-b border-b-[#E7E9EF] text-black font-spectral text-[28px] font-normal leading-[32px] tracking-[-0.56px] outline-none"
            />
            <input
              type="text"
              placeholder="Компания"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
              className="w-full border-b border-b-[#E7E9EF] text-black font-spectral text-[28px] font-normal leading-[32px] tracking-[-0.56px] outline-none"
            />
          </div>
        )}
        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white font-apercu text-[18px] px-[82px] py-2 max-md:w-[90vw] w-fit"
          onClick={() => {
            if (isFormSubmitted) {
              setIsModalOpen(false);
            }
          }}
        >
          {isLoading
            ? "Отправка..."
            : isFormSubmitted
              ? "Спасибо!"
              : "Отправить"}
        </button>
      </form>
    </div>
  );
}
