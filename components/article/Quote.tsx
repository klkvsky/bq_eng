export function ArticleQuote({
  author,
  position,
  text,
}: {
  author: string;
  position: string;
  text: string;
}) {
  return (
    <p className="font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] font-spectral px-2 md:px-3">
      <span className="font-apercu opacity-30">{author}</span>, {" "}
      <span className="font-apercu opacity-30">{position}</span>: {" "}
      {text}
    </p>
  );
}
