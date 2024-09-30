"use client";

import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { cn } from "@/lib/utils";

export default function PageTitle({
  title,
  projectPrefix,
  categories,
}: {
  title: string;
  projectPrefix?: string;
  categories: { name: string }[];
}) {
  const { changeDisplayMode, selectedCategory, setSelectedCategory } =
    useGallery();
  return (
    <h1 className="px-2 md:px-3 font-spectral text-[20px] md:text-[28px] xl:text-[36px] 2xl:text-[91.2px] font-normal leading-[24px] md:leading-[32px] xl:leading-[42px] 2xl:leading-[100.8px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] 2xl:-tracking-[2.736px]">
      {projectPrefix && (
        <span className="font-apercu opacity-30">{projectPrefix}</span>
      )}
      {title}
      <br className="md:hidden" />
      <br className="md:hidden" />{" "}
      {categories.map((category, index, array) => (
        <>
          <span
            key={index}
            className={cn(
              "transition-opacity font-apercu whitespace-nowrap cursor-pointer duration-500",
              selectedCategory === category.name
                ? "opacity-75 hover:opacity-100"
                : "opacity-30 hover:opacity-100"
            )}
            onClick={() => {
              if (selectedCategory !== category.name) {
                changeDisplayMode("list");

                setTimeout(() => {
                  setSelectedCategory(category.name);
                }, 1000);
              } else {
                changeDisplayMode("gallery");

                setTimeout(() => {
                  setSelectedCategory(null);
                }, 1000);
              }
            }}
          >
            {category.name}
          </span>
          {index < array.length - 2 && ", "}
          {index === array.length - 2 && " и "}
        </>
      ))}
    </h1>
  );
}
