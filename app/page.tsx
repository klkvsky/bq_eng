'use client'

import prjects1 from "@/public/assets/images/projects-1.png"
import { useEffect, useState } from "react";
import ProjectItem from "@/components/Projects-Item";
import { cn } from "@/lib/utils";

const projectsData = [
  {
    "type": "left",
    "mainImage": "prjects1",
    "mainImageSize": [1059, 640],
    "text": "BQ — B.01",
    "className": "mt-[189px]",
    "displayMode": "gallery"
  },
  {
    "type": "right",
    "mainImage": "prjects1",
    "mainImageSize": [794, 1120],
    "secondaryImage": "prjects1",
    "secondaryImageSize": [517, 322],
    "text": "BQ — MK.04",
    "secondaryText": "BQ — MK.04",
    "className": "mt-[160px]",
    "displayMode": "gallery"
  },
  {
    "type": "left",
    "mainImage": "prjects1",
    "mainImageSize": [1059, 1059],
    "text": "BQ — ВБ.08",
    "className": "mt-[160px]",
    "displayMode": "gallery"
  },
  {
    "type": "right",
    "mainImage": "prjects1",
    "mainImageSize": [1059, 709],
    "secondaryImage": "prjects1",
    "secondaryImageSize": [517, 322],
    "text": "BQ — Б.01",
    "secondaryText": "BQ — MK.04",
    "className": "mt-[160px]",
    "displayMode": "gallery"
  },
  {
    "type": "left",
    "mainImage": "prjects1",
    "mainImageSize": [794, 1200],
    "text": "BQ — КП.05",
    "className": "mt-[160px]",
    "displayMode": "gallery"
  },
  {
    "type": "right",
    "mainImage": "prjects1",
    "mainImageSize": [794, 1025],
    "secondaryImage": "prjects1",
    "secondaryImageSize": [517, 354],
    "text": "BQ — Б.01",
    "secondaryText": "BQ — MK.04",
    "className": "mt-[160px]",
    "displayMode": "gallery"
  }
]

export default function Home() {
  const [displayMode, setDisplayMode] = useState<"gallery" | "list">("gallery")
  const [visible, setVisible] = useState(true)

  const handleRouteChange = () => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  // Handle transition effect with delay
  const handleToggle = () => {
    handleRouteChange()
    setVisible(false); // Start hiding the current items
    setTimeout(() => {
      // After 1s, switch the display mode and make items visible again
      setDisplayMode(displayMode === "gallery" ? "list" : "gallery");
      setVisible(true);
    }, 1000); // 1 second delay
  };

  return (
    <div className="flex flex-col" onClick={handleToggle}>
      <h1 className="px-3 font-spectral text-[38px] font-normal leading-[42px] -tracking-[0.03em]" >
        Развиваем архитектуру как культурную практику, реализуя различные форматы, такие как: <br /> <span className="opacity-30 font-apercu text-[36px]">Бренд-урбанизм</span>, <span className="opacity-30 font-apercu text-[36px]">Интерьеры</span>, <span className="opacity-30 font-apercu text-[36px]">Общественные проекты</span>, <span className="opacity-30 font-apercu text-[36px]">Ландшафт и благоустройство</span>, <span className="opacity-30 font-apercu text-[36px]">Мастер-план территории</span> и <span className="opacity-30 font-apercu text-[36px]">Жилая застройка.</span>
      </h1>

      {displayMode === "gallery" ? (
        <div className={`flex flex-col transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          {projectsData.map((item) => {
            return (
              <ProjectItem
                key={item.text} // Always use a unique key
                type={item.type as "left" | "right"}
                mainImage={prjects1}
                mainImageSize={item.mainImageSize as [number, number]}
                text={item.text}
                secondaryText={item.secondaryText}
                secondaryImage={prjects1}
                secondaryImageSize={item.secondaryImageSize as [number, number]}
                className={`${item.className}`}
                displayMode={"gallery"}
              />
            );
          })}
        </div>
      ) : (
        <div className={`grid grid-cols-4 gap-x-[144px] gap-y-[160px] px-[78px] mt-[160px] transition-opacity duration-1000 ${visible ? "opacity-100" : "opacity-0"}`}>
          {projectsData.map((item) => {
            return (
              <ProjectItem
                key={item.text} // Always use a unique key
                type={item.type as "left" | "right"}
                mainImage={prjects1}
                mainImageSize={item.mainImageSize as [number, number]}
                text={item.text}
                secondaryText={item.secondaryText}
                secondaryImage={prjects1}
                secondaryImageSize={item.secondaryImageSize as [number, number]}
                displayMode={"list"}
              />
            );
          })}
        </div>
      )}
    </div >
  );
}
