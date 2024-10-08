"use client";

import { useTransitionRouter } from "next-view-transitions";

import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { useEffect, useState } from "react";

import { getHomeData } from "@/lib/sanity";

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const router = useTransitionRouter();

  const { changeDisplayMode, displayMode } = useGallery();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isCategoriesInNavbar, setIsCategoriesInNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;

      if (scrollPosition > windowHeight) {
        setIsCategoriesInNavbar(true);
      } else {
        setIsCategoriesInNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isSidePage =
    pathname === "/knowledge" ||
    pathname === "/news" ||
    pathname === "/contacts" ||
    pathname === "/privacy-policy";

  const isArticlePage =
    pathname.startsWith("/knowledge/") || pathname.startsWith("/news/");

  const isProjectPage = pathname.includes("/project/");

  const transition = isProjectPage
    ? slideDown
    : isSidePage
      ? slideOut
      : opacity;

  return (
    <div
      className="sticky top-0 bg-white xl:bg-transparent flex flex-row w-screen xl:h-[44px] 2xl:h-[104px] p-2 md:p-3 2xl:px-6 2xl:py-7 font-spectral text-[14px] xl:text-[16px] 2xl:text-[38px] leading-5 2xl:leading-[48px] -tracking-[0.28px] xl:-tracking-[-0.02em] 2xl:-tracking-[0.76px] z-30"
      style={{
        viewTransitionName: "navbar",
      }}
    >
      <div className="flex flex-row gap-1 md:w-[16.66vw]">
        <a
          href="/"
          onClick={(e) => {
            e.preventDefault();

            router.push("/", {
              onTransitionReady: transition,
            });
            setIsMobileMenuOpen(false);
          }}
          className={cn(
            pathname === "/"
              ? "opacity-30 cursor-default pointer-events-none"
              : "hover:opacity-30",
            "transition-opacity duration-500"
          )}
        >
          Проекты,
        </a>
        <a
          href="/studio"
          onClick={(e) => {
            e.preventDefault();
            router.push("/studio", {
              onTransitionReady: transition,
            });
          }}
          className={cn(
            pathname === "/studio"
              ? "opacity-30 cursor-default pointer-events-none"
              : "hover:opacity-30",
            "transition-opacity duration-500"
          )}
        >
          Студия,
        </a>
        <a
          href="/culture"
          onClick={(e) => {
            e.preventDefault();
            router.push("/culture", {
              onTransitionReady: transition,
            });
          }}
          className={cn(
            pathname === "/culture"
              ? "opacity-30 cursor-default pointer-events-none"
              : "hover:opacity-30",
            "transition-opacity duration-500"
          )}
        >
          Культура
        </a>
      </div>
      <div
        className={cn(
          "xl:hidden flex flex-col gap-1 pr-2 justify-center ml-auto transition-transform duration-500 cursor-pointer",
          isMobileMenuOpen ? "-translate-x-2" : ""
        )}
        onClick={() => {
          setIsMobileMenuOpen(!isMobileMenuOpen);
        }}
      >
        <div
          className={cn(
            "h-px bg-black transition-all duration-500",
            isMobileMenuOpen ? "rotate-45 w-4 translate-y-[3px] " : "w-7"
          )}
        />
        <div
          className={cn(
            "h-px bg-black transition-all duration-500",
            isMobileMenuOpen ? "-rotate-45 w-4 -translate-y-[2px]" : "w-7"
          )}
        />
      </div>
      <NavbarMobile
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        searchParams={searchParams}
        pathname={pathname}
      />
      <div className="hidden xl:flex flex-row gap-1 ml-[8.33vw] w-[16.66vw]">
        <a
          href={`/knowledge`}
          onClick={(e) => {
            e.preventDefault();
            const transition = isArticlePage
              ? slideDown
              : isSidePage
                ? opacity
                : slide;
            router.push("/knowledge", {
              onTransitionReady: transition,
            });
          }}
          className={cn(
            pathname === "/knowledge"
              ? "opacity-30 cursor-default pointer-events-none"
              : "hover:opacity-30",
            "transition-opacity duration-500"
          )}
        >
          Знания,
        </a>
        <a
          href={`/news`}
          onClick={(e) => {
            e.preventDefault();
            const transition = isArticlePage
              ? slideDown
              : isSidePage
                ? opacity
                : slide;

            router.push("/news", {
              onTransitionReady: transition,
            });
          }}
          className={cn(
            pathname === "/news"
              ? "opacity-30 cursor-default pointer-events-none"
              : "hover:opacity-30",
            "transition-opacity duration-500"
          )}
        >
          Новости
        </a>
      </div>
      {pathname.includes("project") && (
        <button
          className={cn(
            "transition-opacity ml-[8.33vw] hidden xl:flex hover:opacity-30 duration-500"
          )}
          onClick={() => {
            handleAboutScroll();
          }}
        >
          О проекте
        </button>
      )}
      {isCategoriesInNavbar && pathname === "/" && <ProjectsCategories />}
      {pathname === "/" && (
        <div
          className={cn(
            "hidden xl:flex flex-row gap-1 mr-[8.33vw] w-[8.33vw] transition-opacity duration-1000",
            isCategoriesInNavbar ? "ml-auto" : "ml-auto"
          )}
        >
          <button
            className={cn(
              displayMode === "gallery" ? "opacity-30" : "opacity-100",
              "transition-opacity duration-1000"
            )}
            onClick={() => {
              changeDisplayMode("gallery");
            }}
          >
            Галерея
          </button>
          <p>/</p>
          <button
            className={cn(
              displayMode === "list" ? "opacity-30" : "opacity-100",
              "transition-opacity duration-1000"
            )}
            onClick={() => {
              changeDisplayMode("list");
            }}
          >
            Список
          </button>
        </div>
      )}
      <a
        href="/contacts"
        onClick={(e) => {
          e.preventDefault();
          router.push("/contacts", {
            onTransitionReady: isSidePage ? opacity : slide,
          });
        }}
        className={cn(
          pathname === "/contacts"
            ? "opacity-30 cursor-default pointer-events-none"
            : "hover:opacity-30",
          "transition-opacity duration-500",
          "hidden xl:flex flex-row gap-1 w-[9.33vw] justify-end",
          pathname !== "/" ? "ml-auto" : "ml-[8.33vw]"
        )}
      >
        Контакты
      </a>
    </div>
  );
}

