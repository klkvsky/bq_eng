export function ArticleText({
  text,
  title,
  type,
}: {
  text: string;
  title?: string;
  type?: "left" | "right" | "center";
}) {
  return (
    <>
      {type === "center" && (
        <div className="flex flex-col gap-4 md:gap-3 xl:gap-6 max-md:px-2 w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
          {title && (
            <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] md:-tracking-“0.34px] xl:-tracking-[0.02em] opacity-30">
              {title}
            </p>
          )}
          <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-5 xl:leading-[24px] -tracking-[0.34px] xl:-tracking-[0.02em] whitespace-pre-wrap w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
            {text}
          </p>
        </div>
      )}
      {type === "left" && (
        <div className="w-full flex flex-col align-start">
          <p className="font-spectral font-normal text-[17px] xl:text-[28px] leading-5 xl:leading-[32px] -tracking-[0.34px] xl:-tracking-[0.56px] whitespace-pre-wrap w-full md:w-[calc(6*8.33vw)] xl:w-[calc(9*8.33vw)] -mt-[136px]">
            {text}
          </p>
        </div>
      )}
      {type === "right" && (
        <div className="w-full flex flex-col items-end">
          <p className="font-spectral font-normal text-[17px] xl:text-[28px] leading-5 xl:leading-[32px] -tracking-[0.34px] xl:-tracking-[0.56px] whitespace-pre-wrap w-full md:w-[calc(6*8.33vw)] xl:w-[calc(9*8.33vw)] -mt-[136px]">
            {text}
          </p>
        </div>
      )}
    </>
  );
}
