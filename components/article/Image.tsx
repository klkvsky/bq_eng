import Image from "next/image";

export function ArticleImage({
  src,
  type,
  subtext,
  secondaryImage,
}: {
  src: string;
  type: "left" | "right" | "full" | "center";
  subtext?: string | null;
  secondaryImage?: string | null;
}) {
  return (
    <div className="w-full">
      {type === "left" && (
        <div className="flex flex-col gap-2 xl:gap-3 items-start w-full">
          <div className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto relative custom-shadow-right">
            <Image
              src={src}
              alt={"placeholder"}
              width={0}
              height={0}
              className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto"
              unoptimized
            />
          </div>
          {subtext && (
            <p className="font-spectral font-normal text-[14px] md:text-[16px] leading-[20px] -tracking-[0.28px] md:-tracking-[0.02em] opacity-30 pl-2 md:pl-3 w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
              {subtext}
            </p>
          )}
        </div>
      )}
      {type === "right" && (
        <div className="flex flex-col gap-2 xl:gap-3 items-end w-full">
          <div className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto relative custom-shadow-left">
            <Image
              src={src}
              alt="Placeholder"
              width={0}
              height={0}
              unoptimized
              className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto"
            />
          </div>
          {subtext && (
            <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30 pr-2 md:pr-3 w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
              {subtext}
            </p>
          )}
        </div>
      )}
      {type === "full" && (
        <div className="flex flex-col gap-2 xl:gap-3 items-center w-full">
          {secondaryImage && (
            <Image
              src={secondaryImage}
              alt="Placeholder"
              width={0}
              height={0}
              unoptimized
              className="w-[calc(6*8.33vw)] h-auto"
            />
          )}
          <div className="w-full h-auto">
            <Image
              src={src}
              alt="Placeholder"
              width={0}
              height={0}
              unoptimized
              className="w-full h-auto"
            />
          </div>
        </div>
      )}
      {type === "center" && (
        <div className="w-full h-auto flex justify-center items-center">
          <div className="w-[calc(6*8.33vw)] h-full relative custom-shadow-left">
            <Image
              src={src}
              alt="Placeholder"
              width={0}
              height={0}
              unoptimized
              className="w-[calc(6*8.33vw)] h-auto"
            />
          </div>
        </div>
      )}
    </div>
  );
}
