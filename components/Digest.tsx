import Image from "next/image";
import Placeholder from "@/public/assets/images/project-4.png";

export default function Digest() {
  return (
    <div className="flex flex-col items-center">
      <p className="font-apercu font-normal text-[38px] leading-[42px] -tracking-[0.03em] text-center opacity-30">
        Дайджест:
      </p>
      <p className="font-spectral font-normal text-[38px] leading-[42px] -tracking-[0.03em] text-center">
        Новый центр Porsche в Памбио Норанко. Прочность древесины между
        скоростью и точностью
      </p>
      <Image
        src={Placeholder}
        alt="Placeholder"
        width={0}
        height={0}
        style={{ width: `${7 * 8.33}vw`, height: "auto" }}
        className="relative custom-shadow-right mt-[24px]"
      />
      <div className="w-full h-px bg-[#E7E9EF] mt-[40px]" />
      <div className="flex flex-col items-center mt-[24px] relative w-full">
        <div className="flex flex-col gap-3 absolute top-0 left-3">
          <div className="flex flex-col gap-1">
            <p className="font-spectral font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Дата:
            </p>
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30">
              22.07.2024
            </p>
          </div>
          <div className="flex flex-col gap-1 items-start">
            <p className="font-spectral font-normal text-[16px] leading-[20px] -tracking-[0.02em]">
              Поделиться:
            </p>
            <button className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30  hover:opacity-100 transition-opacity">
              Скопировать ссылку
            </button>
            <button className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30  hover:opacity-100 transition-opacity">
              Телеграмм
            </button>
            <button className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 hover:opacity-100 transition-opacity">
              Вконтакте
            </button>
          </div>
        </div>
        <p
          className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em]"
          style={{ width: `${4 * 8.33}vw` }}
        >
          Уже совсем скоро в Гостином дворе пройдет одно из главных событий
          сферы дизайна и арта — международная выставка мебели, интерьерных
          решений и искусства ARTDOM. С 16 по 18 февраля посетители смогут не
          только познакомиться с новинками российских и зарубежных брендов, но и
          пополнить багаж знаний: выставка анонсировала обширную деловую
          программу, а к списку ее амбассадоров присоединился
          <br />
          <br />
          Карим Рашид — мировая звезда промышленного дизайна.Уже совсем скоро в
          Гостином дворе пройдет одно из главных событий сферы дизайна и арта —
          международная выставка мебели, интерьерных решений и искусства ARTDOM.
          С 16 по 18 февраля посетители смогут не только познакомиться с
          новинками российских и зарубежных брендов, но и пополнить багаж
          знаний: выставка анонсировала обширную деловую программу, а к списку
          ее амбассадоров присоединился Карим Рашид — мировая звезда
          промышленного дизайна.
        </p>
        <div className="flex flex-col gap-3 mt-[80px] items-start w-full">
          <Image
            src={Placeholder}
            alt="Placeholder"
            style={{ width: `${6.5 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-right"
          />
          <p className="font-spectral font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30 w-[860px] pl-3">
            Уже совсем скоро в Гостином дворе пройдет одно из главных событий
            сферы дизайна и арта — международная выставка мебели, интерьерных
            решений и искусства ARTDOM.{" "}
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-[80px] items-end w-full">
          <Image
            src={Placeholder}
            alt="Placeholder"
            width={0}
            height={0}
            style={{ width: `${6.5 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-right"
          />
          <p
            className="font-spectral font-normal text-[16px] leading-[20px] -tracking-[0.02em] opacity-30"
            style={{ width: `${6.5 * 8.33}vw` }}
          >
            Уже совсем скоро в Гостином дворе пройдет одно из главных событий
            сферы дизайна и арта — международная выставка мебели, интерьерных
            решений и искусства ARTDOM.{" "}
          </p>
        </div>
        <p
          className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em] mt-[80px]"
          style={{ width: `${4 * 8.33}vw` }}
        >
          Выступление Карима Рашида — не единственное, чем порадует деловая
          программа: организаторы запланировали более двух десятков интересных
          мероприятий. Посетители узнают о том, как дизайнеру выстроить личный
          бренд, где стоит публиковать свои работы, в чем секреты красивой
          интерьерной съемки, где находить производителей для своих предметов,
          как эффективно общаться с девелоперами и многое другое.
          <br />
          <br />В числе спикеров дизайнеры Дима Логинов, Полина Пидцан, Ирина
          Глик, Диана Балашова, архитекторы Златан Бркич (AB-architects) и Лия
          Бабаянц (Babayants Architects), фотограф Сергей Красюк, Елена Хрящева,
          президент Giorgio Collection Фабио Мазоло, арт-директор компании
          «Мария» Денис Юдин — и это лишь небольшая часть имен.
        </p>
        <p
          className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em] mt-[80px]"
          style={{ width: `${4 * 8.33}vw` }}
        >
          Поинт 1
          <br />
          <br />
          Выставка ARTDOM, которая концептуально объединяет предметный дизайн,
          искусство и бизнес, состоится уже в третий раз. Ее тема в 2024 году —
          «Суть вещей». Регистрация на мероприятие по промокоду KARIM уже
          открыта на официальном сайте.
          <br />
          <br />
          Поинт 2
          <br />
          <br />
          Работы дизайнера всегда узнаваемы благодаря прогрессивным формам,
          передовым материалам и ярким цветам. Он непрерывно исследует новое,
          считая, что дизайн должен отражать только сегодняшний день и не
          оглядываться назад, и это заметно во всем, что он делает.
          <br />
          <br />
          Поинт 3
          <br />
          <br />
          Уже совсем скоро в Гостином дворе пройдет одно из главных событий
          сферы дизайна и арта — международная выставка мебели, интерьерных
          решений и искусства ARTDOM.
          <br />
          <br />
          Поинт 4
          <br />
          <br />
          Работы дизайнера всегда узнаваемы благодаря прогрессивным формам,
          передовым материалам и ярким цветам. Он непрерывно исследует новое,
          считая, что дизайн должен отражать только сегодняшний день и не
          оглядываться назад, и это заметно во всем, что он делает.
        </p>
        <div className="w-full h-[780px] relative mt-[80px] cursor-pointer">
          <Image src={Placeholder} alt="Placeholder" fill className="z-0" />
          <p className="font-spectral text-[64px] leading-[68px] -tracking-[0.04em] font-normal text-white z-10 absolute bottom-6 left-3">
            ▶
          </p>
        </div>
        <p className="font-normal text-[28px] leading-[32px] -tracking-[0.02em] font-spectral pl-3 mt-20">
          <span className="font-apercu opacity-30">
            Юрий Белоусов, Главный архитектор проекта по мастер-плану:
          </span>{" "}
          “Мы создаем и делаем возможными для реализации уникальные проекты
          среды за счет глубокого понимания актуальной повестки и формирования
          образа единого результата у всех участников проекта.”
        </p>

        <div
          className="flex flex-col gap-6 mt-[80px]"
          style={{ width: `${4 * 8.33}vw` }}
        >
          <p className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em] opacity-30">
            ARTDOM 2023
          </p>
          <p className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em]">
            Выступление Карима Рашида — не единственное, чем порадует деловая
            программа: организаторы запланировали более двух десятков интересных
            мероприятий. Посетители узнают о том, как дизайнеру выстроить личный
            бренд, где стоит публиковать свои работы, в чем секреты красивой
            интерьерной съемки, где находить производителей для своих предметов,
            как эффективно общаться с девелоперами и многое другое.
            <br />
            <br />
            В числе спикеров дизайнеры Дима Логинов, Полина Пидцан, Ирина Глик,
            Диана Балашова, архитекторы Златан Бркич (AB-architects) и Лия
            Бабаянц (Babayants Architects), фотограф Сергей Красюк, Елена
            Хрящева, президент Giorgio Collection Фабио Мазоло, арт-директор
            компании «Мария» Денис Юдин — и это лишь небольшая часть имен.
            <br />
            <br />
            Выступление Карима Рашида — не единственное, чем порадует деловая
            программа: организаторы запланировали более двух десятков интересных
            мероприятий. Посетители узнают о том, как дизайнеру выстроить личный
            бренд, где стоит публиковать свои работы, в чем секреты красивой
            интерьерной съемки, где находить производителей для своих предметов,
            как эффективно общаться с девелоперами и многое другое.
            <br />
            <br /> В числе спикеров дизайнеры Дима Логинов, Полина Пидцан, Ирина
            Глик, Диана Балашова, архитекторы Златан Бркич (AB-architects) и Лия
            Бабаянц (Babayants Architects), фотограф Сергей Красюк, Елена
            Хрящева, президент Giorgio Collection Фабио Мазоло, арт-директор
            компании «Мария» Денис Юдин — и это лишь небольшая часть имен.
          </p>
        </div>
        <div className="flex flex-col gap-3 mt-20 items-start w-full">
          <Image
            src={Placeholder}
            alt="Placeholder"
            width={0}
            height={0}
            style={{ width: `${6.5 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-right"
          />
        </div>
        <div className="flex flex-col gap-3 mt-20 items-end w-full">
          <Image
            src={Placeholder}
            alt="Placeholder"
            width={0}
            height={0}
            style={{ width: `${6.5 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-left"
          />
        </div>
        <div className="flex flex-col gap-3 mt-20 items-start w-full">
          <Image
            src={Placeholder}
            alt="Placeholder"
            width={0}
            height={0}
            style={{ width: `${6.5 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-right"
          />
        </div>
        <div className="flex flex-col gap-3 mt-20 items-end w-full">
          <Image
            src={Placeholder}
            alt="Placeholder"
            width={0}
            height={0}
            style={{ width: `${6.5 * 8.33}vw`, height: "auto" }}
            className="relative custom-shadow-left"
          />
        </div>
        <div
          className="flex flex-col gap-6 mt-[80px]"
          style={{ width: `${4 * 8.33}vw` }}
        >
          <p className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em] opacity-30">
            ARTDOM 2023
          </p>
          <p className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em]">
            Выступление Карима Рашида — не единственное, чем порадует деловая
            программа: организаторы запланировали более двух десятков интересных
            мероприятий. Посетители узнают о том, как дизайнеру выстроить личный
            бренд, где стоит публиковать свои работы, в чем секреты красивой
            интерьерной съемки, где находить производителей для своих предметов,
            как эффективно общаться с девелоперами и многое другое.
            <br />
            <br />
            Выставка ARTDOM, которая концептуально объединяет предметный дизайн,
            искусство и бизнес, состоится уже в третий раз. Ее тема в 2024 году
            — «Суть вещей». Регистрация на мероприятие по промокоду KARIM уже
            открыта на официальном сайте.
          </p>
        </div>
        <div
          className="flex flex-col gap-6 mt-[80px]"
          style={{ width: `${4 * 8.33}vw` }}
        >
          <p className="font-spectral font-normal text-[18px] leading-[24px] -tracking-[0.02em]">
            Среди участников ARTDOM 2024:
          </p>
          <ul className=" list-disc list-inside">
            <li>Artemide;</li>
            <li>ASKO; B&B Italia,</li>
            <li>GIORGETTI (Интерьеры Экстра Класса);</li>
          </ul>
        </div>

        <div className="my-[120px] flex flex-col w-full">
          <div className="flex h-[32px] w-screen border-b border-[#E7E9EF]">
            <p className="font-apercu font-normal text-[16px] leading-[20px] -tracking-[0.02em] pl-3">
              Другие материалы
            </p>
          </div>
          <div className="flex flex-row mt-[120px] px-[78px] justify-between w-full">
            <div
              className="aspect-[253/320] relative cursor-pointer"
              style={{ width: `${2 * 8.33}vw` }}
            >
              <Image src={Placeholder} alt="project-1" fill />
            </div>
            <div
              className="aspect-[253/320] relative cursor-pointer"
              style={{ width: `${2 * 8.33}vw` }}
            >
              <Image src={Placeholder} alt="project-1" fill />
            </div>
            <div
              className="aspect-[253/320] relative cursor-pointer"
              style={{ width: `${2 * 8.33}vw` }}
            >
              <Image src={Placeholder} alt="project-1" fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
