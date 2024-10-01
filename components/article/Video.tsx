import Image from "next/image";

export function ArticleVideo({
  src,
  thumbnail,
}: {
  src: string;
  thumbnail: string;
}) {
  return (
    <div className="relative cursor-pointer w-full">
      <Image
        src={thumbnail}
        alt={src}
        width={0}
        height={0}
        className="z-0 w-full h-auto md:h-[740px]"
        unoptimized
      />
      <p className="font-spectral text-[64px] leading-[68px] -tracking-[0.04em] font-normal text-white z-10 absolute bottom-6 left-3">
        ▶
      </p>
    </div>
  );
}
