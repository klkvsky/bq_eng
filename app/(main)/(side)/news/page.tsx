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

export function NewsSection({
  title,
  items,
}: {
  title: string;
  items: {
    title: string;
    date: string;
    source: string;
  }[];
}): React.ReactNode {
  return (
    <div className="flex flex-col">
      <p className="font-spectral font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] p-2 md:p-3 xl:pb-3 md:pt-0 xl:px-0 xl:pl-3">
        {title} →
      </p>
      <div className="flex flex-col gap-8 md:gap-10">
        {items.map((item, index) => (
          <NewsItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
}

export function NewsItem(item: {
  title: string;
  date: string;
  source: string;
}): React.ReactNode {
  return (
    <div className="flex flex-col gap-0 border-t border-[#E7E9EF] p-2 md:p-3">
      <p className="font-apercu font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-6 md:leading-7 xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] opacity-30 xl:opacity-100">
        {item.source} <span className="xl:opacity-30">{item.date}</span>
      </p>
      <p className="font-spectral font-normal text-[20px] xl:text-[28px] leading-6 xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]">
        {item.title}
      </p>
    </div>
  );
}
