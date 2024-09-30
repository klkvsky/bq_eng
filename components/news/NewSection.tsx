import { NewsItem } from "./NewsItem";
export function NewsSection({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    date: string;
    source: string;
  }[];
}): React.ReactNode {
  return (
    <div className="flex flex-col">
      <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] p-2 md:p-3 xl:pb-3 md:pt-0 xl:px-0 xl:pl-3">
        {title} →
      </p>
      <div className="flex flex-col gap-8 md:gap-10">
        {items.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}