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

const projectsData = [
  {
    type: "left",
    mainImage: project1,
    mainImageSize: [1059, 640],
    text: "BQ — B.01",
    className: "mt-[189px]",
    displayMode: "gallery",
  },
  {
    type: "right",
    mainImage: project2,
    mainImageSize: [794, 1120],
    secondaryImage: project3,
    secondaryImageSize: [517, 322],
    text: "BQ — MK.04",
    secondaryText: "BQ — MK.04",
    className: "mt-[160px]",
    displayMode: "gallery",
  },
  {
    type: "left",
    mainImage: project4,
    mainImageSize: [1059, 1059],
    text: "BQ — ВБ.08",
    className: "mt-[160px]",
    displayMode: "gallery",
  },
  {
    type: "right",
    mainImage: project5,
    mainImageSize: [1059, 709],
    secondaryImage: project6,
    secondaryImageSize: [517, 322],
    text: "BQ — Б.01",
    secondaryText: "BQ — MK.04",
    className: "mt-[160px]",
    displayMode: "gallery",
  },
  {
    type: "left",
    mainImage: project7,
    mainImageSize: [794, 1200],
    text: "BQ — КП.05",
    className: "mt-[160px]",
    displayMode: "gallery",
  },
  {
    type: "right",
    mainImage: project8,
    mainImageSize: [794, 1025],
    secondaryImage: project9,
    secondaryImageSize: [517, 354],
    text: "BQ — Б.01",
    secondaryText: "BQ — MK.04",
    className: "mt-[160px]",
    displayMode: "gallery",
  },
];

export default function Home() {
  const { displayMode, visible } = useGallery();

  return (
    <div className="flex flex-col">
      <h1 className="px-3 font-spectral text-[38px] font-normal leading-[42px] -tracking-[0.03em]">
        Развиваем архитектуру как культурную практику, реализуя различные
        форматы, такие как: <br />{" "}
        <span className="opacity-30 font-apercu text-[36px]">
          Бренд-урбанизм
        </span>
        , <span className="opacity-30 font-apercu text-[36px]">Интерьеры</span>,{" "}
        <span className="opacity-30 font-apercu text-[36px]">
          Общественные проекты
        </span>
        ,{" "}
        <span className="opacity-30 font-apercu text-[36px]">
          Ландшафт и благоустройство
        </span>
        ,{" "}
        <span className="opacity-30 font-apercu text-[36px]">
          Мастер-план территории
        </span>{" "}
        и{" "}
        <span className="opacity-30 font-apercu text-[36px]">
          Жилая застройка.
        </span>
      </h1>

      {displayMode === "gallery" ? (
        <div
          className={`flex flex-col transition-opacity duration-1000 ${
            visible ? "opacity-100" : "opacity-0"
          }`}
        >
          {projectsData.map((item) => {
            return (
              <ProjectItem
                key={item.text} // Always use a unique key
                type={item.type as "left" | "right"}
                mainImage={item.mainImage as StaticImageData}
                mainImageSize={item.mainImageSize as [number, number]}
                text={item.text}
                secondaryText={item.secondaryText}
                secondaryImage={item.secondaryImage as StaticImageData}
                secondaryImageSize={item.secondaryImageSize as [number, number]}
                className={`${item.className}`}
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
                key={item.text} // Always use a unique key
                type={item.type as "left" | "right"}
                mainImage={item.mainImage}
                mainImageSize={item.mainImageSize as [number, number]}
                text={item.text}
                secondaryText={item.secondaryText}
                secondaryImage={item.secondaryImage}
                secondaryImageSize={item.secondaryImageSize as [number, number]}
                displayMode={"list"}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}
