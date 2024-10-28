import { Metadata } from "next";

import Image from "next/image";
import PageTitle from "@/components/PageTitle";

import { getCultureData, getPositions } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";

import CultureTeam from "./CultureTeam";
import RelatedItems from "@/components/RelatedItems";
import { Link } from "next-view-transitions";

export const metadata: Metadata = {
  title: "Культура | BQ",
};

export default async function Home() {
  const data = await getCultureData();

  return (
    <div className="flex flex-col md:max-xl:pb-20">
      <Image
        src={urlFor(data.heroImage.asset.url).url()}
        alt="project-1"
        width={0}
        height={0}
        className="-mt-[44px] 2xl:-mt-[104px] z-10 w-screen object-cover object-center xl:h-screen"
        unoptimized
      />
      <div className="mt-4 md:mt-6">
        <PageTitle title={data.pageTitle} categories={[]} />
      </div>
      {data.content.map((item, index) => (
        <div key={index}>
          {item.type === "columns" && (
            <Columns
              columns={item.columns?.columnContent || []}
              width={item.columns?.width || "full"}
            />
          )}
          {item.type === "teamBlock" && (
            <CultureTeam
              title={item.teamBlock?.title || ""}
              team={item.teamBlock?.teamMembers || []}
            />
          )}
          {item.type === "text" && <CultureText text={item.text || ""} />}
          {item.type === "image" && (
            <CultureImage
              src={urlFor(item.image?.asset.url || "").url()}
              caption={item.imageCaption || ""}
              position={item.imagePosition || "full"}
            />
          )}
        </div>
      ))}
      <RelatedItems title="Знания BQ Studio" items={data.relatedArticles} />
    </div>
  );
}

function CultureText({ text }: { text: string }) {
  return (
    <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] px-3 mt-20 md:mt-40 max-xl:relative max-xl:pt-4 2xl:text-[86.4px] 2xl:leading-[100.8px] 2xl:-tracking-[2.592px]">
      <div className="absolute top-0 left-0 w-1/2 max-xl:custom-shadow-top" />
      {text}
    </h1>
  );
}

function CultureImage({
  src,
  caption,
  position,
}: {
  src: string;
  caption: string;
  position: "right" | "left" | "full" | "center";
}) {
  return (
    <div
      className={cn(
        "flex flex-col xl:flex-row xl:items-end xl:justify-end mt-8 md:mt-6 xl:mt-[80px]",
        position === "left" && "xl:items-start xl:justify-start",
        position === "right" && "xl:items-end xl:justify-end",
        position === "full" && "xl:items-center xl:justify-center",
        position === "center" && "xl:items-center xl:justify-center"
      )}
    >
      <div className="flex flex-col items-end">
        <div className="xl:relative xl:custom-shadow-left w-full xl:w-[calc(9*8.33vw-12px)] h-auto">
          <Image
            src={urlFor(src).url()}
            alt="project-1"
            width={0}
            height={0}
            className={cn(
              "w-full h-auto",
              (position === "left" || position === "right") &&
                "xl:w-[calc(9*8.33vw)]",
              position === "full" && "xl:w-full",
              position === "center" && "xl:w-[calc(6*8.33vw)]"
            )}
            unoptimized
          />
        </div>
        {caption && (
          <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] px-2 xl:pr-3 xl:pl-0 mt-8 xl:mt-6 w-full xl:w-[calc(9*8.33vw-12px)] 2xl:text-[86.4px] 2xl:leading-[100.8px] 2xl:-tracking-[2.592px]">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

async function Columns({
  columns,
  width,
}: {
  columns: Array<{
    title: string;
    items: Array<{
      type: "regular" | "email";
      text: string;
      email?: string;
    }>;
  }>;
  width: "full" | "short";
}) {
  const [firstColumn, ...restColumns] = columns;

  const positions = await getPositions();

  return (
    <div
      className={cn(width === "short" && "w-full flex flex-row justify-end")}
    >
      <div
        className={cn(
          width === "full"
            ? "flex flex-col md:flex-row xl:justify-between mt-8 md:mt-10 xl:mt-20 px-2 xl:pl-3 max-md:gap-4 md:gap-[calc(0.9*8.33vw)] xl:pr-[calc(0.5*8.33vw)] "
            : "flex flex-col  md:flex-row px-2 md:px-3 xl:pl-0 mt-8 md:mt-20 w-full xl:w-[calc(9*8.33vw-12px)] gap-4 md:gap-[calc(0.9*8.33vw)] xl:gap-[calc(0.5*8.33vw)] xl:pr-[calc(0.5*8.33vw)]"
        )}
      >
        <div className="flex flex-col gap-2 md:gap-3 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)] ">
          <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
            {firstColumn.title}
          </p>
          {firstColumn.items.map((item, index) => (
            <p
              key={index}
              className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] 2xl:text-[68px] 2xl:leading-[76px] 2xl:-tracking-[1.36px]"
            >
              {item.type === "email" ? (
                <>
                  {item.text}{" "}
                  <a
                    href={`mailto:${item.email}`}
                    className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 transition-opacity duration-500"
                  >
                    {item.email}
                  </a>
                </>
              ) : (
                item.text
              )}
            </p>
          ))}

          {firstColumn.title === "Вакансии" &&
            positions &&
            positions.length > 0 && (
              <div className="flex flex-col gap-2 md:gap-3 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)] xl:mt-10">
                <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                  {positions.length} open position{positions.length === 1 ? "" : "s"}
                </p>
                <div className="flex flex-col gap-0">
                  {positions.map((position) => (
                    <Link
                      href={position.link}
                      target="_blank"
                      key={position.title}
                      className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] hover:opacity-30 transition-opacity duration-500 group 2xl:text-[68px] 2xl:leading-[76px] 2xl:-tracking-[1.36px]"
                    >
                      {position.title}
                      <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        ↗
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            )}
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 md:gap-6 xl:gap-10 w-full",
            width === "full" ? "md:w-[calc(4*8.33vw)]" : "md:w-[calc(6*8.33vw)]"
          )}
        >
          {restColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-3">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]  2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                {column.title}
              </p>
              {column.items.length > 0 && (
                <p
                  className={cn(
                    "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] 2xl:text-[68px] 2xl:leading-[76px] 2xl:-tracking-[1.36px]"
                  )}
                >
                  {column.items[0].text}
                </p>
              )}
              {column.items.length > 1 && (
                <div className="flex flex-col gap-0 mt-4">
                  {column.items.slice(1).map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className={cn(
                        "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] 2xl:text-[68px] 2xl:leading-[76px] 2xl:-tracking-[1.36px]"
                      )}
                    >
                      {item.text}
                    </p>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
