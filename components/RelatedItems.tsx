"use client";

import { cn } from "@/lib/utils";
import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { Article, Project } from "./home/types";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import React, { useState, useEffect } from "react";

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

  const router = useTransitionRouter();
  const pathname = usePathname();
  const isProject = items.length > 0 && !("type" in items[0]);

  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div
      className="grid w-full mt-14 xl:mb-0"
      style={{
        userSelect: "none",
        WebkitUserSelect: "none",
        MozUserSelect: "none",
        msUserSelect: "none",
      }}
    >
      <div className="flex flex-row items-center justify-between border-b border-[#E7E9EF] p-3">
        <p className="font-apercu font-normal text-[16px] -tracking-[0.32px]  w-full 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px] md:max-xl:w-fit">
          {title}
        </p>
        <CustomPagination
          totalSlides={items.length}
          activeIndex={activeIndex}
          swiper={swiper}
        />
      </div>
      <div className="relative overflow-hidden mt-20 xl:mt-40 px-[calc(0.5*8.33vw)] ">
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1280: {
              slidesPerView: isProject || pathname === "/culture" ? 4 : 3,
            },
          }}
          onSwiper={setSwiper}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {items.map(
            (item, index) =>
              item.image && (
                <SwiperSlide key={item.id}>
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
                        "w-full xl:h-full xl:max-w-[253px] max-xl:md:max-w-[241px] md:mx-auto ",
                        isProject
                          ? "object-contain object-top xl:aspect-[253/360]"
                          : "object-cover object-center xl:aspect-[253/320]"
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

                    <div className="flex flex-col font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] pt-3 xl:opacity-0 xl:hover:opacity-100 xl:transition-opacity xl:bg-white xl:w-full xl:h-full xl:absolute xl:top-0 xl:left-1/2 xl:-translate-x-1/2 xl:hover:custom-shadow-right-no-margin max-xl:md:max-w-[241px] md:mx-auto xl:max-w-[253px]">
                      <p className="opacity-30">
                        {!isProject &&
                          getArticleType("type" in item ? item.type : "digest")}
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
                      {!isProject && (
                        <p className="mt-auto pb-3">
                          {"projectCodeName" in item && item.projectCodeName}
                          {"date" in item && item.date && (
                            <span className="opacity-30 hidden xl:block">
                              {new Date(item.date).toLocaleDateString("ru-RU")}
                            </span>
                          )}
                        </p>
                      )}
                    </div>
                  </a>
                </SwiperSlide>
              )
          )}
        </Swiper>
      </div>
    </div>
  );
}

function CustomPagination({
  totalSlides,
  activeIndex,
  swiper,
}: {
  totalSlides: number;
  activeIndex: number;
  swiper: SwiperType | null;
}) {
  const [visibleDots, setVisibleDots] = useState(totalSlides);

  useEffect(() => {
    const updateVisibleDots = () => {
      if (window.innerWidth >= 1280) {
        setVisibleDots(0); // No dots on desktop
      } else if (window.innerWidth >= 768) {
        setVisibleDots(Math.max(0, totalSlides - 1)); // One less dot on tablet
      } else {
        setVisibleDots(totalSlides); // All dots on mobile
      }
    };

    updateVisibleDots();
    window.addEventListener("resize", updateVisibleDots);

    return () => window.removeEventListener("resize", updateVisibleDots);
  }, [totalSlides]);

  if (visibleDots === 0) return null; // Don't render anything on desktop

  return (
    <div className="flex justify-center gap-1.5 md:max-xl:mx-auto md:max-xl:-translate-x-[200%]">
      {Array.from({ length: visibleDots }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-1.5 h-1.5 rounded-full",
            activeIndex === index ? "bg-black" : "bg-black/30"
          )}
          onClick={() => swiper?.slideTo(index)}
        ></button>
      ))}
    </div>
  );
}

function opacity() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  document.documentElement.animate(
    [
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
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
            filter: "blur(5px)",
          }
        : {
            opacity: 0,
            filter: "blur(5px)",
          },
      {
        opacity: 1,
        filter: "blur(0px)",
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease-in-out",
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
            filter: "blur(5px)",
          }
        : {
            opacity: 0,
            filter: "blur(5px)",
          },
      {
        opacity: 1,
        filter: "blur(0px)",
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease-in-out",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
