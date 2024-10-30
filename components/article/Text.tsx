import React from "react";

import { PortableText, PortableTextComponents } from "@portabletext/react";
import { TypedObject } from "@portabletext/types";
import { cn } from "@/lib/utils";

export function ArticleText({
  text,
  title,
  type,
}: {
  text: TypedObject | TypedObject[] | string;
  title?: string;
  type?: "left" | "right" | "center";
}) {
  const portableTextComponents: PortableTextComponents = {
    block: {
      normal: ({ children }: { children?: React.ReactNode }) => (
        <p className="mb-4">{children}</p>
      ),
    },
  };

  const renderContent = () => {
    if (Array.isArray(text)) {
      return <PortableText value={text} components={portableTextComponents} />;
    } else if (typeof text === "string") {
      return text.split("\n").map((line, index) => (
        <React.Fragment key={index}>
          {line}
          {index < text.split("\n").length - 1 && <br />}
        </React.Fragment>
      ));
    } else {
      return <p>{JSON.stringify(text)}</p>;
    }
  };

  const contentWrapper = <div>{renderContent()}</div>;

  return (
    <>
      {type === "center" && (
        <div className="flex flex-col gap-4 max-md:px-2 w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)] 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
          {title && (
            <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] md:-tracking-[0.34px] xl:-tracking-[0.02em] opacity-30 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]">
              {title}
            </p>
          )}
          {contentWrapper}
        </div>
      )}
      {type === "left" && (
        <div className="w-full flex flex-col align-start">
          <div className="font-spectral font-normal text-[17px] xl:text-[28px] leading-5 xl:leading-[32px] -tracking-[0.34px] xl:-tracking-[0.56px] w-full md:w-[calc(6*8.33vw)] xl:w-[calc(9*8.33vw)] -mt-10 xl:-mt-[136px] px-2 xl:px-3 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]">
            {contentWrapper}
          </div>
        </div>
      )}
      {type === "right" && (
        <div className="w-full flex flex-col items-end">
          <div
            className={cn(
              "font-spectral font-normal text-[17px] md:text-[24px] xl:text-[28px] leading-5 md:leading-[28px] xl:leading-[32px] -tracking-[0.34px] md:-tracking-[0.48px] xl:-tracking-[0.56px] w-full xl:w-[calc(9*8.33vw)] -mt-10 xl:-mt-[136px] 2xl:-mt-[90px] px-2 xl:px-3 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]"
            )}
          >
            {contentWrapper}
          </div>
        </div>
      )}
    </>
  );
}
