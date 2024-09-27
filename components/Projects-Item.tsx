import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "@/lib/hooks/useScreenSize";

function calculateWidth(
  displayMode: "gallery" | "list",
  cols: number,
  screenSize: string
) {
  if (displayMode === "list") {
    if (screenSize === "sm") return "25vw";
    return `${2 * 8.33}vw`;
  }
  if (screenSize === "sm") return "87.5vw";
  return `${8 * cols}vw`;
}

export default function ProjectItem({
  type,
  mainImage,
  secondaryImage,
  text,
  secondaryText,
  displayMode,
  cols,
}: {
  type: "left" | "right";
  mainImage: StaticImageData;
  secondaryImage?: StaticImageData;
  secondaryText?: string;
  text: string;
  displayMode: "gallery" | "list";
  cols: number;
}) {
  const screenSize = useScreenSize();
  const calculatedWidth = calculateWidth(displayMode, cols, screenSize);

  return (
    <>
      {type === "left" ? (
        <div className="flex flex-col gap-2 lg:gap-3">
          <div
            className={cn(
              "relative cursor-pointer",
              displayMode === "gallery"
                ? "custom-shadow-right"
                : "group lg:h-[320px] max-md:flex max-md:flex-row-reverse w-full max-md:p-2 md:py-0 max-md:gap-[12.5vw]"
            )}
            style={{
              width:
                screenSize !== "sm"
                  ? calculatedWidth
                  : displayMode === "list"
                  ? "100%"
                  : "87.5vw",
              // maxWidth: screenSize !== "sm" ? calculatedWidth : "100%",
            }}
          >
            <div className="max-md:min-h-[110px] max-md:relative max-md:custom-shadow-left">
              <Image
                src={mainImage}
                alt="project-1"
                width={0}
                height={0}
                style={{
                  width: calculatedWidth,
                  height: displayMode === "gallery" ? "auto" : `auto`,
                }}
                className={cn(
                  displayMode !== "gallery" &&
                    "lg:w-[320px] lg:h-auto lg:max-h-[320px] max-h-[110px] object-cover"
                )}
              />
            </div>
            {displayMode === "list" && (
              <div className="lg:absolute lg:left-0 lg:top-0 w-full h-full lg:bg-white lg:opacity-0 transition-opacity lg:custom-shadow-right-no-margin lg:group-hover:opacity-100 flex lg:flex-col flex-col-reverse max-md:justify-end">
                <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em] lg:pt-3">
                  Живой паркинг. <br className="lg:hidden" />
                  <span className="opacity-30">Интерьеры, Москва 2024</span>
                </p>
                <p className="font-apercu font-normal text-[14px] lg:text-[28px] leading-[20px] lg:leading-[32px] -tracking-[0.28px] lg:-tracking-[0.02em] lg:mt-auto lg:pb-1">
                  KG-12.
                </p>
              </div>
            )}
          </div>
          {displayMode === "gallery" && (
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] pl-3">
              {text}
            </p>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col md:flex-row max-md:items-end lg:justify-end align-top gap-20 lg:gap-3"
          )}
        >
          {displayMode === "gallery" && (
            <div className="flex flex-col gap-2 lg:gap-3">
              <div className="relative">
                <Image
                  src={secondaryImage!}
                  alt="project-1"
                  style={{
                    width: screenSize !== "sm" ? `${8 * 4}vw` : "62.5vw",
                    height: displayMode === "gallery" ? "auto" : `320px`,
                  }}
                  className=""
                />
              </div>
              <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                {secondaryText}
              </p>
            </div>
          )}
          <div
            className={cn(
              "lg:flex lg:flex-col gap-2 lg:gap-3",
              displayMode === "list" && "max-md:w-full"
            )}
          >
            <div
              className={cn(
                "relative cursor-pointer",
                displayMode === "gallery"
                  ? "custom-shadow-left"
                  : "group lg:h-[320px] max-md:h-[110px] max-md:flex max-md:flex-row-reverse max-md:p-2 md:py-0 max-md:gap-[12.5vw] max-md:justify-between"
              )}
              style={{
                width: screenSize !== "sm" ? calculatedWidth : "100%",
                maxWidth: screenSize !== "sm" ? calculatedWidth : "100%",
              }}
            >
              <div className="max-md:min-h-[110px] max-md:relative max-md:custom-shadow-left">
                <Image
                  src={mainImage}
                  alt="project-1"
                  width={0}
                  height={0}
                  style={{
                    width: calculatedWidth,
                    height: displayMode === "gallery" ? "auto" : `auto`,
                  }}
                  className={cn(
                    displayMode !== "gallery" &&
                      "lg:w-[320px] lg:h-auto lg:max-h-[320px] max-h-[110px] object-cover"
                  )}
                />
              </div>
              {displayMode === "list" && (
                <div className="lg:absolute lg:left-0 lg:top-0 w-full h-full lg:bg-white lg:opacity-0 transition-opacity lg:custom-shadow-right-no-margin lg:group-hover:opacity-100 flex lg:flex-col flex-col-reverse max-md:justify-end">
                  <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em] lg:pt-3">
                    Живой паркинг. <br className="lg:hidden" />
                    <span className="opacity-30">Интерьеры, Москва 2024</span>
                  </p>
                  <p className="font-apercu font-normal text-[14px] lg:text-[28px] leading-[20px] lg:leading-[32px] -tracking-[0.28px] lg:-tracking-[0.02em] lg:mt-auto lg:pb-1">
                    KG-12.
                  </p>
                </div>
              )}
            </div>
            {displayMode === "gallery" && (
              <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                {text}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
