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
    <>
      <div
        className={cn(
          "flex flex-row max-md:items-end h-auto md:h-[44px]max-md:px-2 max-md:py-3 md:p-3 font-spectral text-[14px] md:text-[16px]  leading-4 md:leading-5 -tracking-[0.28px] md:-tracking-[0.02em]  xl:mt-[160px] z-40 transition-opacity mt-[80px] "
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
            "whitespace-nowrap hover:opacity-30 transition-opacity duration-500 w-[37.5%] md:w-2/12 xl:w-1/12"
          )}
        >
          BQStudio, 2024
        </a>
        <div className="flex flex-col max-md:gap-1 md:flex-row w-full ">
          <a
            className={cn(
              "whitespace-nowrap md:w-fit md:ml-[4.165%] xl:w-[17.5%] xl:ml-[16.66%]",
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
              "flex flex-row gap-1 md:w-fit md:ml-[8.33%] xl:w-2/12 xl:ml-[16.66%]",
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
            className="whitespace-nowrap xl:text-right hover:opacity-30 transition-opacity duration-500 md:ml-auto"
            href="http://vosk.design/"
            target="_blank"
          >
            Дизайн сайта VOSK
          </a>
        </div>
      </div>
      {/* Sticky Footer on Home Page */}
      <div
        className={cn(
          "xl:hidden h-[36px] md:h-[44px] bg-white sticky left-0 bottom-0 z-40 p-2 md:p-3 border-t border-t-[#E7E9EF] flex flex-row items-center justify-center gap-2",
          !(pathname === "/" || pathname.includes("/list")) && "hidden"
        )}
      >
        <a
          className="font-spectral text-[14px] leading-[20px] -tracking-[0.28px] text-center w-full"
          href="/list"
          onClick={(e) => {
            e.preventDefault();

            router.push("/list", {
              onTransitionReady: opacity,
            });
          }}
        >
          Направления работ
        </a>
        <div className="w-px h-3 bg-[#E7E9EF]" />
        <a
          className="font-spectral text-[14px] leading-[20px] -tracking-[0.28px] relative w-full"
          href={pathname === "/" ? "/list" : "/"}
          onClick={(e) => {
            e.preventDefault();

            router.push(pathname === "/" ? "/list" : "/", {
              onTransitionReady: opacity,
            });
          }}
        >
          <span className="absolute inset-0 flex items-center justify-center">
            {pathname === "/" ? "Сетка" : "Галерея"}
          </span>
        </a>
      </div>
    </>
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
      pseudoElement: "::view-transition-old(projectsTitle)",
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
      pseudoElement: "::view-transition-new(projectsTitle)",
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
