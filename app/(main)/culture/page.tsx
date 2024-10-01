import Image from "next/image";
import PageTitle from "@/components/PageTitle";

import { getCultureData } from "@/lib/sanity";
import { urlFor } from "@/lib/sanity";
import { cn } from "@/lib/utils";

import { TeamMember } from "@/components/home/types";
import RelatedItems from "@/components/RelatedItems";

export default async function Home() {
  const data = await getCultureData();

  return (
    <div className="flex flex-col">
      <Image
        src={urlFor(data.heroImage.asset.url).url()}
        alt="project-1"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        className="-mt-[44px] z-10"
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

function CultureTeam({
  title,
  team,
}: {
  title: string;
  team: Array<TeamMember>;
}) {
  return (
    <div className="flex flex-col xl:flex-row xl:items-end xl:justify-end mt-[100px]">
      <div className="flex flex-col gap-8 xl:gap-10 items-center xl:justify-center max-xl:custom-shadow-top xl:custom-shadow-left relative px-2 pt-4 md:pt-3 xl:py-[200px] w-full xl:w-[calc(9*8.33vw)]">
        <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] xl:absolute xl:left-[12px] xl:top-[20px] max-xl:mr-auto">
          {title}
        </p>
        <div className="relative w-full">
          <div className="w-40 h-full bg-gradient-to-r from-white absolute top-0 left-0 z-50" />
          <div className="w-40 h-full bg-gradient-to-l from-white absolute top-0 right-0 z-50" />
          <div className="flex flex-row w-full max-h-full overflow-scroll snap-x snap-mandatory no-scrollbar z-40">
            {team.map((member, index) => (
              <div
                className="snap-center flex flex-col items-center gap-8  xl:gap-10 min-w-full"
                key={index}
              >
                <h1 className="font-spectral font-normal text-[20px] md:text-[28px] 2xl:text-[38px] leading-[24px] md:leading-[32px] 2xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] 2xl:-tracking-[0.03em] text-center md:w-[calc(10*8.33vw)] xl:w-[calc(7*8.33vw)]">
                  <span className="font-apercu opacity-30">{member.name}</span>{" "}
                  <br />
                  <span className="font-apercu opacity-30">
                    {member.position}
                  </span>{" "}
                  {member.quote}
                </h1>

                <Image
                  src={urlFor(member.image?.asset.url || "").url()}
                  alt="project-1"
                  width={0}
                  height={0}
                  className="aspect-[253/320] w-[calc(4*12.5vw)] md:w-[calc(4*8.33vw)] h-auto relative"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>

        {/* <div className="flex flex-row gap-1.5">
        <div className="w-2 h-2 rounded-full bg-black" />
        <div className="w-2 h-2 rounded-full bg-black opacity-30" />
        <div className="w-2 h-2 rounded-full bg-black opacity-30" />
        <div className="w-2 h-2 rounded-full bg-black opacity-30" />
      </div> */}
      </div>
    </div>
  );
}

function CultureText({ text }: { text: string }) {
  return (
    <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] px-3 mt-20 md:mt-40 max-xl:relative max-xl:pt-4 max-xl:custom-shadow-botton">
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
        <div className="xl:relative xl:custom-shadow-left w-full xl:w-[calc(9*8.33vw)] h-auto">
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
          <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] px-2 xl:pr-3 xl:pl-0 mt-8 xl:mt-6 w-full xl:w-[calc(9*8.33vw)]">
            {caption}
          </p>
        )}
      </div>
    </div>
  );
}

function Columns({
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

  return (
    <div
      className={cn(width === "short" && "w-full flex flex-row justify-end")}
    >
      <div
        className={cn(
          width === "full"
            ? "flex flex-col md:flex-row xl:justify-between mt-8 md:mt-10 xl:mt-20 px-2 xl:pl-3 max-md:gap-4 md:gap-[8.33vw] xl:pr-[calc(0.5*8.33vw)]"
            : "flex flex-col  md:flex-row px-2 md:px-3 xl:pl-0 mt-8 md:mt-20 w-full xl:w-[calc(9*8.33vw)] gap-4 md:gap-[calc(8.33vw)] xl:gap-[calc(2*8.33vw)] xl:pr-[calc(0.5*8.33vw)]"
        )}
      >
        <div className="flex flex-col gap-2 md:gap-3 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)]">
          <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
            {firstColumn.title}
          </p>
          {firstColumn.items.map((item, index) => (
            <p
              key={index}
              className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]"
            >
              {item.type === "email" ? (
                <>
                  {item.text}{" "}
                  <a
                    href={`mailto:${item.email}`}
                    className="font-spectral xl:font-apercu opacity-100 xl:opacity-30"
                  >
                    {item.email}
                  </a>
                </>
              ) : (
                item.text
              )}
            </p>
          ))}
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 md:gap-6 xl:gap-10 w-full",
            width === "full" ? "md:w-[calc(5*8.33vw)]" : "md:w-[calc(6*8.33vw)]"
          )}
        >
          {restColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-3">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                {column.title}
              </p>
              {column.items.length > 0 && (
                <p
                  className={cn(
                    "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]"
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
                        "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]"
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
