"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperType } from "swiper";
import "swiper/css";
import React, { useState } from "react";
import { EffectFade } from 'swiper/modules';
import 'swiper/css/effect-fade';

import { TeamMember } from "@/components/home/types";
import Image from "next/image";
import { cn } from "@/lib/utils";

export default function CultureTeam({
  title,
  team,
}: {
  title: string;
  team: Array<TeamMember>;
}) {
  const [swiper, setSwiper] = useState<SwiperType | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-end mt-[100px]">
      <div className="flex flex-col gap-8 xl:gap-10 items-center xl:justify-center xl:custom-shadow-left-no-margin relative px-2 pt-4 md:pt-3 xl:py-[200px] w-full xl:w-[calc(9*8.33vw)]">
        <div className="absolute top-0 left-0 w-1/2 max-xl:custom-shadow-top" />
        <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] xl:absolute xl:left-[12px] xl:top-[20px] max-xl:mr-auto">
          {title}
        </p>
        <div className="relative w-full pb-[44px]">
          <Swiper
            spaceBetween={50}
            slidesPerView={1}
            autoHeight
            onSwiper={setSwiper}
            onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
            effect="fade"
            fadeEffect={{ crossFade: true }}
            modules={[EffectFade]}
            className="!overflow-visible"
          >
            {team.map((member, index) => (
              <SwiperSlide key={index} className="!w-full">
                <div
                  className="flex flex-col items-center gap-8 xl:gap-10 min-w-full select-none"
                  key={index}
                >
                  <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[1.14px] text-center md:w-[calc(6*8.33vw)] xl:w-[calc(7*8.33vw)] select-none">
                    <span className="font-apercu opacity-30">
                      {member.name}
                    </span>{" "}
                    <br />
                    <span className="font-apercu opacity-30">
                      {member.position}
                    </span>{" "}
                    {member.quote}
                  </h1>

                  <Image
                    src={member.image?.asset.url ?? ""}
                    alt="project-1"
                    width={0}
                    height={0}
                    className="aspect-[253/320] w-[calc(4*12.5vw)] md:w-[calc(1.5*8.33vw)] h-auto relative select-none"
                    unoptimized
                    draggable={false}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <CustomPagination
            totalSlides={team.length}
            activeIndex={activeIndex}
            swiper={swiper}
          />
        </div>
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
  return (
    <div className="flex justify-center gap-1.5 mt-10">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          className={cn(
            "w-2 h-2 rounded-full",
            activeIndex === index ? "bg-black" : "bg-black/30"
          )}
          onClick={() => swiper?.slideTo(index)}
        ></button>
      ))}
    </div>
  );
}
