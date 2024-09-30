import { client } from "@/sanity/lib/client";
import ProjectsDisplay from "@/components/home/ProjectsDisplay";

// Updated query to fetch categories and projects with their associated category
const HOME_PAGE_QUERY = `*[_type == "home"][0]{
  title,
  categories[]->{
    _id,
    title
  },
  projects[]{
    type,
    mainImage,
    secondaryImage,
    text,
    secondaryText,
    cols,
    category->{
      _id,
      title
    }
  }
}`;

interface HomeData {
  title: string;
  categories: { _id: string; title: string }[];
  projects: {
    type: "left" | "right";
    mainImage: string;
    secondaryImage?: string;
    text: string;
    secondaryText?: string;
    cols: number;
    category: { _id: string; title: string };
  }[];
}

async function getData(): Promise<HomeData> {
  return client.fetch<HomeData>(
    HOME_PAGE_QUERY,
    {},
    {
      next: { revalidate: 30 },
    }
  );
}

export default async function Home() {
  const data = await getData();

  return (
    <div className="flex flex-col min-h-[90vh]">
      <h1 className="px-2 md:px-3 font-spectral text-[20px] md:text-[28px] xl:text-[36px] 2xl:text-[91.2px] font-normal leading-[24px] md:leading-[32px] xl:leading-[42px] 2xl:leading-[100.8px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] 2xl:-tracking-[2.736px]">
        {data.title}
        <br className="md:hidden" />
        <br className="md:hidden" />{" "}
        {data.categories.map((category, index, array) => (
          <>
            <span
              key={index}
              className="opacity-30 hover:opacity-100 transition-opacity font-apercu whitespace-nowrap cursor-pointer duration-500"
            >
              {category.title}
            </span>
            {index < array.length - 2 && ", "}
            {index === array.length - 2 && " и "}
          </>
        ))}
      </h1>

      <ProjectsDisplay data={data} />
    </div>
  );
}
