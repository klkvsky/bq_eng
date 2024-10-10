"use client";
import Image from "next/image";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageOverlay({ src, onClose }: { src: string; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white bg-opacity-70 backdrop-blur-sm cursor-pointer"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="w-full flex flex-col items-center"
      >
        <Image
          src={src}
          alt="Full screen image"
          width={0}
          height={0}
          className="w-4/5 h-auto cursor-default shadow-lg"
          unoptimized
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    </motion.div>
  );
}

export function ArticleImage({
  src,
  type,
  subtext,
  secondaryImage,
}: {
  src: string;
  type: "left" | "right" | "full" | "center";
  subtext?: string | null;
  secondaryImage?: string | null;
}) {
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  const openOverlay = (imageSrc: string) => setOverlayImage(imageSrc);
  const closeOverlay = () => setOverlayImage(null);

  const renderImage = (imageSrc: string, className: string) => (
    <div
      className={`relative ${className}`}
      onClick={() => openOverlay(imageSrc)}
    >
      <Image
        src={imageSrc}
        alt="Article image"
        width={0}
        height={0}
        unoptimized
        className={`cursor-pointer ${className}`}
      />
    </div>
  );

  return (
    <>
      <div className="w-full">
        {type === "left" && (
          <div className="flex flex-col gap-2 xl:gap-3 items-start w-full">
            {renderImage(
              src,
              "w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto custom-shadow-right"
            )}
            {subtext && (
              <p className="font-spectral font-normal text-[14px] md:text-[16px] leading-[20px] -tracking-[0.28px] md:-tracking-[0.02em] opacity-30 pl-2 md:pl-3 w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
                {subtext}
              </p>
            )}
          </div>
        )}
        {type === "right" && (
          <div className="flex flex-col gap-2 xl:gap-3 items-end w-full">
            {renderImage(
              src,
              "w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto custom-shadow-left"
            )}
            {subtext && (
              <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30 pr-2 md:pr-3 w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
                {subtext}
              </p>
            )}
          </div>
        )}
        {type === "full" && (
          <div className="flex flex-col gap-2 xl:gap-3 items-center w-full">
            {secondaryImage &&
              renderImage(secondaryImage, "w-[calc(6*8.33vw)] h-auto")}
            <div className="w-full h-auto">
              {renderImage(src, "w-full h-auto")}
            </div>
          </div>
        )}
        {type === "center" && (
          <div className="w-full h-auto flex justify-center items-center">
            <div className="w-[calc(6*8.33vw)] h-full relative custom-shadow-left">
              {renderImage(src, "w-[calc(6*8.33vw)] h-auto")}
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>
        {overlayImage && (
          <ImageOverlay src={overlayImage} onClose={closeOverlay} />
        )}
      </AnimatePresence>
    </>
  );
}
