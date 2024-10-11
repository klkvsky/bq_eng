"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  const CustomDot = ({
    onClick,
    ...rest
  }: {
    onClick: () => void;
    active: boolean;
  }) => {
    const { active } = rest;
    return (
      <button
        className={cn(
          active
            ? "w-2 h-2 mx-1 rounded-full bg-black"
            : "w-2 h-2 mx-1 rounded-full bg-black/30"
        )}
        onClick={() => onClick()}
      ></button>
    );
  };

  return (
    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-end mt-[100px]">
      <div className="flex flex-col gap-8 xl:gap-10 items-center xl:justify-center max-xl:custom-shadow-top xl:custom-shadow-left relative px-2 pt-4 md:pt-3 xl:py-[200px] w-full xl:w-[calc(9*8.33vw)]">
        <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] xl:absolute xl:left-[12px] xl:top-[20px] max-xl:mr-auto">
          {title}
        </p>
        <div className="relative w-full pb-[44px]">
          <Carousel
            swipeable={true}
            draggable={true}
            arrows={false}
            showDots={true}
            responsive={responsive}
            infinite={true}
            transitionDuration={1000}
            containerClass="carousel-container"
            itemClass="carousel-item-padding-40-px h-full select-none"
            renderDotsOutside={true}
            customDot={
              <CustomDot
                onClick={function (): void {
                  throw new Error("Function not implemented.");
                }}
                active={false}
              />
            }
            dotListClass="custom-dot-list-style"
          >
            {team.map((member, index) => (
              <div
                className="flex flex-col items-center gap-8 xl:gap-10 min-w-full select-none"
                key={index}
              >
                <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[1.14px] text-center md:w-[calc(6*8.33vw)] xl:w-[calc(7*8.33vw)] select-none">
                  <span className="font-apercu opacity-30">{member.name}</span>{" "}
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
            ))}
          </Carousel>
        </div>
      </div>
      <style jsx>{`
        .custom-dot-list-style {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          display: flex;
          justify-content: center;
          padding: 0;
          margin: 0;
          list-style: none;
          background: red;
        }
      `}</style>
    </div>
  );
}
