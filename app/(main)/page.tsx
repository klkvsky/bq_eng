import ProjectsDisplay from "@/components/home/ProjectsDisplay";
import PageTitle from "@/components/PageTitle";

import { getHomeData } from "@/lib/sanity";

export default async function Home() {
  const data = await getHomeData();
  return (
    <div className="flex flex-col min-h-[100vh]">
      <PageTitle title={data.title} categories={data.categories} />
      <ProjectsDisplay data={data} />
    </div>
  );
}
