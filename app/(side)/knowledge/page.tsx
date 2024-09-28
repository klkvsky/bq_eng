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
      <h1 className="font-spectral font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em] lg:mt-[44px] p-2 lg:pl-3 lg:py-0">
        Мы развиваем архитектуру как культурную практику, реализуя различные
        форматы, такие как: <br className=" lg:hidden" />
        <br className=" lg:hidden" />
        <span className="font-apercu opacity-30">Исследования</span>,{" "}
        <span className="font-apercu opacity-30">Экспедиции</span>,{" "}
        <span className="font-apercu opacity-30">Дайджесты</span>,{" "}
        <span className="font-apercu opacity-30">Подкасты</span> и{" "}
        <span className="font-apercu opacity-30">Галереи</span>.
      </h1>

      <div className="flex flex-col max-md:items-center lg:grid lg:grid-cols-3 lg:px-[78px] lg:gap-x-[144px] lg:gap-y-[120px] mt-20 lg:pb-[120px] gap-y-20">
        {knowledgeData.map((_, index) => (
          <Link
            href={`/knowledge?item=${index}`}
            scroll={false}
            key={index}
            className="lg:aspect-[253/320] relative group lg:hover:custom-shadow-right cursor-pointer max-md:gap-4 max-md:flex max-md:flex-col"
            style={{
              width: screenSize !== "sm" ? `${2 * 8.33}vw` : `${6 * 12.5}vw`,
              height: "auto",
            }}
          >
            <Image
              src={_.image}
              alt="project-1"
              style={{
                width: screenSize !== "sm" ? `${2 * 8.33}vw` : `${6 * 12.5}vw`,
                height: "auto",
              }}
            />
            <div className="lg:absolute lg:top-0 lg:left-0 lg:w-full lg:h-full lg:bg-white lg:group-hover:opacity-100 lg:opacity-0 flex flex-col lg:transition-opacity max-md:gap-1">
              <div className="max-md:flex max-md:flex-row max-md:gap-2 font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em] opacity-30">
                <p className="lg:pt-3">{_.title}</p>
                <p className="lg:hidden">{_.date}</p>
              </div>
              <p className="font-spectral font-normal text-[14px] lg:text-[16px] leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em]">
                {_.subtitle}
              </p>
              <p className="mt-auto font-apercu text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 pb-3 hidden lg:block">
                {_.date}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
