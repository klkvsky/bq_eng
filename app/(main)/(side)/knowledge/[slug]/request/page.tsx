"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Article } from "@/components/home/types";
import { cn } from "@/lib/utils";
import { getArticleBySlug } from "@/lib/sanity";

import Image from "next/image";

import { useTransitionRouter } from "next-view-transitions";

export default function ResearchRequest() {
  const pathname = usePathname();
  const router = useTransitionRouter();

  const [article, setArticle] = useState<Article>();

  useEffect(() => {
    const fetchArticle = async () => {
      const slug = pathname.split("/")[2]; // Extract slug from pathname
      const fetchedArticle = await getArticleBySlug(slug);
      setArticle(fetchedArticle);
    };
    fetchArticle();
  }, [pathname]);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [company, setCompany] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isFormSubmitted) return;
    setIsLoading(true);

    const formData = {
      name,
      email,
      company,
      articleTitle: article?.title ?? "",
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
    <form
      onSubmit={handleSubmit}
      className={cn(
        "bg-white flex flex-col p-2 md:pl-3 md:py-0 gap-10 transition-all duration-1000 justify-start align-top min-h-[78vh] md:min-h-[85vh] xl:min-h-[calc(100vh-88px)]"
      )}
    >
      <h1 className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.04em] 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]">
        <span className="font-apercu opacity-30">
          {isFormSubmitted
            ? "Спасибо за оставленную заявку!"
            : "Добро пожаловать в BQ Studio!"}
        </span>{" "}
        {isFormSubmitted
          ? " Пожалуйста, проверьте вашу почту, чтобы скачать исследование. Если вы не получили письмо в течение нескольких минут, проверьте папку «Спам» или «Промоакции»."
          : `
          Вы оставляете заявку на доступ к исследованию "${article?.title ?? ""}"
          `}
      </h1>

      {!isFormSubmitted && (
        <div className="flex flex-col gap-10">
          <input
            type="text"
            placeholder="Имя Фамилия"
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className="w-full border-b border-b-[#E7E9EF] text-black font-spectral text-[28px] font-normal leading-[32px] tracking-[-0.56px] outline-none pb-3 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]"
          />
          <div className="flex flex-col md:flex-row gap-10 md:gap-3">
            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="email"
              className="w-full border-b border-b-[#E7E9EF] text-black font-spectral text-[28px] font-normal leading-[32px] tracking-[-0.56px] outline-none pb-3 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]"
            />
            <input
              type="text"
              placeholder="Компания"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              autoComplete="organization"
              className="w-full border-b border-b-[#E7E9EF] text-black font-spectral text-[28px] font-normal leading-[32px] tracking-[-0.56px] outline-none pb-3 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]"
            />
          </div>
        </div>
      )}
      <button
        type="submit"
        disabled={isLoading}
        className="bg-black text-white font-apercu text-[18px] px-[82px] py-2 max-md:w-[90vw] w-fit 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]"
        onClick={() => {
          if (isFormSubmitted) {
            router.push(`/${pathname.split("/").slice(1, 3).join("/")}`, {
              onTransitionReady: slideDown,
            });
          }
        }}
      >
        {isLoading ? "Отправка..." : isFormSubmitted ? "Спасибо!" : "Отправить"}
      </button>

      <Image
        src={article?.images?.[0]?.asset.url || ""}
        width={0}
        height={0}
        alt={""}
        className="w-6/12 md:w-3/12 xl:w-[calc(2*8.33vw)] xl:mt-auto"
        unoptimized
      />
    </form>
  );
}

function slideDown() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
        zIndex: 1000,
      },
      {
        opacity: 1,
        transform: "translateY(100%)",
        zIndex: 1000,
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0%)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
