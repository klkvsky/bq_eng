import Book1 from "../public/assets/images/Books/book-1.png";
import Book2 from "../public/assets/images/Books/book-2.png";
import Book3 from "../public/assets/images/Books/book-3.png";
import Book4 from "../public/assets/images/Books/book-4.png";
import Book5 from "../public/assets/images/Books/book-5.png";
import Book6 from "../public/assets/images/Books/book-6.png";
import Book7 from "../public/assets/images/Books/book-7.png";
import Book8 from "../public/assets/images/Books/book-8.png";
import Book9 from "../public/assets/images/Books/book-9.png";

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

export default function Knowledge() {
  return (
    <div className="flex flex-col">
      <h1 className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em] mt-[44px] pl-3">
        Мы развиваем архитектуру как культурную практику, реализуя различные
        форматы, такие как:{" "}
        <span className="font-apercu opacity-30">Исследования</span>, {" "}
        <span className="font-apercu opacity-30">Экспедиции</span>,{" "}
        <span className="font-apercu opacity-30">Дайджесты</span>,{" "}
        <span className="font-apercu opacity-30">Подкасты</span> и{" "}
        <span className="font-apercu opacity-30">Галереи</span>.
      </h1>

      <div className="grid grid-cols-3 px-[78px] gap-x-[144px] gap-y-[120px] mt-[80px] pb-[120px]">
        {knowledgeData.map((_, index) => (
          <div
            key={index}
            className="aspect-[253/320] relative group hover:custom-shadow-right cursor-pointer"
            style={{ width: `${2 * 8.33}vw` }}
          >
            <Image src={_.image} alt="project-1" fill />
            <div className="absolute top-0 left-0 w-full h-full bg-white group-hover:opacity-100 opacity-0 flex flex-col transition-opacity">
              <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 pt-3">
                {_.title}
              </p>
              <p className="font-spectral font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                {_.subtitle}
              </p>
              <p className="mt-auto font-apercu text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 pb-3">
                {_.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
