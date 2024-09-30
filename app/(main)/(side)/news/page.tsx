import { NewsSection } from "@/components/news/NewSection";

export default function News() {
  return (
    <div className="md:mt-10 xl:mt-20 flex flex-col xl:mb-32 gap-8 xl:gap-32">
      <NewsSection
        title="Пресса о нас"
        items={[
          {
            title: "Завершение строительства Bund City Hall Plaza в Шанхае",
            date: "22.07.2024",
            source: "РБК",
          },
          {
            title:
              "Церемония закладки первого камня в основание штаб-квартиры BVK",
            date: "18.07.2024",
            source: "Forbes",
          },
          {
            title:
              "Греческая православная церковь по проекту Сантьяго Калатравы в Нью-Йорке",
            date: "18.07.2024",
            source: "Bluesprint",
          },
          {
            title:
              "Zaha Hadid Architects: энергоэффективное здание BEEAH Group в ОАЭ",
            date: "14.07.2024",
            source: "WOL",
          },
          {
            title: "Победа в конкурсе для 4G Wine Estate, Franschhoek",
            date: "12.07.2024",
            source: "Nodome",
          },
        ]}
      />
      <NewsSection
        title="Материалы BQ"
        items={[
          {
            title: "Завершение строительства Bund City Hall Plaza в Шанхае",
            date: "22.07.2024",
            source: "РБК",
          },
          {
            title:
              "Церемония закладки первого камня в основание штаб-квартиры BVK",
            date: "18.07.2024",
            source: "Forbes",
          },
          {
            title:
              "Греческая православная церковь по проекту Сантьяго Калатравы в Нью-Йорке",
            date: "18.07.2024",
            source: "Bluesprint",
          },
          {
            title:
              "Zaha Hadid Architects: энергоэффективное здание BEEAH Group в ОАЭ",
            date: "14.07.2024",
            source: "WOL",
          },
          {
            title: "Победа в конкурсе для 4G Wine Estate, Franschhoek",
            date: "12.07.2024",
            source: "Nodome",
          },
        ]}
      />
    </div>
  );
}
