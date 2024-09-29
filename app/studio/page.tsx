"use client";

import { cn } from "@/lib/utils";

import prjects1 from "@/public/assets/images/project-1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col">
      <h1 className="px-2 md:px-3 font-spectral text-[20px] md:text-[28px] xl:text-[36px] 2xl:text-[91.2px] font-normal leading-[24px] md:leading-[32px] xl:leading-[42px] 2xl:leading-[100.8px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] 2xl:-tracking-[2.736px]">
        В BQ мы исследуем широкий спектр направлений, включая пространственные
        проекты, инсайды и медиа работу. Каждое средство предлагает нам
        уникальную возможность воплотить в жизнь новые идеи.
      </h1>

      <div className="flex flex-col items-end mt-[32px] md:mt-[24px] xl:mt-[80px]">
        <div className="custom-shadow-left md:after:hidden xl:after:block relative w-[calc(7*12.5vw)] md:w-full xl:w-[calc(9*8.33vw)] h-auto">
          <Image
            src={prjects1}
            alt="project-1"
            width={0}
            height={0}
            className={cn(
              "w-[calc(7*12.5vw)] md:w-screen xl:w-[calc(9*8.33vw)] h-auto"
            )}
          />
        </div>
        <p
          className={cn(
            "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] mt-[16px] md:mt-[24px] xl:mt-[24px] px-2 md:px-3 xl:pl-0",
            "w-full xl:w-[calc(9*8.33vw)]"
          )}
        >
          В BQ мы исследуем широкий спектр направлений, включая пространственные
          проекты, инсайды и медиа работу. Каждое средство предлагает нам
          уникальную возможность воплотить в жизнь новые идеи.
        </p>

        <div className="flex flex-col md:flex-row mt-[32px] md:mt-[24px] xl:mt-[80px] px-2 md:px-3 xl:pr-[9.33vw] xl:pl-0 gap-[16px] md:gap-[8.33vw] w-full xl:w-[calc(9*8.33vw)]">
          <div className="flex flex-col max-sm:gap-[16px] w-full md:w-[calc(5*8.33vw)] xl:w-[calc(3*8.33vw)]">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] max-sm:mt-[8px]">
              Контакты
            </p>
            <div className="flex flex-col gap-0 font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
              <p className="font-spectral">BQ Studio:</p>
              <a
                href="emailto:hello@bqstudio.co"
                className="font-apercu opacity-30"
              >
                hello@bqstudio.co
              </a>
            </div>
            <div className="flex flex-col gap-0 xl:mt-[24px] font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
              <p className="font-spectral">BQ Studio Education:</p>
              <a
                href="emailto:edu@bqstudio.co"
                className="font-apercu opacity-30"
              >
                edu@bqstudio.co
              </a>
            </div>
            <div className="flex flex-col gap-0 xl:mt-[24px] font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
              <p className="font-spectral">BQ Studio Communications:</p>
              <a
                href="emailto:pr@bqstudio.co"
                className="font-apercu opacity-30"
              >
                pr@bqstudio.co
              </a>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
              Направления работ
            </p>
            <div className="flex flex-col gap-px mt-3 font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
              <p className="font-spectral">Архитектурное проектирование</p>
              <p className="font-spectral opacity-30">
                Мастер-план территории <br />
                Жилая застройка и дома <br />
                Общественные пространства <br />
                Социальная инфраструктура <br />
                Ландшафт и благоустройство <br />
                Интерьеры <br />
                Бренд-урбанизм
              </p>
            </div>
            <div className="flex flex-col gap-px mt-6 font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
              <p className="font-spectral">Консалтинг</p>
              <p className="font-spectral opacity-30 pr-4">
                Методические рекомендации и чек-листов
              </p>
            </div>
            <div className="flex flex-col gap-px mt-4 xl:mt-6 font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
              <p className="font-spectral">Образовательные проекты</p>
              <p className="font-spectral opacity-30">
                Архитектурные экспедиции <br />
                Экспертные советы <br /> Тренинги <br />
                Посещения архитектурных бюро <br />
                Экскурсии по архитектурным объектам <br />
                Воркшопы
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={prjects1}
        alt="project-1"
        width={0}
        height={0}
        style={{
          width: "100vw",
          height: "auto",
        }}
        className="mt-[80px] md:mt-[160px]"
      />
      <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] px-2 md:px-3 mt-4 md:mt-6">
        В BQ мы исследуем широкий спектр направлений, включая пространственные
        проекты, инсайды и медиа работу. Каждое средство предлагает нам
        уникальную возможность воплотить в жизнь новые идеи.
      </h1>
      <div className="flex flex-col md:flex-row justify-between mt-[32px] md:mt-20 xl:mt-[80px] gap-4 xl:gap-0 px-2 md:px-3 xl:pl-3 xl:pr-[calc(0.5*8.33vw)]">
        <div className="flex flex-col gap-3 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)]">
          <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
            Партнерство и коллаборации
          </p>
          <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
            Для рассмотрения вариантов сотрудничества напишите{" "}
            <br className="hidden xl:block" /> на почту:
            <br className="hidden md:block xl:hidden" />
            <a
              href="emailto:hello@bqstudio.co"
              className="font-spectral xl:font-apercu font-normal opacity-100 xl:opacity-30 md:pl-0 xl:pl-1 pl-1"
            >
              hello@bqstudio.co.
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)">
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
              Наши клиенты
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              STONE, MONO <br />
              MR Group <br />
              ГК ПИК <br />
              FORMA <br />
              INGRAD <br />
              SBER <br />
              Granard <br />
              Hutton Development <br />
              Capital Group <br />
              СМУ-88 <br />
              НМ-10
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
              Наши клиенты
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              STONE, MONO <br />
              MR Group <br />
              ГК ПИК <br />
              FORMA <br />
              INGRAD <br />
              SBER <br />
              Granard <br />
              Hutton Development <br />
              Capital Group <br />
              СМУ-88 <br />
              НМ-10
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
