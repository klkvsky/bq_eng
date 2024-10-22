"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

function ImageOverlay({
  src,
  onClose,
  title,
  onNext,
  onPrevious,
}: {
  src: string;
  onClose: () => void;
  title?: string;
  onNext: () => void;
  onPrevious: () => void;
}) {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        onPrevious();
      } else if (event.key === "ArrowRight") {
        onNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onNext, onPrevious]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-white cursor-pointer"
    >
      <motion.div className="w-full h-full flex items-center justify-center">
        <motion.div
          className="w-fit h-fit flex items-center justify-center relative"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.8, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Image
            src={src}
            alt="Full screen image"
            width={0}
            height={0}
            className="max-h-[calc(100vh-88px)] w-full object-contain cursor-default z-40"
            unoptimized
          />
          <button
            className="absolute top-1/2 -translate-y-1/2 left-3 w-6 h-6 bg-white rounded-full flex flex-col items-center justify-center z-50 rotate-180"
            onClick={() => {
              onPrevious();
            }}
          >
            <svg
              width="4"
              height="8"
              viewBox="0 0 4 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8L4 4L3.49691e-07 -1.74846e-07L0 8Z" fill="black" />
            </svg>
          </button>
          <button
            className="absolute top-1/2 -translate-y-1/2 right-3 w-6 h-6 bg-white rounded-full flex flex-col items-center justify-center z-50"
            onClick={() => {
              onNext();
            }}
          >
            <svg
              width="4"
              height="8"
              viewBox="0 0 4 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 8L4 4L3.49691e-07 -1.74846e-07L0 8Z" fill="black" />
            </svg>
          </button>
        </motion.div>
        <div className="flex flex-row z-50 fixed top-0 left-0 gap-4 items-center w-full bg-white p-3 max-h-[44px]">
          <p className="font-spectral text-[16px] -tracking-[0.32px]">
            {title}
          </p>
          <div className="h-3 w-px bg-black/30" />
          <button onClick={onClose}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.29282 8.00091L3.40328 11.8904L4.11039 12.5976L7.99993 8.70801L11.8886 12.5966L12.5957 11.8895L8.70704 8.00091L12.5957 4.11227L11.8886 3.40517L7.99993 7.2938L4.11039 3.40426L3.40328 4.11137L7.29282 8.00091Z"
                fill="black"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ArticleImage({
  src,
  type,
  subtext,
  secondaryImage,
  title,
  allImages,
}: {
  src: string;
  type: "left" | "right" | "full" | "center";
  subtext?: string | null;
  secondaryImage?: string | null;
  title?: string;
  allImages?: string[];
}) {
  const [overlayImage, setOverlayImage] = useState<string | null>(null);

  const openOverlay = (imageSrc: string) => setOverlayImage(imageSrc);
  const closeOverlay = () => setOverlayImage(null);

  const handleNext = () => {
    if (allImages) {
      const currentIndex = allImages.indexOf(overlayImage!);
      const nextIndex = (currentIndex + 1) % allImages.length;
      setOverlayImage(allImages[nextIndex]);
    }
  };

  const handlePrevious = () => {
    if (allImages) {
      const currentIndex = allImages.indexOf(overlayImage!);
      const previousIndex =
        (currentIndex - 1 + allImages.length) % allImages.length;
      setOverlayImage(allImages[previousIndex]);
    }
  };

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
              "w-[calc(7*12.5vw)] md:w-[calc(9*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto custom-shadow-right"
            )}
            {subtext && (
              <p className="font-spectral font-normal text-[14px] md:text-[16px] leading-[20px] -tracking-[0.28px] md:-tracking-[0.02em] opacity-30 pl-2 md:pl-3 w-[calc(7*12.5vw)] md:w-[calc(9*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
                {subtext}
              </p>
            )}
          </div>
        )}
        {type === "right" && (
          <div className="flex flex-col gap-2 xl:gap-3 items-end w-full">
            {renderImage(
              src,
              "w-[calc(7*12.5vw)] md:w-[calc(9*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto custom-shadow-left"
            )}
            {subtext && (
              <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30 pr-2 md:pr-3 w-[calc(7*12.5vw)] md:w-[calc(9*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
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
            <div className="w-[calc(6*12.5vw)] md:w-[calc(6*8.33vw)] h-full relative custom-shadow-left">
              {renderImage(
                src,
                "w-[calc(6*12.5vw)] md:w-[calc(6*8.33vw)] h-auto"
              )}
            </div>
          </div>
        )}
      </div>
      <AnimatePresence>
        {overlayImage && (
          <ImageOverlay
            src={overlayImage}
            onClose={closeOverlay}
            title={title}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />
        )}
      </AnimatePresence>
    </>
  );
}
