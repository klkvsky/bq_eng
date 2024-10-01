import { Article } from "@/components/home/types";

export function NewsItem({ item }: { item: Article }): React.ReactNode {
  return (
    <div className="flex flex-col gap-0 border-t border-[#E7E9EF] p-2 md:p-3">
      <p className="font-apercu font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-6 md:leading-7 xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] opacity-30 xl:opacity-100">
        {item.source}{" "}
        <span className="xl:opacity-30">
          {new Date(item.date).toLocaleDateString("ru-RU")}
        </span>
      </p>
      <p className="font-spectral font-normal text-[20px] xl:text-[28px] leading-6 xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
        {item.title}
      </p>
    </div>
  );
}
