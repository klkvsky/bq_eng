import { cn } from "@/lib/utils";
import { getContactsData, getPositions } from "@/lib/sanity";

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
    <div className="flex flex-col min-h-[75vh]">
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
                  {item.text} <br />
                  <a
                    href={`mailto:${item.email}`}
                    className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 duration-500"
                  >
                    {item.email}
                  </a>
                </>
              ) : (
                item.text
              )}
            </p>
          ))}
          {openPositionsColumn && (
            <>
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] mt-4 mb-3">
                {openPositionsColumn.title}
              </p>
              {openPositionsColumn.items.map((item, index) => (
                <p
                  key={index}
                  className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] -mt-3 group"
                >
                  {item.type === "link" ? (
                    <a
                      href={item.link}
                      className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 duration-500"
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
            </>
          )}
        </div>

        <div
          className={cn(
            "flex flex-col gap-4 md:gap-6 xl:gap-10 w-full",
            width === "full" ? "md:w-[calc(5*8.33vw)]" : "md:w-[calc(6*8.33vw)]"
          )}
        >
          {otherColumns.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-col gap-2 md:gap-3">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                {column.title}
              </p>
              {column.items.length > 0 && (
                <p
                  className={cn(
                    "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] mb-[24px]"
                  )}
                >
                  {column.items[0].type === "email" ? (
                    <>
                      {column.items[0].text} <br />
                      <a
                        href={`mailto:${column.items[0].email}`}
                        className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 duration-500"
                      >
                        {column.items[0].email}
                      </a>
                    </>
                  ) : column.items[0].type === "link" ? (
                    <a
                      href={column.items[0].link}
                      className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 duration-500 group"
                    >
                      {column.items[0].text}{" "}
                      <span className="opacity-0 group-hover:opacity-100 duration-500 transition-opacity font-spectral">
                        ↗
                      </span>
                    </a>
                  ) : (
                    column.items[0].text
                  )}
                </p>
              )}
              {column.items.length > 1 && (
                <div
                  className={cn(
                    "flex flex-col gap-0 md:gap-[24px]",
                    column.items[0].type === "email" ||
                      column.items[0].type === "link"
                      ? "-mt-3"
                      : "mt-4"
                  )}
                >
                  {column.items.slice(1).map((item, itemIndex) => (
                    <p
                      key={itemIndex}
                      className={cn(
                        "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] mt-2"
                        , item.type === "link" && "-translate-y-[24px]"
                      )}
                    >
                      {item.type === "email" ? (
                        <>
                          {item.text} <br />
                          <a
                            href={`mailto:${item.email}`}
                            className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 duration-500"
                          >
                            {item.email}
                          </a>
                        </>
                      ) : item.type === "link" ? (
                        <a
                          href={item.link}
                          className="font-spectral xl:font-apercu opacity-100 xl:opacity-30 hover:opacity-100 duration-500 group"
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
