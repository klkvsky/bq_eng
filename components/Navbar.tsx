"use client";

import { useTransitionRouter } from "next-view-transitions";

import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

import { getHomeData } from "@/lib/sanity";

import Image from "next/image";
import B from "@/public/assets/B.svg";
import Q from "@/public/assets/Q.svg";

export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const router = useTransitionRouter();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [isCategoriesInNavbar, setIsCategoriesInNavbar] = useState(false);

  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1280);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => {
      window.removeEventListener("resize", checkScreenSize);
    };
  }, []);

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
    pathname.includes("/knowledge") ||
    pathname.includes("/news") ||
    pathname === "/contacts" ||
    pathname === "/privacy-policy";

  const isArticlePage =
    pathname.startsWith("/knowledge/") || pathname.startsWith("/news/");

  const transition = isLargeScreen
    ? isSidePage
      ? slideOut
      : isArticlePage
        ? slideDown
        : slide
    : opacity;

  return (
    <div
      className={cn(
        "sticky top-0 left-0 bg-white xl:bg-transparent flex flex-row xl:h-[44px] p-2 md:p-3 font-spectral text-[14px] xl:text-[16px] leading-5  -tracking-[0.28px] xl:-tracking-[0.02rem] z-30",
        isMobileMenuOpen && "z-[999]"
      )}
      style={{
        viewTransitionName: "navbar",
      }}
    >
      <div className="flex flex-row gap-1 w-2/12 xl:pl-px">
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
          "xl:hidden flex flex-col gap-1 pr-2 justify-center transition-transform duration-500 cursor-pointer ml-auto",
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
      <div className="hidden xl:flex flex-row gap-1 ml-[8.33%] w-2/12 pl-[7px]">
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
            "transition-opacity hidden xl:flex hover:opacity-30 duration-500 w-1/12 ml-[8.33%]"
          )}
          onClick={() => {
            handleAboutScroll();
          }}
        >
          О проекте
        </button>
      )}
      {isCategoriesInNavbar && (pathname === "/" || pathname === "/list") && (
        <ProjectsCategories />
      )}
      {(pathname === "/" || pathname.includes("/list")) && (
        <div
          className={cn(
            "hidden xl:flex flex-row gap-1 transition-opacity duration-1000 w-2/12",
            isCategoriesInNavbar ? "ml-[8%]" : "ml-[33%]"
          )}
        >
          <a
            className={cn(
              pathname === "/" ? "opacity-30" : "opacity-100",
              "transition-opacity duration-1000"
            )}
            href="/"
            onClick={(e) => {
              e.preventDefault();
              router.push("/", {
                onTransitionReady: opacityWithTitle,
              });
            }}
          >
            Галерея
          </a>
          <p>/</p>
          <a
            className={cn(
              pathname.includes("/list") ? "opacity-30" : "opacity-100",
              "transition-opacity duration-1000"
            )}
            href="/list"
            onClick={(e) => {
              e.preventDefault();
              router.push("/list", {
                onTransitionReady: opacityWithTitle,
              });
            }}
          >
            Список
          </a>
        </div>
      )}
      <a
        href="/contacts"
        onClick={(e) => {
          e.preventDefault();
          router.push("/contacts", {
            onTransitionReady: isArticlePage
              ? slideDown
              : isSidePage
                ? opacity
                : slide,
          });
        }}
        className={cn(
          pathname === "/contacts"
            ? "opacity-30 cursor-default pointer-events-none"
            : "hover:opacity-30",
          "transition-opacity duration-500",
          "hidden xl:flex flex-row gap-1 justify-end ml-auto w-1/12",
          pathname === "/" || pathname.includes("/list") ? "" : ""
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
  pathname,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  searchParams: ReturnType<typeof useSearchParams>;
  pathname: string;
}) {
  const router = useTransitionRouter();

  useEffect(() => {
    if (isMobileMenuOpen) {
      // Disable body scroll when mobile menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Enable body scroll when mobile menu is closed
      document.body.style.overflow = "";
    }

    // Cleanup in case the component unmounts while the menu is open
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <div
      className={cn(
        "xl:hidden fixed top-[36px] left-0 w-screen h-[calc(100vh-36px)] bg-white z-50 transition-opacity duration-300",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
      style={{
        viewTransitionName: "mobileMenu",
      }}
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
          className={`w-full p-2  border-t-[1px] border-t-[#E7E9EF] ${
            pathname == "/knowledge" && "opacity-30 cursor-default"
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
          className={`w-full p-2 ${
            pathname == "/news" && "opacity-30 cursor-default"
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
          className={`w-full p-2 ${
            pathname == "/contacts" && "opacity-30 cursor-default"
          }`}
        >
          Контакты
        </a>

        <div className="fixed bottom-2 left-2 w-full flex flex-row border-none">
          <a href="/">Телеграм канал,</a>
          <a href="/">Youtube</a>
        </div>

        <Image
          src={B}
          alt="b part of logo"
          className="absolute bottom-[44px] left-2 w-[26vw] md:w-[21vw] border-t-0 border-t-transparent"
        />

        <Image
          src={Q}
          alt="q part of logo"
          className="absolute top-[11vh] right-3 w-[25vw] md:w-[21vw] border-t-0 border-t-transparent"
        />

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

  const [homeCategories, setHomeCategories] = useState<{ name: string }[]>([]);

  const isCategoryInUrl = (categoryName: string) => {
    const decodedPathname = decodeURIComponent(pathname).toLowerCase();
    return decodedPathname.includes(categoryName.toLowerCase());
  };

  const router = useTransitionRouter();

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
        "hidden xl:flex flex-row gap-1 transition-opacity duration-1000 relative group items-center w-2/12 ml-[8.33%] cursor-pointer"
      )}
    >
      Направления работ{" "}
      <span className="group-hover:rotate-180 transition-transform duration-300 text-[8px]">
        ▼
      </span>
      <div className="flex flex-col items-start absolute top-full left-0 w-full h-full  opacity-0 group-hover:opacity-100 transition-opacity duration-1000 mt-3 font-apercu text-[16px] leading-[20px] -tracking-[0.32px] whitespace-nowrap">
        {homeCategories.map((category) => (
          <a
            key={category.name}
            className={cn(
              isCategoryInUrl(pathname)
                ? "opacity-100 hover:opacity-30"
                : "opacity-30 hover:opacity-100",
              "transition-opacity duration-1000 cursor-pointer"
            )}
            onClick={(e) => {
              e.preventDefault();
              const categoryPath = `/list/${encodeURIComponent(category.name)}`;
              const newPath = isCategoryInUrl(category.name)
                ? "/list"
                : categoryPath;
              router.push(newPath, {
                onTransitionReady: opacityWithTitle,
              });
            }}
          >
            {category.name}
          </a>
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

function opacityWithTitle() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const isLargeScreen = window.innerWidth >= 1280;

  if (isLargeScreen) {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          filter: "blur(0px)",
        },
        {
          opacity: 0,
          filter: "blur(5px)",
        },
      ],
      {
        duration: 1500,
        easing: "ease-in-out",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        isSafari
          ? {
              display: "none",
              opacity: 0,
              filter: "blur(5px)",
            }
          : {
              opacity: 0,
              filter: "blur(5px)",
            },
        {
          opacity: 1,
          filter: "blur(0px)",
        },
      ],
      {
        delay: 1000,
        duration: 1500,
        easing: "ease-in-out",
        fill: "backwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  } else {
    opacity();
  }
}

function opacity() {
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  document.documentElement.animate(
    [
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(root)",
    }
  );

  document.documentElement.animate(
    [
      {
        opacity: 1,
        filter: "blur(0px)",
      },
      {
        opacity: 0,
        filter: "blur(5px)",
      },
    ],
    {
      duration: 1500,
      easing: "ease-in-out",
      fill: "forwards",
      pseudoElement: "::view-transition-old(projectsTitle)",
    }
  );

  document.documentElement.animate(
    [
      isSafari
        ? {
            display: "none",
            opacity: 0,
            filter: "blur(5px)",
          }
        : {
            opacity: 0,
            filter: "blur(5px)",
          },
      {
        opacity: 1,
        filter: "blur(0px)",
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease-in-out",
      fill: "backwards",
      pseudoElement: "::view-transition-new(projectsTitle)",
    }
  );

  document.documentElement.animate(
    [
      isSafari
        ? {
            display: "none",
            opacity: 0,
            filter: "blur(5px)",
          }
        : {
            opacity: 0,
            filter: "blur(5px)",
          },
      {
        opacity: 1,
        filter: "blur(0px)",
      },
    ],
    {
      delay: 1000,
      duration: 1500,
      easing: "ease-in-out",
      fill: "backwards",
      pseudoElement: "::view-transition-new(root)",
    }
  );
}

function slide() {
  const isLargeScreen = window.innerWidth >= 1280;

  if (isLargeScreen) {
    document.documentElement.animate(
      [
        { opacity: 1, filter: "blur(0px)" },
        { opacity: 0, filter: "blur(5px)" },
      ],
      {
        duration: 1500,
        easing: "ease-in-out",
        fill: "backwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { opacity: 1, filter: "blur(0px)" },
        { opacity: 0, filter: "blur(5px)" },
      ],
      {
        duration: 1500,
        easing: "ease-in-out",
        fill: "backwards",
        pseudoElement: "::view-transition-old(projectsTitle)",
      }
    );

    document.documentElement.animate(
      [
        {
          transform: "translateX(100%)",
          mixBlendMode: "multiply",
          filter: "blur(5px)",
        },
        {
          transform: "translateX(0%)",
          mixBlendMode: "multiply",
          filter: "blur(0px)",
        },
      ],
      {
        delay: 1750,
        duration: 1500,
        easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        fill: "backwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    document.documentElement.animate(
      [
        { transform: "translateX(135%)", filter: "blur(5px)" },
        { transform: "translateX(0%)", filter: "blur(0px)" },
      ],
      {
        delay: 1750,
        duration: 1500,
        easing: "cubic-bezier(0.25, 0.1, 0.25, 1)",
        fill: "backwards",
        pseudoElement: "::view-transition-new(sideshadow)",
      }
    );
  } else {
    opacity();
  }
}

function slideOut() {
  const isLargeScreen = window.innerWidth >= 1280;

  if (isLargeScreen) {
    document.documentElement.animate(
      [
        {
          transform: "translateX(0%)",
          opacity: 1,
          mixBlendMode: "multiply",
          filter: "blur(0px)",
        },
        {
          transform: "translateX(100%)",
          opacity: 1,
          mixBlendMode: "multiply",
          filter: "blur(5px)",
        },
      ],
      {
        duration: 2400,
        easing: "cubic-bezier(0.33, 1, 0.68, 1)",
        fill: "backwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        { transform: "translateX(0%)", opacity: 1, filter: "blur(0px)" },
        { transform: "translateX(132%)", opacity: 1, filter: "blur(5px)" },
      ],
      {
        duration: 2400,
        easing: "cubic-bezier(0.33, 1, 0.68, 1)",
        fill: "backwards",
        pseudoElement: "::view-transition-old(sideshadow)",
      }
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
        },
      ],
      {
        delay: 1500,
        duration: 1500,
        easing: "ease-in-out",
        fill: "backwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          opacity: 0,
          filter: "blur(5px)",
        },
        {
          opacity: 1,
          filter: "blur(0px)",
        },
      ],
      {
        delay: 1500,
        duration: 1500,
        easing: "ease-in-out",
        fill: "backwards",
        pseudoElement: "::view-transition-new(projectsTitle)",
      }
    );
  } else {
    opacity();
  }
}

function slideDown() {
  const isLargeScreen = window.innerWidth >= 1280;

  if (isLargeScreen) {
    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0)",
          zIndex: 1000,
          mixBlendMode: "normal",
        },
        {
          opacity: 1,
          transform: "translateY(125%)",
          zIndex: 1000,
          mixBlendMode: "normal",
        },
      ],
      {
        duration: 1500,
        easing: "ease-in-out",
        fill: "forwards",
        pseudoElement: "::view-transition-old(root)",
      }
    );

    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(-125%)",
          zIndex: -10,
          mixBlendMode: "normal",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
          zIndex: -10,
          mixBlendMode: "normal",
        },
      ],
      {
        duration: 1500,
        easing: "ease-in-out",
        fill: "forwards",
        pseudoElement: "::view-transition-new(topShadow)",
      }
    );

    document.documentElement.animate(
      [
        {
          opacity: 1,
          transform: "translateY(0%)",
          zIndex: 1,
          mixBlendMode: "normal",
        },
        {
          opacity: 1,
          transform: "translateY(0)",
          zIndex: 1,
          mixBlendMode: "normal",
        },
      ],
      {
        duration: 1500,
        easing: "ease-in-out",
        fill: "forwards",
        pseudoElement: "::view-transition-new(root)",
      }
    );
  } else {
    opacity();
  }
}
