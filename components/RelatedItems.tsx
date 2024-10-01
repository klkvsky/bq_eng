import { cn } from "@/lib/utils";
import { Article, Project } from "./home/types";
import Image from "next/image";
import Link from "next/link";

export default function RelatedItems({
  title,
  items,
}: {
  title: string;
  items: Article[] | Project[];
}) {
  const getArticleType = (type: string) => {
    switch (type) {
      case "research":
        return "Исследование";
      case "expedition":
        return "Экспедиция";
      case "digest":
        return "Дайджест";
      case "podcast":
        return "Подкаст";
      case "gallery":
        return "Галерея";
      case "press-release":
        return "Пресс-релиз";
      default:
        return "";
    }
  };

  const linkURL = (item: Article | Project) => {
    if ("type" in item) {
      const baseUrl = item.type === "press-release" ? "/news" : "/knowledge";
      return `${baseUrl}?article=${item.slug.current}`;
    } else {
      return `/?project=${item.slug.current}`;
    }
  };

  return (
    <div className="flex flex-col w-full mt-14">
      <p className="font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] pl-3 w-full border-b border-[#E7E9EF] pb-3">
        {title}
      </p>
      <div className="flex flex-row w-full lg:gap-10 xl:gap-14 my-10 xl:my-20 max-w-[100%] lg:overflow-hidden max-lg:overflow-scroll max-lg:snap-x max-lg:snap-mandatory max-lg:no-scrollbar max-md:gap-20 max-xl:gap-0 xl:justify-center">
        {items.map(
          (item, index) =>
            item.image && (
              <Link
                href={linkURL(item)}
                key={index}
                className={cn(
                  "max-md:w-screen max-md:min-w-[100vw] md:min-w-[calc(6*8.33vw)] max-xl:flex max-xl:flex-col max-xl:justify-center max-xl:items-center xl:min-w-[calc(2*8.33vw)] xl:w-[calc(2*8.33vw)] xl:aspect-[5/6] relative group cursor-pointer max-lg:snap-center max-lg:snap-always max-xl:gap-2",
                  index === 0 && "max-md:ml-10",
                  index === items.length - 1 && "max-md:mr-10"
                )}
              >
                <Image
                  src={item.image?.asset.url}
                  width={0}
                  height={0}
                  alt={item.description || item.title}
                  className="xl:w-[calc(2*8.33vw)] max-md:w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] h-auto object-cover xl:max-h-[360px] xl:overflow-hidden"
                  unoptimized
                />
                <div className="xl:absolute xl:left-0 xl:top-0 w-full h-full xl:bg-white xl:opacity-0 transition-opacity xl:custom-shadow-right-no-margin xl:group-hover:opacity-100 flex flex-col font-apercu font-normal text-[14px] xl:text-[16px] 2xl:text-[32px] leading-[20px] xl:leading-[20px] 2xl:leading-[40px] -tracking-[0.28px] xl:-tracking-[0.02em] xl:pt-3 2xl:pt-6 max-md:w-[calc(6*12.5vw)] max-xl:w-[calc(3*8.33vw)]">
                  <p className="block opacity-30">
                    {getArticleType("type" in item ? item.type : "digest")}
                    {"date" in item && item.date && (
                      <span className="ml-1 xl:hidden">
                        {new Date(item.date).toLocaleDateString("ru-RU")}
                      </span>
                    )}
                  </p>
                  <p>
                    {item.title} <br className="xl:hidden" />
                    <span className="opacity-30">
                      {"categories" in item &&
                        item.categories &&
                        item.categories
                          .map((cat: { name: string }) => cat.name)
                          .join(", ")}
                    </span>
                  </p>
                  <p
                    className={cn(
                      "xl:mt-auto xl:pb-3",
                      "projectCodeName" in item &&
                        item.projectCodeName &&
                        "xl:hidden"
                    )}
                  >
                    {"projectCodeName" in item && item.projectCodeName}
                    {"date" in item && item.date && (
                      <span className="opacity-30 hidden xl:block">
                        {new Date(item.date).toLocaleDateString("ru-RU")}
                      </span>
                    )}
                  </p>
                </div>
              </Link>
            )
        )}
      </div>
    </div>
  );
}
