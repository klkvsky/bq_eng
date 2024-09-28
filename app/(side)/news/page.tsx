export default function News() {
  return (
    <div className="lg:mt-[78px] flex flex-col lg:mb-[120px] gap-8 lg:gap-32">
      <NewsSection
        title="Новости"
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
      <p className="font-spectral font-normal text-[14px] lg:text-[16px] leading-[20px] -tracking-[0.28px] lg:-tracking-[0.02em] p-2 lg:pl-3 lg:pb-3 lg:pt-0 lg:px-0">
        {title} →
      </p>
      <div className="flex flex-col gap-8 lg:gap-10">
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
    <div className="flex flex-col gap-0 border-t border-[#E7E9EF] p-2 lg:p-3">
      <p className="font-apercu font-normal text-[20px] lg:text-[28px] leading-6 lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em] opacity-30 lg:opacity-100">
        {item.source} <span className="lg:opacity-30">{item.date}</span>
      </p>
      <p className="font-spectral font-normal text-[20px] lg:text-[28px] leading-6 lg:leading-[32px] -tracking-[0.6px] lg:-tracking-[0.02em]">
        {item.title}
      </p>
    </div>
  );
}
