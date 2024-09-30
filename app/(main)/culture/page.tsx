"use client";

import { useScreenSize } from "@/lib/hooks/useScreenSize";
import prjects1 from "@/public/assets/images/project-1.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import PageTitle from "@/components/PageTitle";

export default function Home() {
  const screenSize = useScreenSize();

  return (
    <div className="flex flex-col">
      <Image
        src={prjects1}
        alt="project-1"
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
        className="-mt-[44px] z-10"
      />
      <div className="mt-4 md:mt-6">
        <PageTitle
          title="BQ Studio – это более 40 специалистов с сильной экспертизой и творческим
        видением, которые готовы расти и обмениваться опытом вместе. Мы
        понимаем, что профессиональный путь каждого человека уникален, и создаем
        место, которое поддерживает индивидуальный рост, стремления и мотивацию,
        чтобы найти цель и смысл в нашей работе."
          categories={[]}
        />
      </div>
      <div className="flex flex-col md:flex-row xl:justify-between mt-8 md:mt-10 xl:mt-20 px-2 xl:pl-3 max-md:gap-4 md:gap-[8.33vw] xl:pr-[calc(0.5*8.33vw)]">
        <div className="flex flex-col gap-2 md:gap-3 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)]">
          <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
            Вакансии
          </p>
          <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
            Мы всегда в поиске талантов, вы можете отправить{" "}
            <br className="hidden xl:block" />
            свое резюме на почту:{" "}
            <a
              href="emailto:hr@bqstudio.co"
              className="font-spectral xl:font-apercu opacity-100 xl:opacity-30"
            >
              hr@bqstudio.co
            </a>
          </p>
        </div>
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 w-full md:w-[calc(5*8.33vw)]">
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
              Образование сотрудников
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              Более половины сотрудников получили образование в лучших
              международных и российских архитектурных вузах, включая:
              <br />
              <br />
              AA School of Architecture <br />
              London Metropolitan University <br />
              University College London <br />
              Politecnico di Milano <br />
              School of the Art Institute of Chicago
            </p>
          </div>
          <div className="flex flex-col gap-2 md:gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
              Опыт работы
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              Большинство из нашей команды работали в ведущих компаниях по всему
              миру :
              <br /> <br />
              David Chipperfield Architects, <br />
              Schmidt Hammer Lassen Architects <br />
              LAVA <br />
              BIG и др.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-end mt-[100px]">
        <div className="flex flex-col gap-8 xl:gap-10 items-center xl:justify-center max-xl:custom-shadow-top xl:custom-shadow-left relative px-2 pt-4 md:pt-3 xl:py-[200px] w-full xl:w-[calc(9*8.33vw)]">
          <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] xl:absolute xl:left-[12px] xl:top-[20px] max-xl:mr-auto">
            Команда о BQ
          </p>
          <h1 className="font-spectral font-normal text-[20px] md:text-[28px] 2xl:text-[38px] leading-[24px] md:leading-[32px] 2xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] 2xl:-tracking-[0.03em] text-center md:w-[calc(10*8.33vw)] xl:w-[calc(7*8.33vw)]">
            <span className="font-apercu opacity-30">Дарья Уткова</span> <br />
            <span className="font-apercu opacity-30">
              Архитектор направления мастер-плана:
            </span>{" "}
            “Мы создаем и делаем возможными для реализации уникальные проекты
            среды за счет глубокого понимания <br className="hidden xl:block" />{" "}
            актуальной повестки и формирования образа единого результата у всех
            участников проекта.”
          </h1>

          <Image
            src={prjects1}
            alt="project-1"
            width={0}
            height={0}
            className="aspect-[253/320] w-[calc(4*12.5vw)] md:w-[calc(4*8.33vw)] h-auto relative"
          />

          <div className="flex flex-row gap-1.5">
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="w-2 h-2 rounded-full bg-black opacity-30" />
            <div className="w-2 h-2 rounded-full bg-black opacity-30" />
            <div className="w-2 h-2 rounded-full bg-black opacity-30" />
          </div>
        </div>
      </div>
      <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] px-3 mt-20 md:mt-40 max-xl:relative max-xl:pt-4 max-xl:custom-shadow-botton">
        Мы ценим нашу команду и стремимся создать благоприятную рабочую
        атмосферу, <br className="hidden xl:block" />
        основанную на общих ценностях, благополучии и стремлении к совершенству
        в работе и за ее пределами для каждого человека.
      </h1>
      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-end mt-8 md:mt-6 xl:mt-[80px]">
        <div className="flex flex-col items-end">
          <Image
            src={prjects1}
            alt="project-1"
            width={0}
            height={0}
            className="xl:relative xl:custom-shadow-left w-full xl:w-[calc(9*8.33vw)] h-auto"
          />
          <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] px-2 xl:pr-3 xl:pl-0 mt-8 xl:mt-6 w-full xl:w-[calc(9*8.33vw)]">
            Мы понимаем, что профессиональный путь каждого человека уникален, и
            поэтому создаем разные форматы обучения в которых можно повысить
            квалификацию от ведущих специалистов индустрии, делясь опытом со
            своми коллегами.
          </p>

          <div className="flex flex-col md:flex-row px-2 md:px-3 xl:pl-0 mt-8 md:mt-20 w-full xl:w-[calc(9*8.33vw)] gap-4 md:gap-[calc(8.33vw)] xl:gap-[calc(2*8.33vw)] xl:pr-[calc(0.5*8.33vw)]">
            <div className="flex flex-col gap-4 md:gap-3 w-full md:w-[calc(5*8.33vw)] ">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                Библиотека знаний
              </p>
              <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
                Все свои наработки и материалы собрали в одну библиотеку которая
                пополняется с каждым годом
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 w-full md:w-[calc(5*8.33vw)]">
              <div className="flex flex-col gap-2 md:gap-3">
                <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                  Экспедиции
                </p>
                <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
                  Мы организовали экспедиции в 6 зарубежных городов для
                  девелоперов, урбанистов и архитекторов: Копенгаген, Милан,
                  Сеул, Дубай, Баку и Токио
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                  Лекции и воркшопы
                </p>
                <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
                  Мы провели более 10 лекций и воркшопы, включая презентации
                  проектов, обсуждение современных тенденций и практическое
                  обучение методам проектирования архитектуры и урбанистике.
                </p>
              </div>
              <div className="flex flex-col gap-2 md:gap-3">
                <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
                  Ридинг-группы
                </p>
                <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
                  Каждую неделю мы проводим мероприятия, где люди собираются для
                  обсуждения книг, обмена идеями и развития навыков чтения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-20 md:mt-40 h-8 w-screen border-b border-[#E7E9EF]">
        <p className="font-apercu font-normal text-[14px] md:text-[16px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] pl-2 xl:pl-3">
          Знания BQ Studio
        </p>
      </div>
      <div
        className={cn(
          "flex flex-row mt-20 xl:mt-40 md:mb-10 xl:mb-[100px] md:justify-between max-md:overflow-hidden",
          screenSize !== "sm"
            ? "pl-[calc(0.5*8.33vw)] pr-[calc(0.5*8.33vw)]"
            : "pl-[calc(1*12.5vw)] pr-[calc(1*12.5vw)] gap-[calc(2*12.5vw)]"
        )}
      >
        <Image
          src={prjects1}
          alt="project-1"
          width={0}
          height={0}
          className="aspect-[253/320] relative w-[calc(6*12.5vw)] md:w-[calc(2*8.33vw)]"
        />
        <Image
          src={prjects1}
          alt="project-1"
          width={0}
          height={0}
          className="aspect-[253/320] relative w-[calc(6*12.5vw)] md:w-[calc(2*8.33vw)]"
        />
        <Image
          src={prjects1}
          alt="project-1"
          width={0}
          height={0}
          className="aspect-[253/320] relative w-[calc(6*12.5vw)] md:w-[calc(2*8.33vw)]"
        />
        <Image
          src={prjects1}
          alt="project-1"
          width={0}
          height={0}
          className="aspect-[253/320] relative w-[calc(6*12.5vw)] md:w-[calc(2*8.33vw)]"
        />
      </div>
    </div>
  );
}
