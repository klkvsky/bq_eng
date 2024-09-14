'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const pathname = usePathname()

    return (
        <div className="flex flex-row w-screen h-[44px] p-3 font-spectral text-[16px] leading-5 -tracking-[-0.02em]">
            <div className="flex flex-row gap-1">
                <Link href="/" className={`transition-all ${pathname == "/" ? "opacity-30 cursor-default" : "opacity-100"}`}>
                    Проекты,
                </Link>
                <Link href="/projects" className={`transition-all ${pathname == "/projects" ? "opacity-30 cursor-default" : "opacity-100"}`}>
                    Студия,
                </Link>
                <Link href="/culture" className={`transition-all ${pathname == "/culture" ? "opacity-30 cursor-default" : "opacity-100"}`}>
                    Культура
                </Link>
            </div>
            <div className="flex flex-row gap-1 ml-[198px]">
                <Link href="/knowledge" className={`transition-all ${pathname == "/knowledge" ? "opacity-30 cursor-default" : "opacity-100"}`}>
                    Знания
                </Link>
                <Link href="/news" className={`transition-all ${pathname == "/news" ? "opacity-30 cursor-default" : "opacity-100"}`}>
                    Новости
                </Link>
            </div>

            <div className="flex flex-row gap-1 ml-auto">
                <button>
                    Галерея
                </button>
                <p>
                    /
                </p>
                <button>
                    Список
                </button>
            </div>
            <div className="flex flex-row gap-1 ml-[198px]">
                <Link href="/contacts" className={`transition-all ${pathname == "/contacts" ? "opacity-30 cursor-default" : "opacity-100"}`}>
                    Контакты
                </Link>
            </div>
        </div>
    )
}