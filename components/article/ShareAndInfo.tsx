"use client";

import { cn } from "@/lib/utils";

export function ArticleShareAndInfo({
  date,
  type,
}: {
  date: string;
  type: "press-release" | "research" | "digest" | "gallery";
}) {
  return (
    <div
      className={cn(
        "flex flex-row md:flex-col gap-2 md:gap-3 md:absolute md:left-3 max-md:items-start max-md:w-full max-md:p-2 font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]",
        type === "press-release" ? "md:top-52" : "md:top-0",
      )}
    >
      <div className="flex flex-col gap-1 w-[calc(3*12.5vw)] md:w-[unset]">
        <p className="font-spectral">Date:</p>
        <p className="font-apercu opacity-30">{date}</p>
      </div>
      <div className="flex flex-col gap-1 items-start">
        <p className="font-spectral">Share:</p>
        <button
          className="font-apercu opacity-30  hover:opacity-100 transition-opacity"
          onClick={() => {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
          }}
        >
          Copy link
        </button>
        <button
          className="font-apercu opacity-30  hover:opacity-100 transition-opacity"
          onClick={() => {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
            // open telegram share dialog
            window.open(`https://t.me/share/url?url=${url}`, "_blank");
          }}
        >
          Telegram
        </button>
        <button
          className="font-apercu opacity-30 hover:opacity-100 transition-opacity"
          onClick={() => {
            const url = window.location.href;
            navigator.clipboard.writeText(url);
            // open telegram share dialog
            window.open(`https://vk.com/share.php?url=${url}`, "_blank");
          }}
        >
          VK
        </button>
      </div>
    </div>
  );
}
