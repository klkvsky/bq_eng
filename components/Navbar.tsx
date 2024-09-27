"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useGallery } from "@/lib/ProjectDisplayModeContext";
import { useSideSheet } from "@/lib/SideSheetContext";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [localPageTracker, setLocalPageTracker] = useState<
    "/" | "/studio" | "/culture" | "/knowledge" | "/news" | "/contact"
  >("/");
  const [localDisplayMode, setLocalDisplayMode] = useState<"gallery" | "list">(
    "gallery"
  );
  const { handleToggle } = useGallery();
  const sidesheet = useSideSheet();

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

  return (
    <div
      className="flex flex-row w-screen h-[44px] p-3 font-spectral text-[16px] leading-5 -tracking-[-0.02em] z-50 sticky top-0"
      style={{
        position: "-webkit-sticky",
      }}
    >
      <div className="flex flex-row gap-1 w-[16.66vw]">
        <Link
          href="/"
          onClick={() => {
            setLocalPageTracker("/");
            sidesheet.setIsOpen(false);
          }}
          className={`transition-all ${
            localPageTracker === "/"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Проекты,
        </Link>
        <Link
          href="/studio"
          onClick={() => {
            setLocalPageTracker("/studio");
            sidesheet.setIsOpen(false);
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
          onClick={() => {
            setLocalPageTracker("/culture");
            sidesheet.setIsOpen(false);
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
      <div className="hidden md:flex flex-row gap-1 ml-[8.33vw] w-[16.66vw]">
        <Link
          href={pathname + `/?knowledge`}
          onClick={() => {
            setLocalPageTracker("/knowledge");
            sidesheet.setIsOpen(true);
            sidesheet.setPage("knowledge");
          }}
          className={`transition-all ${
            localPageTracker == "/knowledge"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Знания,
        </Link>
        <Link
          href={pathname + `/?news`}
          onClick={() => {
            sidesheet.setIsOpen(true);
            sidesheet.setPage("news");
            setLocalPageTracker("/news");
          }}
          className={`transition-all ${
            localPageTracker == "/news"
              ? "opacity-30 cursor-default"
              : "opacity-100"
          }`}
        >
          Новости
        </Link>
      </div>

      <div
        className={cn(
          "hidden md:flex flex-row gap-1 ml-auto mr-[8.33vw] w-[8.33vw] transition-opacity duration-1000",
          localPageTracker !== "/" ? "opacity-0" : "opacity-100"
        )}
      >
        <button
          className={cn(
            localDisplayMode === "gallery" ? "opacity-30" : "opacity-100",
            "transition-opacity duration-1000"
          )}
          onClick={() => {
            setLocalDisplayMode("gallery");
            handleToggle("gallery");
          }}
        >
          Галерея
        </button>
        <p>/</p>
        <button
          className={cn(
            localDisplayMode === "list" ? "opacity-30" : "opacity-100",
            "transition-opacity duration-1000"
          )}
          onClick={() => {
            setLocalDisplayMode("list");
            handleToggle("list");
          }}
        >
          Список
        </button>
      </div>
      <div className="hidden md:flex flex-row gap-1 ml-[8.33vw] w-[9.33vw] justify-end">
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
