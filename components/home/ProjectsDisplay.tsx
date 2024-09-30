"use client";

import ProjectItem from "@/components/Projects-Item";
import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { cn } from "@/lib/utils";
import { urlFor } from "@/sanity/lib/image";

interface HomeData {
  title: string;
  categories: { _id: string; title: string }[];
  projects: {
    type: "left" | "right";
    mainImage: any;
    secondaryImage?: any;
    text: string;
    secondaryText?: string;
    cols: number;
    category: { _id: string; title: string };
  }[];
}


export default function ProjectsDisplay({ data }: { data: HomeData }) {
  const { displayMode, visible } = useGallery();

  return (
    <div>
      {displayMode === "gallery" ? (
        <div
          className={cn(
            "flex flex-col transition-opacity duration-1000 gap-[80px] md:gap-[160px] 2xl:gap-[422px] mt-[48px] md:mt-20 xl:mt-[189px] 2xl:mt-[454px]",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {data.projects.map((item, index) => (
            <ProjectItem
              key={index}
              type={item.type}
              mainImage={urlFor(item.mainImage).url()}
              secondaryImage={
                item.secondaryImage
                  ? urlFor(item.secondaryImage).url()
                  : undefined
              }
              cols={item.cols}
              text={item.text}
              secondaryText={item.secondaryText}
              displayMode="gallery"
              categories={[item.category.title]}
            />
          ))}
        </div>
      ) : (
        <div
          className={cn(
            "xl:grid xl:grid-cols-4 xl:gap-x-[0.5*8.33vw] xl:px-[8.33vw] xl:gap-y-[160px] mt-20 xl:mt-40 transition-opacity duration-1000 flex flex-col gap-[16px] xl:gap-[8.33vw] xl:justify-items-center",
            visible ? "opacity-100" : "opacity-0"
          )}
        >
          {data.projects.map((item, index) => (
            <ProjectItem
              key={index}
              type={item.type}
              mainImage={urlFor(item.mainImage).url()}
              text={item.text}
              secondaryText={item.secondaryText}
              secondaryImage={
                item.secondaryImage
                  ? urlFor(item.secondaryImage).url()
                  : undefined
              }
              displayMode="list"
              cols={item.cols}
              categories={[item.category.title]}
            />
          ))}
        </div>
      )}
    </div>
  );
}
