"use client";

import { cn } from "@/lib/utils";
import { Article, Project } from "./home/types";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function RelatedItems({
  title,
  items,
}: {
  title: string;
  items: Article[] | Project[];
}) {
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
      case "press-release":
        return "Пресс-релиз";
      default:
        return "";
    }
  };

  const linkURL = (item: Article | Project) => {
    if ("type" in item) {
      const baseUrl = item.type === "press-release" ? "/news" : "/knowledge";
      return `${baseUrl}/news/${item.slug.current}`;
    } else {
      return `/knowledge/${item.slug.current}`;
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <div className="flex flex-col w-full mt-14">
      <p className="font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] pl-3 w-full border-b border-[#E7E9EF] pb-3">
        {title}
      </p>
      <div className="w-screen overflow-hidden">
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          ssr
          responsive={responsive}
          infinite={false}
          transitionDuration={1000}
          containerClass="carousel-container"
          itemClass="select-none"
        >
          {items.map(
            (item, index) =>
              item.image && (
                <a
                  href={linkURL(item)}
                  key={index}
                  className={cn(
                    "relative group cursor-pointer flex flex-col items-center mt-10 md:min-w-[calc(6*8.33vw)] max-xl:items-center xl:min-w-[calc(2*8.33vw)] xl:w-[calc(2*8.33vw)] xl:aspect-[5/6] object-cover object-center ml-20"
                  )}
                >
                  <Image
                    src={item.image?.asset.url}
                    width={0}
                    height={0}
                    className="md:min-w-[calc(6*8.33vw)] max-xl:items-center xl:min-w-[calc(2*8.33vw)] xl:w-[calc(2*8.33vw)] xl:aspect-[5/6] object-cover object-center"
                    unoptimized
                    alt={item.description || item.title}
                  />
                  <div className="xl:absolute xl:left-0 xl:top-0 w-full h-full xl:bg-white xl:opacity-0 transition-opacity xl:custom-shadow-right-no-margin xl:group-hover:opacity-100 flex flex-col font-apercu font-normal text-[14px] xl:text-[16px] 2xl:text-[32px] leading-[20px] xl:leading-[20px] 2xl:leading-[40px] -tracking-[0.28px] xl:-tracking-[0.02em] xl:pt-3 2xl:pt-6 max-md:w-[calc(6*12.5vw)] max-xl:w-[calc(3*8.33vw)] bg-blue-500">
                    <p className="block opacity-30">
                      {getArticleType("type" in item ? item.type : "digest")}
                      {"date" in item && item.date && (
                        <span className="ml-1 xl:hidden">
                          {new Date(item.date).toLocaleDateString("ru-RU")}
                        </span>
                      )}
                    </p>
                    <p>
                      {item.title} <br className="xl:hidden" />
                      <span className="opacity-30">
                        {"categories" in item &&
                          item.categories &&
                          item.categories
                            .map((cat: { name: string }) => cat.name)
                            .join(", ")}
                      </span>
                    </p>
                    <p
                      className={cn(
                        "xl:mt-auto xl:pb-3",
                        "projectCodeName" in item &&
                          item.projectCodeName &&
                          "xl:hidden"
                      )}
                    >
                      {"projectCodeName" in item && item.projectCodeName}
                      {"date" in item && item.date && (
                        <span className="opacity-30 hidden xl:block">
                          {new Date(item.date).toLocaleDateString("ru-RU")}
                        </span>
                      )}
                    </p>
                  </div>
                </a>
              )
          )}
        </Carousel>
      </div>
    </div>
  );
}
