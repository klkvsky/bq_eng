import Image from "next/image";

export function ArticleVideo({ src }: { src: string }) {
  return (
    <div className="relative cursor-pointer w-full">
      <Image
        src={src}
        alt="Placeholder"
        width={0}
        height={0}
        className="z-0 w-full h-auto md:h-[740px]"
      />
      <p className="font-spectral text-[64px] leading-[68px] -tracking-[0.04em] font-normal text-white z-10 absolute bottom-6 left-3">
        ▶
      </p>
    </div>
  );
}