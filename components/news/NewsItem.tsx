import { Article } from "@/components/home/types";
import { cn } from "@/lib/utils";

export function NewsItem({ item }: { item: Article }): React.ReactNode {
  return (
    <div
      className={cn(
        "flex flex-col gap-0 border-t border-[#E7E9EF] p-2 md:p-3",
        item.type === "press-release" &&
          item.pressReleaseCategory === "magazines"
          ? "flex flex-col"
          : "flex flex-col-reverse gap-1.5"
      )}
    >
      <p className="font-apercu font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-6 md:leading-7 xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] opacity-30 xl:opacity-100  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
        {item.type === "press-release" &&
          item.pressReleaseCategory === "magazines" &&
          item.source &&
          item.source}{" "}
        <span className="xl:opacity-30">
          {new Date(item.date).toLocaleDateString("en-US")}
        </span>
      </p>
      <p className="font-spectral font-normal text-[20px] xl:text-[28px] leading-6 xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em] 2xl:text-[42px] 2xl:leading-[58px] 2xl:-tracking-[0.84px]">
        {item.title}
      </p>
    </div>
  );
}
