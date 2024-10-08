"use client";

import { useTransitionRouter } from "next-view-transitions";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
  const pathname = usePathname();
  const router = useTransitionRouter();

  const isSidePage =
    pathname.includes("/knowledge") ||
    pathname.includes("/news") ||
    pathname === "/contacts" ||
    pathname === "/privacy-policy";

  const isProjectPage = pathname.includes("/project/");

  const transition = isProjectPage
    ? slideDown
    : isSidePage
      ? slideOut
      : opacity;

  return (
    <div
      className={cn(
        "flex flex-row max-md:items-end w-screen h-auto md:h-[44px] 2xl:h-[104px] max-md:px-2 max-md:py-3 md:p-3 2xl:px-6 2xl:py-7 font-spectral text-[14px] md:text-[16px] 2xl:text-[38px] leading-4 md:leading-5 2xl:leading-[48px] -tracking-[0.28px] md:-tracking-[-0.02em] 2xl:-tracking-[0.76px] xl:mt-[160px] 2xl:mt-[352px] z-40 transition-opacity mt-[80px]",
        isSidePage && "hidden"
      )}
      style={{
        viewTransitionName: "footer",
      }}
    >
      <a
        href="/"
        onClick={(e) => {
          e.preventDefault();

          router.push("/", {
            onTransitionReady: transition,
          });
        }}
        className={cn(
          "whitespace-nowrap w-auto md:w-[calc(1.5*8.33vw)] xl:w-[8.33vw] hover:opacity-30 transition-opacity duration-500",
          pathname === "/"
            ? "opacity-30 pointer-events-none cursor-default"
            : ""
        )}
      >
        BQStudio, 2024
      </a>
      <div className="flex flex-col max-md:gap-1 md:flex-row max-md:ml-[12.5vw] ml-auto">
        <a
          className={cn(
            "whitespace-nowrap md:w-[calc(3*8.33vw)] xl:w-[16.66vw]",
            pathname === "/privacy-policy"
              ? "opacity-30 pointer-events-none cursor-default"
              : "hover:opacity-30 transition-opacity duration-500"
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

        <div
          className={cn(
            "flex flex-row gap-1 md:w-[calc(2*8.33vw)] xl:w-[8.33vw] xl:ml-[calc(2.5*8.33vw)] md:ml-[calc(1*8.33vw)]",
            pathname === "/contacts"
              ? "opacity-30 pointer-events-none cursor-default"
              : "hover:opacity-30 transition-opacity duration-500"
          )}
        >
          <a
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
          href="http://vosk.design/"
          target="_blank"
        >
          Дизайн сайта VOSK
        </a>
      </div>
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

function slideOut() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        opacity: 0,
        transform: "translateX(100%)",
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
        opacity: 1,
        transform: "translateX(0)",
      },
      {
        opacity: 0,
        transform: "translateX(125%)",
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-old(sideshadow)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 0,
        transform: "translateX(-100%)",
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
}

function slideDown() {
  document.documentElement.animate(
    [
      {
        opacity: 1,
        transform: "translateY(0)",
        zIndex: 1000,
      },
      {
        opacity: 1,
        transform: "translateY(100%)",
        zIndex: 1000,
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
        opacity: 1,
        transform: "translateY(0%)",
      },
      {
        opacity: 1,
        transform: "translateY(0)",
      },
    ],
    {
      duration: 1000,
      easing: "ease",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}
