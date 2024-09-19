"use client";

import prjects1 from "@/public/assets/images/project-1.png";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <h1 className="font-spectral font-normal text-[38px] leading-[42px] -tracking-[0.03em] p-3">
        В BQ мы исследуем широкий спектр направлений, включая пространственные
        проекты, инсайды и медиа работу. Каждое средство предлагает нам
        уникальную возможность воплотить в жизнь новые идеи.
      </h1>

      <div className="flex flex-col items-end mt-[80px]">
        <div className="w-[1191px] h-[1050px] custom-shadow-left relative">
          <Image src={prjects1} alt="project-1" fill />
        </div>
        <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em] mt-[24px] pr-3 w-[1191px]">
          В основе нашего рабочего процесса лежит продуктовый подход,
          направленный на поиск точек соприкосновения в различных областях, в
          которых мы развиваем такие направления как Экспедиции, Исследования,
          Внешняя и внутренняя экспертиза и Повышение квалификации.
        </p>

        <div className="flex flex-row gap-[79px] pr-[78px] mt-[80px]">
          <div className="flex flex-col w-[517px]">
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Контакты
            </p>
            <div className="flex flex-col gap-0">
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                BQ Studio:
              </p>
              <a
                href="emailto:hello@bqstudio.co"
                className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30"
              >
                hello@bqstudio.co
              </a>
            </div>
            <div className="flex flex-col gap-0 mt-[24px]">
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                BQ Studio Education:
              </p>
              <a
                href="emailto:edu@bqstudio.co"
                className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30"
              >
                edu@bqstudio.co
              </a>
            </div>
            <div className="flex flex-col gap-0 mt-[24px]">
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                BQ Studio Communications:
              </p>
              <a
                href="emailto:pr@bqstudio.co"
                className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30"
              >
                pr@bqstudio.co
              </a>
            </div>
          </div>
          <div className="flex flex-col w-[517px]">
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Направления работ
            </p>
            <div className="flex flex-col gap-px mt-3">
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                Архитектурное проектирование
              </p>
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30">
                Мастер-план территории <br />
                Жилая застройка и дома <br />
                Общественные пространства <br />
                Социальная инфраструктура <br />
                Ландшафт и благоустройство <br />
                Интерьеры <br />
                Бренд-урбанизм
              </p>
            </div>
            <div className="flex flex-col gap-px mt-6">
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                Консалтинг
              </p>
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30">
                Методические рекомендации и чек-листов
              </p>
            </div>
            <div className="flex flex-col gap-px mt-6">
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                Образовательные проекты
              </p>
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30">
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

      <div className="w-screen h-screen relative mt-[160px]">
        <Image src={prjects1} alt="project-1" fill />
      </div>
      <h1 className="font-spectral font-normal text-[38px] leading-[42px] -tracking-[0.03em] px-3 mt-6">
        В BQ мы исследуем широкий спектр направлений, включая пространственные
        проекты, инсайды и медиа работу. Каждое средство предлагает нам
        уникальную возможность воплотить в жизнь новые идеи.
      </h1>
      <div className="flex flex-row justify-between pl-3 pr-[78px] mt-[80px]">
        <div className="flex flex-col gap-3">
          <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
            Партнерство и коллаборации
          </p>
          <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
            Для рассмотрения вариантов сотрудничества напишите <br /> на почту:
            <a
              href="emailto:hello@bqstudio.co"
              className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30 pl-1"
            >
              hello@bqstudio.co.
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-10 w-[517px]">
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Наши клиенты
            </p>
            <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
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
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Награды
            </p>
            <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
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
