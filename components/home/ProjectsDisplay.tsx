"use client";

import Link from "next/link";

import ProjectItem from "@/components/home/Projects-Item";

import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { cn } from "@/lib/utils";

import { HomeData } from "./types";

export default function ProjectsDisplay({ data }: { data: HomeData }) {
  const { displayMode, visible, selectedCategory } = useGallery();

  const filteredProjects = selectedCategory
    ? data.featuredProjects.filter((project) =>
        project.categories.some(
          (category) => category.name === selectedCategory
        )
      )
    : data.featuredProjects;

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
            <Link
              href={`?project=${item.slug.current}`}
              key={index}
              scroll={false}
            >
              <ProjectItem key={index} project={item} displayMode="gallery" />
            </Link>
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
