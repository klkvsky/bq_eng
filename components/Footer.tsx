import Link from "next/link";

export default function Footer() {
    return (
        <div className="flex flex-row w-screen h-[44px] p-3 font-spectral text-[16px] leading-5 -tracking-[-0.02em] mt-[160px]">
            <div className="flex flex-row gap-1">
                <p>
                    BQStudio, 2024
                </p>
            </div>
            <div className="flex flex-row gap-1 ml-[292px]">
                <Link href="/">
                    Политика конфиденциальности
                </Link>
            </div>

            <div className="flex flex-row gap-1 ml-auto">
                <Link href="/">
                    Вакансии,
                </Link>
                <Link href="/">
                    Контакты
                </Link>
            </div>

            <div className="flex flex-row gap-1 ml-[290px]">
                <Link href="/">
                    Дизайн сайта VOSK
                </Link>
            </div>
        </div>
    )
}