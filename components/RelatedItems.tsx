"use client";

import { cn } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";
import { Article, Project } from "./home/types";
import Image from "next/image";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import React from "react";

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
      // Item is an Article
      if (item.type === "press-release") {
        return `/news/${item.slug.current}`;
      } else {
        return `/knowledge/${item.slug.current}`;
      }
    } else {
      // Item is a Project
      return `/project/${item.slug.current}`;
    }
  };

  const isProject = items.length > 0 && !("type" in items[0]);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1280 },
      items: isProject ? 4 : 3,
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

  const router = useTransitionRouter();

  return (
    <div
      className="grid w-full mt-14 md:-mb-20 xl:mb-0"
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
      <div className="relative overflow-hidden mt-20 xl:mt-40">
        <Carousel
          swipeable={true}
          draggable={true}
          arrows={false}
          showDots={false}
          responsive={responsive}
          infinite={false}
          transitionDuration={1000}
          containerClass="relative w-full"
          itemClass="px-[12.33vw] md:px-4 xl:px-[4.165vw] w-full xl:aspect-[15/12] relative group"
        >
          {items.map(
            (item, index) =>
              item.image && (
                <a
                  href={linkURL(item)}
                  key={index}
                  draggable={false}
                  onDragStart={(e) => e.preventDefault()}
                  className="relative w-full h-full"
                  onClick={(e) => {
                    e.preventDefault();
                    router.push(linkURL(item), {
                      onTransitionReady: opacity,
                    });
                  }}
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
                    className={cn(
                      "w-full xl:h-full",
                      isProject
                        ? "object-contain object-top"
                        : "object-cover object-center"
                    )}
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
                      <br />
                      <span className="opacity-30">
                        {"categories" in item &&
                          item.categories &&
                          item.categories.map(
                            (cat: { name: string }, index: number) => (
                              <React.Fragment key={index}>
                                <span className="whitespace-nowrap">
                                  {cat.name}
                                </span>
                                {index < item.categories.length - 1 && ", "}
                              </React.Fragment>
                            )
                          )}
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

function opacity() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1500,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(projectsTitle)",
    }
  );

  document.documentElement.animate(
    [
      isSafari
        ? {
            display: "none",
            opacity: 0,
          }
        : {
            opacity: 0,
          },
      {
        opacity: 1,
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(projectsTitle)",
    }
  );

  document.documentElement.animate(
    [
      isSafari
        ? {
            display: "none",
            opacity: 0,
          }
        : {
            opacity: 0,
          },
      {
        opacity: 1,
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
