"use client";

import { useScreenSize } from "@/lib/hooks/useScreenSize";

import prjects1 from "@/public/assets/images/project-1.png";
import Image from "next/image";

export default function Home() {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="font-spectral font-normal text-[20px] lg:text-[38px]  leading-[24px] lg:leading-[42px] -tracking-[0.6px] lg:-tracking-[0.03em] p-3">
        В BQ мы исследуем широкий спектр направлений, включая пространственные
        проекты, инсайды и медиа работу. Каждое средство предлагает нам
        уникальную возможность воплотить в жизнь новые идеи.
      </h1>

      <div className="flex flex-col items-end mt-[32px] lg:mt-[80px]">
        <div
          className="custom-shadow-left relative"
          style={{
            width: screenSize !== "sm" ? `${9 * 8.33}vw` : `${7 * 12.5}vw`,
            height: "auto",
          }}
        >
          <Image
            src={prjects1}
            alt="project-1"
            width={0}
            height={0}
            style={{
              width: screenSize !== "sm" ? `${9 * 8.33}vw` : `${7 * 12.5}vw`,
              height: "auto",
            }}
          />
        </div>
        <p
          className="font-spectral font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em] mt-[16px] lg:mt-[24px] px-2 lg:pr-3 lg:pl-0"
          style={{
            width: screenSize !== "sm" ? `${9 * 8.33}vw` : `${8 * 12.5}vw`,
          }}
        >
          В BQ мы исследуем широкий спектр направлений, включая пространственные
          проекты, инсайды и медиа работу. Каждое средство предлагает нам
          уникальную возможность воплотить в жизнь новые идеи.
        </p>

        <div
          className="flex flex-col lg:flex-row mt-[32px] lg:mt-[80px]"
          style={{
            paddingRight: screenSize !== "sm" ? `${1 * 8.33}vw` : `8px`,
            paddingLeft: screenSize !== "sm" ? `0px` : `8px`,
            gap: screenSize !== "sm" ? `${8.33 * 1}vw` : `16px`,
            width: screenSize !== "sm" ? `${9 * 8.33}vw` : `100vw`,
          }}
        >
          <div
            className="flex flex-col max-sm:gap-[16px]"
            style={{
              width: screenSize !== "sm" ? `${3 * 8.33}vw` : `100%`,
            }}
          >
            <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em] max-sm:mt-[8px]">
              Контакты
            </p>
            <div className="flex flex-col gap-0 font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
              <p className="font-spectral">BQ Studio:</p>
              <a
                href="emailto:hello@bqstudio.co"
                className="font-apercu opacity-30"
              >
                hello@bqstudio.co
              </a>
            </div>
            <div className="flex flex-col gap-0 lg:mt-[24px] font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
              <p className="font-spectral">BQ Studio Education:</p>
              <a
                href="emailto:edu@bqstudio.co"
                className="font-apercu opacity-30"
              >
                edu@bqstudio.co
              </a>
            </div>
            <div className="flex flex-col gap-0 lg:mt-[24px] font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
              <p className="font-spectral">BQ Studio Communications:</p>
              <a
                href="emailto:pr@bqstudio.co"
                className="font-apercu opacity-30"
              >
                pr@bqstudio.co
              </a>
            </div>
          </div>
          <div
            className="flex flex-col"
            style={{
              width: screenSize !== "sm" ? `${4 * 8.33}vw` : "100%",
            }}
          >
            <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em]">
              Направления работ
            </p>
            <div className="flex flex-col gap-px mt-3 font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
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
            <div className="flex flex-col gap-px mt-6 font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
              <p className="font-spectral">Консалтинг</p>
              <p className="font-spectral opacity-30 pr-4">
                Методические рекомендации и чек-листов
              </p>
            </div>
            <div className="flex flex-col gap-px mt-4 lg:mt-6 font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
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
        className="mt-[80px] lg:mt-[160px]"
      />
      <h1 className="font-spectral font-normal text-[20px] lg:text-[38px] leading-[24px] lg:leading-[42px] -tracking-[0.6px] lg:-tracking-[0.03em] px-2 lg:px-3 mt-4 lg:mt-6">
        В BQ мы исследуем широкий спектр направлений, включая пространственные
        проекты, инсайды и медиа работу. Каждое средство предлагает нам
        уникальную возможность воплотить в жизнь новые идеи.
      </h1>
      <div
        className="flex flex-col lg:flex-row justify-between mt-[32px] lg:mt-[80px] gap-4 lg:gap-0"
        style={{
          paddingRight: screenSize !== "sm" ? `${0.5 * 8.33}vw` : `8px`,
          paddingLeft: screenSize !== "sm" ? `12px` : `8px`,
        }}
      >
        <div
          className="flex flex-col gap-3"
          style={{ width: screenSize !== "sm" ? `${6 * 8.33}vw` : `100%` }}
        >
          <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[20px] -tracking-[0.02em]">
            Партнерство и коллаборации
          </p>
          <p className="font-spectral font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
            Для рассмотрения вариантов сотрудничества напишите{" "}
            <br className="hidden lg:block" /> на почту:
            <a
              href="emailto:hello@bqstudio.co"
              className="font-spectral lg:font-apercu font-normal opacity-100 lg:opacity-30 pl-1"
            >
              hello@bqstudio.co.
            </a>
          </p>
        </div>
        <div
          className="flex flex-col gap-10"
          style={{
            width: screenSize !== "sm" ? `${4 * 8.33}vw` : `100%`,
          }}
        >
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[20px] -tracking-[0.02em]">
              Наши клиенты
            </p>
            <p className="font-spectral font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
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
            <p className="font-apercu font-normal text-[14px] lg:text-[16px] leading-[20px] lg:leading-[20px] -tracking-[0.02em]">
              Награды
            </p>
            <p className="font-spectral font-normal text-[20px] lg:text-[28px] leading-[24px] lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
              PUBLIC SPACE Award <br />
              Открытый международный конкурс <br />
              Золотое сечение 2019 <br />
              Золотой Тризини <br />
              WAF China 2020 <br />
              Best Office Awards 2020 <br />
              Build School Project 2018 <br />
              WAF China 2021 <br />
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
