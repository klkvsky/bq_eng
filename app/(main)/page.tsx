import { Metadata } from "next";

import ProjectItem from "@/components/home/Projects-Item";
import PageTitle from "@/components/PageTitle";

import { getHomeData } from "@/lib/sanity";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Проекты | BQ",
  description: "Проекты | BQ",
};

export default async function Home() {
  const data = await getHomeData();

  return (
    <div className="flex flex-col min-h-[100vh]">
      <div
        style={{
          viewTransitionName: "projectsTitle",
        }}
      >
        <PageTitle title={data.title} categories={data.categories} />
      </div>
      <div
        className={cn(
          "flex flex-col transition-opacity duration-1000 gap-[80px] md:gap-[160px]  mt-[48px] md:mt-20 xl:mt-[189px] "
        )}
      >
        {data.featuredProjects.map((item, index) => (
          <ProjectItem key={index} project={item} displayMode="gallery" />
        ))}
      </div>
    </div>
  );
}
