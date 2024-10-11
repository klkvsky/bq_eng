"use client";

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
      return `${baseUrl}/${item.slug.current}`;
    } else {
      return `/news/${item.slug.current}`;
    }
  };

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1280, min: 640 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 640, min: 0 },
      items: 1,
    },
  };

  return (
    <div
      className="grid w-full mt-14 -mb-12 xl:-mb-32"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <p className="font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] pl-3 w-full border-b border-[#E7E9EF] pb-3">
        {title}
      </p>
      <div className="relative overflow-hidden mt-8">
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          responsive={responsive}
          infinite={false}
          transitionDuration={1000}
          containerClass="relative w-full"
          itemClass="px-[12.33vw] md:px-4 xl:px-0 xl:mx-[22px] w-full xl:aspect-[4/5] relative group"
        >
          {items.map(
            (item, index) =>
              item.image && (
                <a
                  href={linkURL(item)}
                  key={index}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  style={{
                    userSelect: "none",
                    WebkitUserSelect: "none",
                    MozUserSelect: "none",
                    msUserSelect: "none",
                  }}
                >
                  <Image
                    src={item.image?.asset.url}
                    width={0}
                    height={0}
                    className="w-full xl:h-full object-cover object-center"
                    unoptimized
                    alt={item.description || item.title}
                    draggable={false}
                    style={{
                      userSelect: "none",
                      WebkitUserSelect: "none",
                      MozUserSelect: "none",
                      msUserSelect: "none",
                    }}
                  />

                  <div className="flex flex-col font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] pt-3 xl:opacity-0 xl:hover:opacity-100 xl:transition-opacity xl:bg-white xl:w-full xl:h-full xl:absolute xl:top-0 xl:left-0 xl:hover:custom-shadow-right-no-margin">
                    <p className="opacity-30">
                      {getArticleType("type" in item ? item.type : "digest")}
                      {"date" in item && item.date && (
                        <span className="ml-1 xl:hidden">
                          {new Date(item.date).toLocaleDateString("ru-RU")}
                        </span>
                      )}
                    </p>
                    <p>
                      {item.title}
                      <br className="xl:hidden" />
                      <span className="opacity-30">
                        {"categories" in item &&
                          item.categories &&
                          item.categories
                            .map((cat: { name: string }) => cat.name)
                            .join(", ")}
                      </span>
                    </p>
                    <p className="mt-auto pb-3">
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