export function NavbarMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  searchParams,
  pathname,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  searchParams: ReturnType<typeof useSearchParams>;
  pathname: string;
}) {
  const router = useTransitionRouter();

  return (
    <div
      className={cn(
        "fixed top-[36px] left-0 w-screen h-[calc(100vh-36px)] bg-white z-50 transition-opacity duration-300",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col gap-1 justify-start items-center h-full font-spectral font-normal text-[14px] leading-5 -tracking-[0.28px] divide-y-[1px] border-y-[#E7E9EF] relative">
        <a
          href={`/knowledge`}
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            setTimeout(() => {
              router.push("/knowledge", {
                onTransitionReady: opacity,
              });
            }, 300);
          }}
          className={`transition-all w-full p-2  border-t-[1px] border-t-[#E7E9EF] ${
            pathname == "/knowledge" && !searchParams.has("item")
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Знания
        </a>
        <a
          href="/news"
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            setTimeout(() => {
              router.push("/news", {
                onTransitionReady: opacity,
              });
            }, 300);
          }}
          className={`transition-all w-full p-2 ${
            pathname == "/news" ? "opacity-30 cursor-default" : "opacity-100"
          }`}
        >
          Новости
        </a>
        <a
          href="/contacts"
          onClick={(e) => {
            e.preventDefault();
            setIsMobileMenuOpen(false);
            setTimeout(() => {
              router.push("/contacts", {
                onTransitionReady: opacity,
              });
            }, 300);
          }}
          className={`transition-all w-full p-2 ${
            pathname == "/contacts"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Контакты
        </a>

        <div className="absolute bottom-2 left-2 w-full flex flex-row border-none">
          <a href="/">Телеграм канал,</a>
          <a href="/">Youtube</a>
        </div>

        <svg
          viewBox="0 0 334 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[180px] lg:top-[376px] right-0 border-none w-[calc(7*12.5vw)] md:w-[calc(7*8.33vw)] h-[calc(7*12.5vw)] md:h-[calc(7*8.33vw)]"
        >
          <g style={{ mixBlendMode: "multiply" }} opacity="0.25">
            <path
              d="M339 354C67.8937 354 7.72459 118.667 6 0.999969H339V354Z"
              fill="url(#paint0_linear_5287_1446)"
            />
          </g>
          <g style={{ mixBlendMode: "multiply" }} opacity="0.25">
            <path
              d="M334 355C62.0796 355 1.72977 118.333 0 0H334V355Z"
              fill="url(#paint1_linear_5287_1446)"
            />
          </g>
          <defs>
            <linearGradient
              id="paint0_linear_5287_1446"
              x1="-103.982"
              y1="202.729"
              x2="61.3561"
              y2="45.5788"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.233439" stopOpacity="0.45" />
              <stop offset="1" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_5287_1446"
              x1="-110.313"
              y1="202.872"
              x2="55.9397"
              y2="45.2716"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.233439" stopOpacity="0.45" />
              <stop offset="1" stopColor="white" stopOpacity="0.05" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}

function ProjectsCategories() {
  const pathname = usePathname();

  const { changeDisplayMode, selectedCategory, setSelectedCategory } =
    useGallery();

  const [homeCategories, setHomeCategories] = useState<{ name: string }[]>([]);

  useEffect(() => {
    if (pathname === "/") {
      const fetchHomeData = async () => {
        const data = await getHomeData();
        setHomeCategories(data.categories);
      };
      fetchHomeData();
    }
    return () => {
      setHomeCategories([]);
    };
  }, [pathname]);

  return (
    <div
      className={cn(
        "hidden xl:flex flex-row gap-1 w-[calc(2*8.33vw)] transition-opacity duration-1000 relative group"
      )}
    >
      Направления работ{" "}
      <span className="group-hover:rotate-180 transition-transform duration-300">
        ▼
      </span>
      <div className="flex flex-col items-start absolute top-full left-0 w-full h-full  opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mt-3 font-apercu text-[16px] leading-[20px] -tracking-[0.32px] whitespace-nowrap">
        {homeCategories.map((category) => (
          <p
            key={category.name}
            className={cn(
              selectedCategory === category.name
                ? "opacity-100 hover:opacity-30"
                : "opacity-30 hover:opacity-100",
              "transition-opacity duration-1000 cursor-pointer"
            )}
            onClick={() => {
              if (selectedCategory !== category.name) {
                if (selectedCategory !== category.name) {
                  changeDisplayMode("list");

                  setTimeout(() => {
                    setSelectedCategory(category.name);
                  }, 1000);
                } else {
                  changeDisplayMode("gallery");

                  setTimeout(() => {
                    setSelectedCategory(null);
                  }, 1000);
                }
              }
            }}
          >
            {category.name}
          </p>
        ))}
      </div>
    </div>
  );
}

function handleAboutScroll() {
  const projectAbout = document.getElementById("project-about");
  if (projectAbout) {
    const scrollToAbout = () => {
      const currentPosition = window.scrollY;
      const targetPosition =
        projectAbout.getBoundingClientRect().top +
        window.scrollY +
        projectAbout.offsetHeight / 2 -
        window.innerHeight / 2;
      const distance = targetPosition - currentPosition;
      const duration = 2000;
      let start: number | null = null;

      const step = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        window.scrollTo(
          0,
          currentPosition + distance * easeInOutCubic(percentage)
        );

        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      };

      window.requestAnimationFrame(step);
    };

    // Easing function for smooth scrolling
    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;

    scrollToAbout();
  }
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
