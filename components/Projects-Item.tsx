import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import { useScreenSize } from "@/lib/hooks/useScreenSize";

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
  return (
    <>
      {type === "left" ? (
        <div className="flex flex-col gap-3">
          <div
            className={cn(
              "relative cursor-pointer",
              displayMode === "gallery"
                ? "custom-shadow-right"
                : "group h-[320px]"
            )}
            style={{
              width:
                displayMode === "gallery"
                  ? screenSize !== "sm"
                    ? `${8 * cols}vw`
                    : "87.5vw"
                  : `320px`,
            }}
          >
            <Image
              src={mainImage}
              alt="project-1"
              width={0}
              height={0}
              style={{
                width:
                  displayMode === "gallery"
                    ? screenSize !== "sm"
                      ? `${8 * cols}vw`
                      : "87.5vw"
                    : `320px`,
                height: displayMode === "gallery" ? "auto" : `auto`,
              }}
              className={cn(
                displayMode !== "gallery" &&
                  "w-[320px] h-auto max-h-[320px] object-cover"
              )}
            />
            {displayMode === "list" && (
              <div className="absolute left-0 top-0 w-full h-full bg-white opacity-0 transition-opacity custom-shadow-right-no-margin group-hover:opacity-100 flex flex-col">
                <p className=" font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] pt-3">
                  Живой паркинг.
                  <span className="opacity-30">Интерьеры, Москва 2024</span>
                </p>
                <p className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] mt-auto pb-1">
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
            "flex flex-col md:flex-row max-sm:items-end md:justify-end align-top gap-20 lg:gap-3"
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
          <div className="flex flex-col gap-2 lg:gap-3">
            <div
              className={cn(
                "relative cursor-pointer",
                displayMode === "gallery"
                  ? "custom-shadow-left"
                  : "group h-[320px]"
              )}
            >
              <Image
                src={mainImage}
                alt="project-1"
                width={0}
                height={0}
                style={{
                  width:
                    displayMode === "gallery"
                      ? screenSize !== "sm"
                        ? `${8 * cols}vw`
                        : "87.5vw"
                      : `320px`,
                  height: displayMode === "gallery" ? "auto" : `auto`,
                }}
                className={cn(
                  displayMode !== "gallery" &&
                    "w-[320px] h-auto max-h-[320px] object-cover"
                )}
              />

              {displayMode === "list" && (
                <div className="absolute left-0 top-0 w-full h-full bg-white opacity-0 transition-opacity custom-shadow-right-no-margin group-hover:opacity-100 flex flex-col">
                  <p className=" font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] pt-3">
                    Живой паркинг.
                    <span className="opacity-30">Интерьеры, Москва 2024</span>
                  </p>
                  <p className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] mt-auto pb-1">
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
