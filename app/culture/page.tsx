"use client";

import prjects1 from "@/public/assets/images/project-1.png";
import Image from "next/image";

export default function Home() {
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
      <h1 className="font-spectral font-normal text-[20px] lg:text-[38px] leading-[24px] lg:leading-[42px] -tracking-[0.6px] lg:-tracking-[0.03em] px-2 lg:px-3 mt-4 lg:mt-6">
        BQ Studio – это более 40 специалистов с сильной экспертизой и творческим
        видением, которые готовы расти и обмениваться опытом вместе. Мы
        понимаем, что профессиональный путь каждого человека уникален, и создаем
        место, которое поддерживает индивидуальный рост, стремления и мотивацию,
        чтобы найти цель и смысл в нашей работе.
      </h1>
      <div
        className="flex flex-row justify-between mt-[80px] pl-3"
        style={{ paddingRight: `${0.5 * 8.33}vw` }}
      >
        <div className="flex flex-col gap-3" style={{ width: `${6 * 8.33}vw` }}>
          <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
            Вакансии
          </p>
          <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
            Мы всегда в поиске талантов, вы можете отправить <br />
            свое резюме на почту:{" "}
            <a
              href="emailto:hr@bqstudio.co"
              className="font-apercu font-normal text-[28px] leading-[32px] -tracking-[0.02em] opacity-30"
            >
              hr@bqstudio.co
            </a>
          </p>
        </div>
        <div
          className="flex flex-col gap-10"
          style={{ width: `${5 * 8.33}vw` }}
        >
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Образование сотрудников
            </p>
            <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
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
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Опыт работы
            </p>
            <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
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
      <div className="flex flex-row items-end justify-end mt-[80px]">
        <div
          className="flex flex-col gap-10 items-center justify-center h-screen custom-shadow-left relative px-[144px]"
          style={{ width: `${9 * 8.33}vw` }}
        >
          <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] absolute left-[12px] top-[20px]">
            Команда о BQ
          </p>
          <h1 className="font-spectral font-normal text-[38px] leading-[42px] -tracking-[0.03em] text-center">
            <span className="font-apercu opacity-30">Дарья Уткова</span> <br />
            <span className="font-apercu opacity-30">
              Архитектор направления мастер-плана:
            </span>{" "}
            “Мы создаем и делаем возможными для реализации уникальные проекты
            среды за счет глубокого понимания <br /> актуальной повестки и
            формирования образа единого результата у всех участников проекта.”
          </h1>

          <div className="relative w-[253px] h-[320px]">
            <Image src={prjects1} alt="project-1" fill />
          </div>

          <div className="flex flex-row gap-1.5">
            <div className="w-2 h-2 rounded-full bg-black" />
            <div className="w-2 h-2 rounded-full bg-black opacity-30" />
            <div className="w-2 h-2 rounded-full bg-black opacity-30" />
            <div className="w-2 h-2 rounded-full bg-black opacity-30" />
          </div>
        </div>
      </div>
      <h1 className="font-spectral font-normal text-[38px] leading-[42px] -tracking-[0.03em] px-3 mt-[80px]">
        Мы ценим нашу команду и стремимся создать благоприятную рабочую
        атмосферу, <br />
        основанную на общих ценностях, благополучии и стремлении к совершенству
        в работе и за ее пределами для каждого человека.
      </h1>
      <div className="flex flex-row items-end justify-end mt-[80px]">
        <div className="flex flex-col items-end">
          <Image
            src={prjects1}
            alt="project-1"
            width={0}
            height={0}
            style={{ width: `${9 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-left"
          />
          <p
            className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em] pr-3 mt-6"
            style={{ width: `${9 * 8.33}vw` }}
          >
            Мы понимаем, что профессиональный путь каждого человека уникален, и
            поэтому создаем разные форматы обучения в которых можно повысить
            квалификацию от ведущих специалистов индустрии, делясь опытом со
            своми коллегами.
          </p>

          <div
            className="flex flex-row pr-[78px] mt-[80px]"
            style={{
              width: `${9 * 8.33}vw`,
              gap: `${1 * 8.33}vw`,
              paddingRight: `${0.5 * 8.33}vw`,
            }}
          >
            <div className="flex flex-col gap-3 w-[517px]">
              <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                Библиотека знаний
              </p>
              <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                Все свои наработки и материалы собрали в одну библиотеку которая
                пополняется с каждым годом
              </p>
            </div>
            <div className="flex flex-col gap-10 w-[518px]">
              <div className="flex flex-col gap-3">
                <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                  Экспедиции
                </p>
                <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                  Мы организовали экспедиции в 6 зарубежных городов для
                  девелоперов, урбанистов и архитекторов: Копенгаген, Милан,
                  Сеул, Дубай, Баку и Токио
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                  Лекции и воркшопы
                </p>
                <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                  Мы провели более 10 лекций и воркшопы, включая презентации
                  проектов, обсуждение современных тенденций и практическое
                  обучение методам проектирования архитектуры и урбанистике.
                </p>
              </div>
              <div className="flex flex-col gap-3">
                <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
                  Ридинг-группы
                </p>
                <p className="font-spectral font-normal text-[28px] leading-[32px] -tracking-[0.02em]">
                  Каждую неделю мы проводим мероприятия, где люди собираются для
                  обсуждения книг, обмена идеями и развития навыков чтения.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex mt-[160px] h-[32px] w-screen border-b border-[#E7E9EF]">
        <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] pl-3">
          Знания BQ Studio
        </p>
      </div>
      <div
        className="flex flex-row mt-[160px] mb-[100px] justify-between"
        style={{
          paddingLeft: `${0.5 * 8.33}vw`,
          paddingRight: `${0.5 * 8.33}vw`,
        }}
      >
        <div
          className="aspect-[253/320] relative"
          style={{ width: `${2 * 8.33}vw` }}
        >
          <Image src={prjects1} alt="project-1" fill />
        </div>
        <div
          className="aspect-[253/320] relative"
          style={{ width: `${2 * 8.33}vw` }}
        >
          <Image src={prjects1} alt="project-1" fill />
        </div>
        <div
          className="aspect-[253/320] relative"
          style={{ width: `${2 * 8.33}vw` }}
        >
          <Image src={prjects1} alt="project-1" fill />
        </div>
        <div
          className="aspect-[253/320] relative"
          style={{ width: `${2 * 8.33}vw` }}
        >
          <Image src={prjects1} alt="project-1" fill />
        </div>
      </div>
    </div>
  );
}
