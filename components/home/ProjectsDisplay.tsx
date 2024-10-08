"use client";

import { Link, useTransitionRouter } from "next-view-transitions";

import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { cn } from "@/lib/utils";

import { HomeData } from "./types";
import ProjectItem from "@/components/home/Projects-Item";

export default function ProjectsDisplay({ data }: { data: HomeData }) {
  const { displayMode, visible, selectedCategory } = useGallery();

  const filteredProjects = selectedCategory
    ? data.featuredProjects.filter((project) =>
        project.categories.some(
          (category) => category.name === selectedCategory
        )
      )
    : data.featuredProjects;

  const router = useTransitionRouter();

  return (
    <div>
      {displayMode === "gallery" ? (
        <div
          className={cn(
            "flex flex-col transition-opacity duration-1000 gap-[80px] md:gap-[160px] 2xl:gap-[422px] mt-[48px] md:mt-20 xl:mt-[189px] 2xl:mt-[454px]",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {data.featuredProjects.map((item, index) => (
            <a
              href={`/project/${item.slug.current}`}
              key={index}
              onClick={(e) => {
                e.preventDefault();
                router.push(`/project/${item.slug.current}`, {
                  onTransitionReady: slideUp,
                });
              }}
            >
              <ProjectItem key={index} project={item} displayMode="gallery" />
            </a>
          ))}
        </div>
      ) : (
        <div
          className={cn(
            "xl:grid xl:grid-cols-4 xl:gap-x-[0.5*8.33vw] xl:px-[8.33vw] xl:gap-y-[160px] mt-20 xl:mt-40 transition-opacity duration-1000 flex flex-col gap-[16px] xl:gap-[8.33vw] xl:justify-items-center",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {filteredProjects.map((item, index) => (
            <Link
              href={`?project=${item.slug.current}`}
              key={index}
              scroll={false}
            >
              <ProjectItem key={index} project={item} displayMode="list" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}

function slideUp() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
        zIndex: -10,
        mixBlendMode: "normal",
      },
      {
        opacity: 1,
        transform: "translateY(0%)",
        zIndex: -10,
        mixBlendMode: "normal",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(125%)",
        zIndex: 100,
        mixBlendMode: "normal",
      },
      {
        opacity: 1,
        transform: "translateX(0)",
        zIndex: 100,
        mixBlendMode: "normal",
      },
    ],
    {
      duration: 1000,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
