import { cn } from "@/lib/utils";
import Image from "next/image";
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
  return `${8.33 * cols}vw`;
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
  mainImage: string;
  secondaryImage?: string;
  secondaryText?: string;
  categories: string[];
  text: string;
  displayMode: "gallery" | "list";
  cols: number;
}) {
  const screenSize = useScreenSize();
  const calculatedWidth = calculateWidth(displayMode, cols, screenSize);

  return (
    <>
      {type === "left" ? (
        <div className="flex flex-col gap-2 md:gap-3">
          <div
            className={cn(
              "relative cursor-pointer",
              displayMode === "gallery"
                ? "custom-shadow-right"
                : "group max-xl:flex max-xl:flex-row-reverse w-full max-xl:p-2 md:py-0 max-xl:gap-[12.5vw] h-[110px] md:h-[200px] xl:h-[320px] 2xl:h-[520px] max-h-[110px] md:max-h-[200px] xl:max-h-[320px] 2xl:max-h-[520px]"
            )}
            style={{
              width:
                screenSize === "xl" || screenSize === "2xl"
                  ? calculatedWidth
                  : displayMode === "list"
                  ? "100%"
                  : screenSize === "lg" || screenSize === "md"
                  ? calculatedWidth
                  : "87.5vw",
            }}
          >
            <div className="relative max-xl:custom-shadow-left h-full">
              <div className="w-full h-full overflow-hidden">
                <Image
                  src={mainImage}
                  alt="project-1"
                  width={0}
                  height={0}
                  style={{ width: calculatedWidth, height: "auto" }}
                  className={cn(displayMode !== "gallery" && "object-cover")}
                  unoptimized
                />
              </div>
            </div>
            {displayMode === "list" && (
              <div className="xl:absolute xl:left-0 xl:top-0 w-full h-full xl:bg-white xl:opacity-0 transition-opacity xl:custom-shadow-right-no-margin xl:group-hover:opacity-100 flex md:flex-row-reverse xl:flex-col flex-col-reverse max-xl:justify-end">
                <p className="font-apercu font-normal text-[14px] md:text-[28px] xl:text-[16px] 2xl:text-[32px] leading-[20px] md:leading-[32px] xl:leading-[20px] 2xl:leading-[40px] -tracking-[0.28px] md:-tracking-[0.56px] xl:-tracking-[0.02em] xl:pt-3 2xl:pt-6 md:pl-[calc(2*8.33vw)] xl:pl-0">
                  Живой паркинг. <br className="xl:hidden" />
                  <span className="opacity-30">Интерьеры, Москва 2024</span>
                </p>
                <p className="font-apercu font-normal text-[14px] md:text-[28px] 2xl:text-[32px] leading-[20px] md:leading-[32px]  2xl:leading-[40px] -tracking-[0.28px] md:-tracking-[0.56px] xl:-tracking-[0.02em] xl:mt-auto xl:pb-1 2xl:pb-3">
                  KG-12.
                </p>
              </div>
            )}
          </div>
          {displayMode === "gallery" && (
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] 2xl:text-[38px] leading-[20px] 2xl:leading-[48px] -tracking-[0.02em] xl:-tracking-[0.02em] 2xl:-tracking-[0.76px] pl-2 md:pl-3">
              {text}
            </p>
          )}
        </div>
      ) : (
        <div
          className={cn(
            "flex flex-col md:flex-row max-md:items-end md:justify-end align-top gap-20 md:gap-3"
          )}
        >
          {displayMode === "gallery" && (
            <div className="flex flex-col gap-2 md:gap-3">
              <div className="relative">
                <Image
                  src={secondaryImage!}
                  alt="project-1"
                  width={0}
                  height={0}
                  style={{
                    width: screenSize !== "sm" ? `${8 * 4}vw` : "62.5vw",
                    height: displayMode === "gallery" ? "auto" : `320px`,
                  }}
                  unoptimized
                />
              </div>
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] 2xl:text-[38px] leading-[20px] 2xl:leading-[48px] -tracking-[0.02em] xl:-tracking-[0.02em] 2xl:-tracking-[0.76px]">
                {secondaryText}
              </p>
            </div>
          )}
          <div
            className={cn(
              "flex flex-col gap-2 md:gap-3",
              displayMode === "list" && "max-xl:w-full"
            )}
          >
            <div
              className={cn(
                "relative cursor-pointer",
                displayMode === "gallery"
                  ? "custom-shadow-left"
                  : "group max-xl:h-[110px] max-xl:flex max-xl:flex-row-reverse max-xl:p-2 md:py-0 max-xl:gap-[12.5vw] max-xl:justify-between h-[110px] md:h-[200px] xl:h-[320px] 2xl:h-[520px] max-h-[110px] md:max-h-[200px] xl:max-h-[320px] 2xl:max-h-[520px]"
              )}
              style={{
                width:
                  screenSize === "xl" || screenSize === "2xl"
                    ? calculatedWidth
                    : "100%",
              }}
            >
              <div className="relative max-xl:custom-shadow-left h-full">
                <div className="w-full h-full overflow-hidden">
                  <Image
                    src={mainImage}
                    alt="project-1"
                    width={0}
                    height={0}
                    style={{ width: calculatedWidth, height: "auto" }}
                    className={cn(displayMode !== "gallery" && "object-cover")}
                    unoptimized
                  />
                </div>
              </div>
              {displayMode === "list" && (
                <div className="xl:absolute xl:left-0 xl:top-0 w-full h-full xl:bg-white xl:opacity-0 transition-opacity xl:custom-shadow-right-no-margin xl:group-hover:opacity-100 flex md:flex-row-reverse xl:flex-col flex-col-reverse max-xl:justify-end">
                  <p className="font-apercu font-normal text-[14px] md:text-[28px] xl:text-[16px] 2xl:text-[32px] leading-[20px] md:leading-[32px] xl:leading-[20px] 2xl:leading-[40px] -tracking-[0.28px] md:-tracking-[0.56px] xl:-tracking-[0.02em] xl:pt-3 2xl:pt-6 md:pl-[calc(2*8.33vw)] xl:pl-0">
                    Живой паркинг. <br className="xl:hidden" />
                    <span className="opacity-30">Интерьеры, Москва 2024</span>
                  </p>
                  <p className="font-apercu font-normal text-[14px] md:text-[28px] 2xl:text-[32px] leading-[20px] md:leading-[32px] 2xl:leading-[40px] -tracking-[0.28px] md:-tracking-[0.56px] xl:-tracking-[0.02em] xl:mt-auto xl:pb-1">
                    KG-12.
                  </p>
                </div>
              )}
            </div>
            {displayMode === "gallery" && (
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] 2xl:text-[38px] leading-[20px] 2xl:leading-[48px] -tracking-[0.02em] xl:-tracking-[0.02em] 2xl:-tracking-[0.76px]">
                {text}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
