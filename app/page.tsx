"use client";

import project1 from "@/public/assets/images/project-1.png";
import project2 from "@/public/assets/images/project-2.png";
import project3 from "@/public/assets/images/project-3.png";
import project4 from "@/public/assets/images/project-4.png";
import project5 from "@/public/assets/images/project-5.png";
import project6 from "@/public/assets/images/project-6.png";
import project7 from "@/public/assets/images/project-7.png";
import project8 from "@/public/assets/images/project-8.png";
import project9 from "@/public/assets/images/project-9.png";
import ProjectItem from "@/components/Projects-Item";
import { StaticImageData } from "next/image";

import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    type: "left",
    mainImage: project1,
    text: "BQ — B.01",
    displayMode: "gallery",
    cols: 8
  },
  {
    type: "right",
    mainImage: project2,
    secondaryImage: project3,
    text: "BQ — MK.04",
    secondaryText: "BQ — MK.04",
    cols: 6
  },
  {
    type: "left",
    mainImage: project4,
    text: "BQ — ВБ.08",
    cols: 8,
  },
  {
    type: "right",
    mainImage: project5,
    secondaryImage: project6,
    text: "BQ — Б.01",
    secondaryText: "BQ — MK.04",
    cols: 8,
  },
  {
    type: "left",
    mainImage: project7,
    text: "BQ — КП.05",
    cols: 6,
  },
  {
    type: "right",
    mainImage: project8,
    secondaryImage: project9,
    text: "BQ — Б.01",
    secondaryText: "BQ — MK.04",
    cols: 6,
  },
];

export default function Home() {
  const { displayMode, visible } = useGallery();

  return (
    <div className="flex flex-col">
      <h1 className="px-2 lg:px-3 font-spectral text-[20px] md:text-[28px] lg:text-[36px] font-normal leading-[24px] lg:leading-[42px] -tracking-[0.6px] lg:-tracking-[0.03em]">
        Развиваем архитектуру как культурную практику, реализуя различные
        форматы, такие как:
        <br className="md:hidden" />
        <br className="md:hidden" />{" "}
        <span className="opacity-30 font-apercu whitespace-nowrap">
          Бренд-урбанизм
        </span>
        ,{" "}
        <span className="opacity-30 font-apercu whitespace-nowrap">
          Интерьеры
        </span>
        ,{" "}
        <span className="opacity-30 font-apercu whitespace-nowrap">
          Общественные проекты
        </span>
        ,{" "}
        <span className="opacity-30 font-apercu whitespace-nowrap">
          Ландшафт и благоустройство
        </span>
        ,{" "}
        <span className="opacity-30 font-apercu whitespace-nowrap">
          Мастер-план территории
        </span>{" "}
        и{" "}
        <span className="opacity-30 font-apercu whitespace-nowrap">
          Жилая застройка.
        </span>
      </h1>

      {displayMode === "gallery" ? (
        <div
          className={cn("flex flex-col transition-opacity duration-1000 gap-[80px] lg:gap-[160px] mt-[48px] lg:mt-[189px]", visible ? "opacity-100" : "opacity-0")}
        >
          {projectsData.map((item) => {
            return (
              <ProjectItem
                key={item.text} // Always use a unique key
                type={item.type as "left" | "right"}
                mainImage={item.mainImage as StaticImageData}
                secondaryImage={item.secondaryImage as StaticImageData}
                cols={item.cols}
                text={item.text}
                secondaryText={item.secondaryText}
                displayMode={"gallery"}
              />
            );
          })}
        </div>
      ) : (
        <div
          className={`grid grid-cols-4 gap-x-[144px] gap-y-[160px] px-[78px] mt-[160px] transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {projectsData.map((item) => {
            return (
              <ProjectItem
                key={item.text}
                type={item.type as "left" | "right"}
                mainImage={item.mainImage}
                text={item.text}
                secondaryText={item.secondaryText}
                secondaryImage={item.secondaryImage}
                displayMode={"list"}
                cols={item.cols}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
