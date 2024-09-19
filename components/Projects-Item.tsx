import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";

export default function ProjectItem({
  type,
  mainImage,
  mainImageSize,
  secondaryImage,
  secondaryImageSize,
  text,
  secondaryText,
  displayMode,
  ...props
}: {
  type: "left" | "right";
  mainImage: StaticImageData;
  mainImageSize: [number, number];
  secondaryImage?: StaticImageData;
  secondaryImageSize?: [number, number];
  secondaryText?: string;
  text: string;
  displayMode: "gallery" | "list";
  className?: string; // Specify that className is a string
  [key: string]: unknown; // Keep unknown for other props
}) {
  return (
    <>
      {type === "left" ? (
        <div className={cn(props.className, "flex flex-col gap-3")}>
          <div
            className={cn(
              "relative cursor-pointer",
              displayMode === "gallery" ? "custom-shadow-right" : "group"
            )}
            style={{
              width: displayMode === "gallery" ? mainImageSize[0] : "100%",
              height: displayMode === "gallery" ? mainImageSize[1] : "320px",
              maxWidth: displayMode === "gallery" ? mainImageSize[0] : "320px",
              maxHeight: displayMode === "gallery" ? mainImageSize[1] : "320px",
            }}
          >
            <Image
              src={mainImage}
              alt="project-1"
              fill={displayMode === "gallery" ? true : false}
              width={displayMode === "gallery" ? undefined : 320}
              height={displayMode === "gallery" ? undefined : 320}
              className={cn(
                displayMode === "gallery"
                  ? ""
                  : "w-[320px] h-auto max-h-[320px] object-cover"
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
            props.className,
            "flex flex-row justify-end align-top gap-3"
          )}
        >
          {displayMode === "gallery" && (
            <div className="flex flex-col gap-3">
              <div
                className="relative"
                style={{
                  width: secondaryImageSize![0],
                  height: secondaryImageSize![1],
                }}
              >
                <Image src={secondaryImage!} alt="project-1" fill />
              </div>
              <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                {secondaryText}
              </p>
            </div>
          )}
          <div className="flex flex-col gap-3">
            <div
              className={cn(
                "relative cursor-pointer",
                displayMode === "gallery" ? "custom-shadow-left" : "group"
              )}
              style={{
                width: displayMode === "gallery" ? mainImageSize[0] : "100%",
                height: displayMode === "gallery" ? mainImageSize[1] : "320px",
                maxWidth:
                  displayMode === "gallery" ? mainImageSize[0] : "320px",
                maxHeight:
                  displayMode === "gallery" ? mainImageSize[1] : "320px",
              }}
            >
              <Image
                src={mainImage}
                alt="project-1"
                fill={displayMode === "gallery" ? true : false}
                width={displayMode === "gallery" ? undefined : 320}
                className={cn(
                  displayMode === "gallery"
                    ? ""
                    : "w-[320px] h-auto max-h-[320px] object-cover"
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
