"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function SideFooter() {
  const pathname = usePathname();
  const router = useTransitionRouter();

  const isSidePage =
    pathname === "/knowledge" ||
    pathname === "/news" ||
    pathname === "/contacts" ||
    pathname === "/privacy-policy";

  return (
    <div
      className={cn(
        "flex-row hidden md:flex max-md:items-end w-full h-auto md:h-[44px] 2xl:h-[104px] max-md:px-2 max-md:py-3 md:p-3 font-spectral text-[14px] md:text-[16px] 2xl:text-[38px] leading-4 md:leading-5 2xl:leading-[48px] -tracking-[0.28px] md:-tracking-[-0.02em] 2xl:-tracking-[0.76px] xl:mt-[20px] z-50 transition-opacity"
      )}
    >
      <a
        className={cn(
          "whitespace-nowrap md:w-[calc(3*8.33vw)] xl:w-[16.66vw] ml-auto hover:opacity-30 transition-opacity duration-500",
          pathname === "/privacy-policy"
            ? "opacity-30 pointer-events-none cursor-default"
            : ""
        )}
        href="/privacy-policy"
        onClick={(e) => {
          e.preventDefault();
          const transition = isSidePage ? opacity : slide;

          router.push("/privacy-policy", {
            onTransitionReady: transition,
          });
        }}
      >
        Политика конфиденциальности
      </a>

      <div className="flex flex-row gap-1 md:w-[calc(2*8.33vw)] xl:w-[8.33vw] xl:ml-[calc(2.5*8.33vw)] md:ml-[calc(1*8.33vw)]">
        <a
          className={cn(
            "hover:opacity-30 transition-opacity duration-500",
            pathname === "/contacts"
              ? "opacity-30 pointer-events-none cursor-default"
              : ""
          )}
          href="/contacts"
          onClick={(e) => {
            e.preventDefault();
            const transition = isSidePage ? opacity : slide;

            router.push("/contacts", {
              onTransitionReady: transition,
            });
          }}
        >
          Вакансии,
        </a>
        <a
          className={cn(
            "hover:opacity-30 transition-opacity duration-500",
            pathname === "/contacts"
              ? "opacity-30 pointer-events-none cursor-default"
              : ""
          )}
          href="/contacts"
          onClick={(e) => {
            e.preventDefault();
            const transition = isSidePage ? opacity : slide;

            router.push("/contacts", {
              onTransitionReady: transition,
            });
          }}
        >
          Контакты
        </a>
      </div>

      <a
        className="whitespace-nowrap md:w-[calc(2*8.33vw)] md:ml-[calc(2*8.33vw)] xl:ml-[calc(1.5*8.33vw)] xl:text-right hover:opacity-30 transition-opacity duration-500"
        href="https://vosk.design"
        target="_blank"
      >
        Дизайн сайта VOSK
      </a>
    </div>
  );
}

function opacity() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
      },
      {
        opacity: 0,
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        display: "none",
        opacity: 0,
      },
      {
        opacity: 1,
      },
    ],
    {
      delay: 1000,
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

function slide() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        opacity: 0,
        transform: "translateX(-100%)",
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translateX(100%)",
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        transform: "translateX(0)",
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translateX(125%)",
        filter: "blur(5px)",
      },
      {
        opacity: 1,
        transform: "translateX(0)",
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(sideshadow)",
    }
  );
}