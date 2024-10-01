"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";

import { cn } from "@/lib/utils";
import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { useEffect, useState } from "react";
import { useScreenSize } from "@/lib/hooks/useScreenSize";
export default function Navbar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const [localPageTracker, setLocalPageTracker] = useState<
    "/" | "/studio" | "/culture" | "/knowledge" | "/news" | "/contact"
  >("/");
  const { changeDisplayMode, displayMode } = useGallery();

  useEffect(() => {
    setLocalPageTracker(
      pathname as
        | "/"
        | "/studio"
        | "/culture"
        | "/knowledge"
        | "/news"
        | "/contact"
    );
  }, [pathname]);

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isMobileMenuOpen]);

  return (
    <div className="sticky top-0 bg-white xl:bg-transparent flex flex-row w-screen xl:h-[44px] 2xl:h-[104px] p-2 md:p-3 2xl:px-6 2xl:py-7 font-spectral text-[14px] xl:text-[16px] 2xl:text-[38px] leading-5 2xl:leading-[48px] -tracking-[0.28px] xl:-tracking-[-0.02em] 2xl:-tracking-[0.76px] z-30">
      <div className="flex flex-row gap-1 md:w-[16.66vw]">
        <Link
          href="/"
          scroll={false}
          onClick={() => {
            setLocalPageTracker("/");
            if (isMobileMenuOpen) {
              setIsMobileMenuOpen(false);
            }
            if (!searchParams.has("project")) {
              window.scrollTo({
                top: 0,
                behavior: "smooth",
              });
            }
          }}
          className={`transition-all ${
            localPageTracker === "/" && !searchParams.has("project")
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Проекты,
        </Link>
        <Link
          href="/studio"
          scroll={false}
          onClick={() => {
            setLocalPageTracker("/studio");
            if (isMobileMenuOpen) {
              setIsMobileMenuOpen(false);
            }
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`transition-all ${
            localPageTracker === "/studio"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Студия,
        </Link>
        <Link
          href="/culture"
          scroll={false}
          onClick={() => {
            setLocalPageTracker("/culture");
            if (isMobileMenuOpen) {
              setIsMobileMenuOpen(false);
            }
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`transition-all ${
            localPageTracker === "/culture"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Культура
        </Link>
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
            " h-px bg-black transition-all duration-500",
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
        localPageTracker={localPageTracker}
        setLocalPageTracker={setLocalPageTracker}
        searchParams={searchParams}
      />
      <div className="hidden xl:flex flex-row gap-1 ml-[8.33vw] w-[16.66vw]">
        <Link
          href={`/knowledge`}
          scroll={false}
          onClick={() => {
            setLocalPageTracker("/knowledge");
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          className={`transition-all ${
            localPageTracker == "/knowledge" && !searchParams.has("article")
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Знания,
        </Link>
        <Link
          href={`/news`}
          scroll={false}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
            setLocalPageTracker("/news");
          }}
          className={`transition-all ${
            localPageTracker == "/news" && !searchParams.has("article")
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Новости
        </Link>
      </div>
      <div
        className={cn(
          "hidden xl:flex flex-row gap-1 ml-auto mr-[8.33vw] w-[8.33vw] transition-opacity duration-1000",
          localPageTracker !== "/" ? "opacity-0" : "opacity-100"
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
      <div className="hidden xl:flex flex-row gap-1 ml-[8.33vw] w-[9.33vw] justify-end">
        <Link
          href="/contacts"
          className={`transition-all ${
            pathname == "/contacts"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Контакты
        </Link>
      </div>
    </div>
  );
}

export function NavbarMobile({
  isMobileMenuOpen,
  setIsMobileMenuOpen,
  localPageTracker,
  setLocalPageTracker,
  searchParams,
}: {
  isMobileMenuOpen: boolean;
  setIsMobileMenuOpen: (value: boolean) => void;
  localPageTracker:
    | "/"
    | "/studio"
    | "/culture"
    | "/knowledge"
    | "/news"
    | "/contact";
  setLocalPageTracker: (
    value: "/" | "/studio" | "/culture" | "/knowledge" | "/news" | "/contact"
  ) => void;
  searchParams: ReturnType<typeof useSearchParams>;
}) {
  const screenSize = useScreenSize();
  return (
    <div
      className={cn(
        "fixed top-[36px] left-0 w-screen h-[calc(100vh-36px)] bg-white z-50 transition-opacity duration-300",
        isMobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      )}
    >
      <div className="flex flex-col gap-1 justify-start items-center h-full font-spectral font-normal text-[14px] leading-5 -tracking-[0.28px] divide-y-[1px] border-y-[#E7E9EF] relative">
        <Link
          href={`/knowledge`}
          onClick={() => {
            setLocalPageTracker("/knowledge");
            setIsMobileMenuOpen(false);
          }}
          className={`transition-all w-full p-2  border-t-[1px] border-t-[#E7E9EF] ${
            localPageTracker == "/knowledge" && !searchParams.has("item")
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Знания
        </Link>
        <Link
          href={`/news`}
          onClick={() => {
            setLocalPageTracker("/news");
            setIsMobileMenuOpen(false);
          }}
          className={`transition-all w-full p-2 ${
            localPageTracker == "/news"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Новости
        </Link>
        <Link
          href="/contacts"
          onClick={() => {
            setIsMobileMenuOpen(false);
          }}
          className="transition-all w-full p-2"
        >
          Контакты
        </Link>

        <div className="absolute bottom-2 left-2 w-full flex flex-row border-none">
          <a href="/">Телеграм канал,</a>
          <a href="/">Youtube</a>
        </div>

        <svg
          width={screenSize !== "sm" ? `${7 * 8.33}vw` : `${7 * 12.5}vw`}
          height={screenSize !== "sm" ? `${7 * 8.33}vw` : `${7 * 12.5}vw`}
          viewBox="0 0 334 355"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute top-[180px] lg:top-[376px] right-0 border-none"
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
