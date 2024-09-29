"use client";

import { useScreenSize } from "@/lib/hooks/useScreenSize";

import Book1 from "@/public/assets/images/Books/book-1.png";
import Book2 from "@/public/assets/images/Books/book-2.png";
import Book4 from "@/public/assets/images/Books/book-4.png";
import Book5 from "@/public/assets/images/Books/book-5.png";
import Book3 from "@/public/assets/images/Books/book-3.png";
import Book6 from "@/public/assets/images/Books/book-6.png";
import Book7 from "@/public/assets/images/Books/book-7.png";
import Book8 from "@/public/assets/images/Books/book-8.png";
import Book9 from "@/public/assets/images/Books/book-9.png";

const knowledgeData = [
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book1,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book2,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book3,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book4,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book5,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book6,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book7,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book8,
  },
  {
    title: "Дайджест",
    subtitle:
      "Новый центр Porsche в Памбио Норанко. Прочность древесины между скоростью и точностью",
    date: "12.03.24",
    image: Book9,
  },
];

import Image from "next/image";
import Link from "next/link";

export default function Knowledge() {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col">
      <h1 className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] xl:mt-[44px] p-2 md:pl-3 md:py-0">
        Мы развиваем архитектуру как культурную практику, реализуя различные
        форматы, такие как: <br className="md:hidden" />
        <br className="md:hidden" />
        <span className="font-apercu opacity-30">Исследования</span>,{" "}
        <span className="font-apercu opacity-30">Экспедиции</span>,{" "}
        <span className="font-apercu opacity-30">Дайджесты</span>,{" "}
        <span className="font-apercu opacity-30">Подкасты</span> и{" "}
        <span className="font-apercu opacity-30">Галереи</span>.
      </h1>

      <div className="flex flex-col max-md:items-center md:grid md:grid-cols-2 xl:grid-cols-3 xl:px-[calc(0.5*8.33vw)] xl:gap-x-[calc(8.33vw)] xl:gap-y-[120px] mt-20 xl:pb-[120px] gap-y-20 md:justify-items-center">
        {knowledgeData.map((_, index) => (
          <Link
            href={`/knowledge?item=${index}`}
            scroll={false}
            key={index}
            className="xl:aspect-[253/320] relative group xl:hover:custom-shadow-right cursor-pointer max-xl:gap-4 max-xl:flex max-xl:flex-col w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] xl:w-[calc(2*8.33vw)] h-auto"
          >
            <Image
              src={_.image}
              alt="project-1"
              className="w-[calc(6*12.5vw)] md:w-[calc(3*8.33vw)] xl:w-[calc(2*8.33vw)] h-auto"
            />
            <div className="xl:absolute xl:top-0 xl:left-0 xl:w-full xl:h-full xl:bg-white xl:group-hover:opacity-100 xl:opacity-0 flex flex-col xl:transition-opacity max-md:gap-1">
              <div className="max-md:flex max-md:flex-row max-md:gap-2 font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30">
                <p className="xl:pt-3">{_.title}</p>
                <p className="xl:hidden">{_.date}</p>
              </div>
              <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                {_.subtitle}
              </p>
              <p className="mt-auto font-apercu text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 pb-3 hidden xl:block">
                {_.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
