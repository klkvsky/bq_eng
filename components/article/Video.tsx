"use client";

import Image from "next/image";
import { useState } from "react";

export function ArticleVideo({
  src,
  thumbnail,
}: {
  src: string;
  thumbnail: string;
}) {
  const [showVideo, setShowVideo] = useState(false);

  const handleClick = () => {
    setShowVideo(true);
  };

  // Extract video ID from Vimeo URL
  const videoId = src.split("/").pop();

  return (
    <div className="relative cursor-pointer w-full">
      {!showVideo ? (
        <>
          <Image
            src={thumbnail}
            alt={src}
            width={0}
            height={0}
            className="z-0 w-full h-auto md:h-[740px]"
            unoptimized
            onClick={handleClick}
          />
          <p className="font-spectral text-[64px] leading-[68px] -tracking-[0.04em] font-normal text-white z-10 absolute bottom-6 left-3">
            ▶
          </p>
        </>
      ) : (
        <iframe
          src={`https://player.vimeo.com/video/${videoId}?autoplay=1`}
          width="100%"
          height="740"
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
        ></iframe>
      )}
    </div>
  );
}
