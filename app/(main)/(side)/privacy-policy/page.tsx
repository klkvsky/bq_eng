import { ArticleText } from "@/components/article/Text";
import { getPrivacyPolicy } from "@/lib/sanity";

export default async function PrivacyPolicyPage() {
  const data = await getPrivacyPolicy();
  return (
    <div className="pt-[44px] flex flex-col items-center gap-10 xl:gap-20 pb-20">
      {data.content.map((item, index) => {
        if (item.type === "text") {
          return (
            <ArticleText
              key={index}
              title={item.textTitle || ""}
              text={item.text || ""}
              type="center"
            />
          );
        } else if (item.type === "list") {
          return (
            <ArticleList
              key={index}
              title={item.listTitle || ""}
              pretext={item.pretext || ""}
              list={item.list || []}
              posttext={item.posttext || ""}
            />
          );
        } else if (item.type === "title") {
          return (
            <ArticleTitle
              key={index}
              title={item.title || ""}
              subtitle={item.subtitle || ""}
            />
          );
        }
        return null;
      })}
    </div>
  );
}

function ArticleTitle({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) {
  return (
    <div
      className="font-normal text-[20px] md:text-[32px] xl:text-[38px] leading-[24px] md:leading-[36px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.96px] xl:-tracking-[0.03em] text-center w-[calc(6*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(7*8.33vw)] max-xl:text-left max-xl:w-full max-xl:px-2"
      id="article-page"
    >
      <p className="font-spectral xl:font-apercu">{title}</p>
      <p className="font-spectral">{subtitle}</p>
    </div>
  );
}

function ArticleList({
  title,
  pretext,
  list,
  posttext,
}: {
  title: string;
  pretext: string;
  list: string[];
  posttext: string;
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-3 xl:gap-6 max-md:px-2 w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
      {title && (
        <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] md:-tracking-“0.34px] xl:-tracking-[0.02em] opacity-30">
          {title}
        </p>
      )}
      <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-5 xl:leading-[24px] -tracking-[0.34px] xl:-tracking-[0.02em] whitespace-pre-wrap w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
        {pretext}
      </p>
      <ul className="list-disc list-outside pl-4 font-spectral">
        {list?.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
      <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-5 xl:leading-[24px] -tracking-[0.34px] xl:-tracking-[0.02em] whitespace-pre-wrap w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
        {posttext}
      </p>
    </div>
  );
}
