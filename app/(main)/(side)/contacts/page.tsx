import { Metadata } from "next";

import { cn } from "@/lib/utils";
import { getContactsData, getPositions } from "@/lib/sanity";

export const metadata: Metadata = {
  title: "Контакты | BQ",
};

export default async function Contacts() {
  const data = await getContactsData();
  const positions = await getPositions();

  // Add positions to data.columns at index 1
  const updatedColumns =
    positions.length > 0
      ? [
          data.columns[0],
          {
            title: "Открытые позиции",
            items: positions.map((position) => ({
              type: "link",
              text: position.title,
              link: position.link,
            })),
          },
          ...data.columns.slice(1),
        ]
      : data.columns;

  return (
    <div className="flex flex-col min-h-screen md:min-h-[calc(100vh-170px)] xl:min-h-[calc(100vh-250px)]">
      <h1 className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] p-2 md:pl-3 md:py-0">
        {data.pageTitle}
      </h1>

      <Columns
        columns={
          updatedColumns as Array<{
            title: string;
            items: Array<{
              type: "link" | "regular" | "email";
              text: string;
              email?: string;
              link?: string;
            }>;
          }>
        }
        width={data.width}
      />
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
      type: "regular" | "email" | "link";
      text: string;
      email?: string;
      link?: string;
    }>;
  }>;
  width: "full" | "short";
}) {
  const [firstColumn, ...restColumns] = columns;
  const openPositionsColumn = restColumns.find(
    (column) => column.title === "Открытые позиции"
  );
  const otherColumns = restColumns.filter(
    (column) => column.title !== "Открытые позиции"
  );

  return (
    <div
      className={cn(width === "short" && "w-full flex flex-row justify-end")}
    >
      <div
        className={cn(
          width === "full"
            ? "flex flex-col md:flex-row xl:justify-between mt-8 md:mt-10 xl:mt-20 px-2 md:px-3 xl:pr-[calc(0.5*8.33vw)] xl:pl-3 gap-[16px] md:gap-[calc(1.85*8.33vw)] w-full xl:w-[calc(9*8.33vw)] xl:gap-[calc(0.5*8.33vw-12px)]"
            : "flex flex-col  md:flex-row px-2 md:px-3 xl:pl-0 mt-8 md:mt-20 w-full xl:w-[calc(9*8.33vw)] gap-4 md:gap-[calc(8.33vw)] xl:gap-[calc(2*8.33vw)] xl:pr-[calc(0.5*8.33vw)]"
        )}
      >
        <div className="flex flex-col w-full md:w-[calc(4*8.33vw)] xl:w-[calc(4*8.33vw)] gap-4 md:gap-8">
          <div className="flex flex-col w-full gap-2 md:gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
              {firstColumn.title}
            </p>
            {firstColumn.items.map((item, index) => (
              <p
                key={index}
                className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] "
              >
                {item.type === "email" ? (
                  <>
                    {item.text} <br />
                    <a
                      href={`mailto:${item.email}`}
                      className="font-apercu opacity-30 hover:opacity-100 duration-500"
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
          {openPositionsColumn && (
            <div className="flex flex-col w-full">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                {openPositionsColumn.title}
              </p>
              {openPositionsColumn.items.map((item, index) => (
                <p
                  key={index}
                  className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] group"
                >
                  {item.type === "link" ? (
                    <a
                      href={item.link}
                      className="font-apercu opacity-30 hover:opacity-100 duration-500"
                    >
                      {item.text}{" "}
                      <span className="opacity-0 group-hover:opacity-100 duration-500 transition-opacity font-spectral">
                        ↗
                      </span>
                    </a>
                  ) : (
                    item.text
                  )}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 md:gap-6 xl:gap-10",
            width === "full"
              ? "w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]"
              : "w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]"
          )}
        >
          {otherColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-3">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                {column.title}
              </p>
              {column.items.length > 0 && (
                <div className="flex flex-col gap-4 xl:gap-6">
                  {column.items.map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className={cn(
                        "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]",
                        item.type === "link" &&
                          itemIndex !== 0 &&
                          "-mt-4 xl:-mt-6"
                      )}
                    >
                      {item.type === "email" ? (
                        <>
                          {item.text} <br />
                          <a
                            href={`mailto:${item.email}`}
                            className="font-apercu opacity-30 hover:opacity-100 duration-500 "
                          >
                            {item.email}
                          </a>
                        </>
                      ) : item.type === "link" ? (
                        <a
                          href={item.link}
                          className="font-apercu opacity-30 hover:opacity-100 duration-500 group"
                        >
                          {item.text}{" "}
                          <span className="opacity-0 group-hover:opacity-100 duration-500 transition-opacity font-spectral">
                            ↗
                          </span>
                        </a>
                      ) : (
                        item.text
                      )}
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
