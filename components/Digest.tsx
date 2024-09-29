"use client";

import Image, { StaticImageData } from "next/image";
import Placeholder from "@/public/assets/images/project-4.png";

export default function Digest() {
  return (
    <div className="flex flex-col items-center pb-20">
      <div className="font-normal text-[20px] md:text-[32px] xl:text-[38px] leading-[24px] md:leading-[36px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.96px] xl:-tracking-[0.03em] text-center">
        <p className="font-spectral xl:font-apercu xl:opacity-30">Дайджест:</p>
        <p className="font-spectral">
          Новый центр Porsche в Памбио Норанко. Прочность древесины между
          скоростью и точностью
        </p>
      </div>
      <div className="relative custom-shadow-left mt-4 md:mt-6">
        <Image
          src={Placeholder}
          alt="Placeholder"
          width={0}
          height={0}
          className="w-[calc(6*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(7*8.33vw)] h-auto"
        />
      </div>
      <div className="w-full h-px bg-[#E7E9EF] mt-8 md:mt-10" />
      <div className="flex flex-col items-center md:mt-6 relative w-full gap-8 md:gap-20">
        <DigestShareAndInfo />
        <DigestText
          text={`Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
            
Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна.

Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна.
          `}
          title={undefined}
        />
        <DigestImage
          src={Placeholder}
          type="left"
          subtext=" Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM."
        />
        <DigestImage
          src={Placeholder}
          type="right"
          subtext=" Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM."
        />
        <DigestText
          text={`Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
            
            Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна.
            
            Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
            
            Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна`}
          title={undefined}
        />
        <DigestVideo src={Placeholder} />
        <DigestQuote
          title="Юрий Белоусов, Главный архитектор проекта по мастер-плану:"
          text="“Мы создаем и делаем возможными для реализации уникальные проекты
          среды за счет глубокого понимания актуальной повестки и формирования
          образа единого результата у всех участников проекта.”"
        />
        <DigestText
          text={` Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
            
            Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна.`}
          title={undefined}
        />
        <DigestText
          text={`Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
            
            Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна`}
          title="ARTDOM 2023"
        />
        <DigestImage src={Placeholder} type="left" subtext={null} />
        <DigestImage src={Placeholder} type="right" subtext={null} />
        <DigestImage src={Placeholder} type="left" subtext={null} />
        <DigestImage src={Placeholder} type="right" subtext={null} />
        <DigestText
          text={`Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился
            
            Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в Гостином дворе пройдет одно из главных событий сферы дизайна и арта — международная выставка мебели, интерьерных решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не только познакомиться с новинками российских и зарубежных брендов, но и пополнить багаж знаний: выставка анонсировала обширную деловую программу, а к списку ее амбассадоров присоединился Карим Рашид — мировая звезда промышленного дизайна`}
          title="ARTDOM 2023"
        />
        <div className="flex flex-col gap-4 xl:gap-6 px-2 font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] xl:-tracking-[0.02em] w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
          <p className="font-spectral">Среди участников ARTDOM 2024:</p>
          <ul className=" list-disc list-inside">
            <li>Artemide;</li>
            <li>ASKO; B&B Italia,</li>
            <li>GIORGETTI (Интерьеры Экстра Класса);</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export function DigestShareAndInfo() {
  return (
    <div className="flex flex-row md:flex-col gap-2 md:gap-3 md:absolute md:top-0 md:left-3 max-md:items-start max-md:w-full max-md:p-2 font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
      <div className="flex flex-col gap-1 w-[calc(3*12.5vw)] md:w-[unset]">
        <p className="font-spectral">Дата:</p>
        <p className="font-apercu opacity-30">22.07.2024</p>
      </div>
      <div className="flex flex-col gap-1 items-start">
        <p className="font-spectral">Поделиться:</p>
        <button className="font-apercu opacity-30  hover:opacity-100 transition-opacity">
          Скопировать ссылку
        </button>
        <button className="font-apercu opacity-30  hover:opacity-100 transition-opacity">
          Телеграмм
        </button>
        <button className="font-apercu opacity-30 hover:opacity-100 transition-opacity">
          Вконтакте
        </button>
      </div>
    </div>
  );
}

export function DigestText({
  text,
  title,
}: {
  text: string;
  title: string | undefined;
}) {
  return (
    <div className="flex flex-col gap-4 md:gap-3 xl:gap-6 max-md:px-2 w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
      {title && (
        <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-[20px] xl:leading-[24px] -tracking-[0.51px] md:-tracking-“0.34px] xl:-tracking-[0.02em] opacity-30">
          {title}
        </p>
      )}
      <p className="font-spectral font-normal text-[17px] xl:text-[18px] leading-5 xl:leading-[24px] -tracking-[0.34px] xl:-tracking-[0.02em] whitespace-pre-wrap w-full md:w-[calc(6*8.33vw)] xl:w-[calc(4*8.33vw)]">
        {text}
      </p>
    </div>
  );
}

export function DigestImage({
  src,
  type,
  subtext,
}: {
  src: StaticImageData;
  type: "left" | "right" | "full";
  subtext: string | null;
}) {
  return (
    <div className="w-full">
      {type === "left" && (
        <div className="flex flex-col gap-2 xl:gap-3 items-start w-full">
          <div className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto relative custom-shadow-right">
            <Image
              src={src}
              alt="Placeholder"
              width={0}
              height={0}
              className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto"
            />
          </div>
          {subtext && (
            <p className="font-spectral font-normal text-[14px] md:text-[16px] leading-[20px] -tracking-[0.28px] md:-tracking-[0.02em] opacity-30 pl-2 md:pl-3 w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
              {subtext}
            </p>
          )}
        </div>
      )}
      {type === "right" && (
        <div className="flex flex-col gap-2 xl:gap-3 items-end w-full">
          <div className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto relative custom-shadow-left">
            <Image
              src={src}
              alt="Placeholder"
              width={0}
              height={0}
              className="w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto"
            />
          </div>
          {subtext && (
            <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] opacity-30 pr-2 md:pr-3 w-[calc(7*12.5vw)] md:w-[calc(8*8.33vw)] xl:w-[calc(6.5*8.33vw)] h-auto">
              {subtext}
            </p>
          )}
        </div>
      )}
    </div>
  );
}

export function DigestVideo({ src }: { src: StaticImageData }) {
  return (
    <div className="relative cursor-pointer w-full">
      <Image
        src={src}
        alt="Placeholder"
        width={0}
        height={0}
        className="z-0 w-full h-auto md:h-[740px]"
      />
      <p className="font-spectral text-[64px] leading-[68px] -tracking-[0.04em] font-normal text-white z-10 absolute bottom-6 left-3">
        ▶
      </p>
    </div>
  );
}

export function DigestQuote({ title, text }: { title: string; text: string }) {
  return (
    <p className="font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] font-spectral px-2 md:px-3">
      <span className="font-apercu opacity-30">{title}</span> {text}
    </p>
  );
}
