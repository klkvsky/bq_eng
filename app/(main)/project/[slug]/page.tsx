import { Metadata } from "next";

import { urlFor, getProject } from "@/lib/sanity";

import { ArticleText } from "@/components/article/Text";
import { ArticleImage } from "@/components/article/Image";

import PageTitle from "@/components/PageTitle";
import RelatedItems from "@/components/RelatedItems";

import type { Project } from "@/components/home/types";

import Link from "next/link";
import Image from "next/image";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project: Project = await getProject(params.slug);
  return {
    title: `${project.title} | BQ`,
    description: project.description || "BQ",
    openGraph: {
      title: project.title,
      description: project.description || "BQ",
      images: project.image ? [urlFor(project.image.asset.url).url()] : [],
    },
  };
}

export const revalidate = 0;

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project: Project = await getProject(params.slug);

  // Extract all image URLs from the project content
  const allImages = project.content
    .filter((item) => item.type === "image")
    .map((item) =>
      item.image?.asset.url ? urlFor(item.image.asset.url).url() : ""
    )
    .filter(Boolean);

  return (
    <div className="flex flex-col relative">
      <PageTitle
        title={project.description}
        projectPrefix={`${project.title}.`}
        categories={[]}
      />
      <div className="flex flex-col items-center pb-10 xl:pb-20 gap-20 xl:gap-40 mt-10 xl:mt-20">
        {project.content.map((item, index) => {
          if (item.type === "text") {
            return (
              <ArticleText
                key={index}
                text={item.text || ""}
                type={item.textPosition || "left"}
              />
            );
          } else if (item.type === "image") {
            return (
              <ArticleImage
                key={index}
                src={
                  item.image?.asset.url
                    ? urlFor(item.image.asset.url).url()
                    : ""
                }
                type={item.imagePosition || "center"}
                secondaryImage={
                  item.secondaryImage
                    ? urlFor(item.secondaryImage.asset.url).url()
                    : undefined
                }
                title={project.title}
                allImages={allImages}
              />
            );
          }
        })}
      </div>
      <div className="flex flex-row w-full border-t border-[#E7E9EF] pt-3 md:mb-40 max-md:gap-[12.5vw]">
        <p
          className="max-md:min-w-[calc(2*12.5vw)] max-md:pl-2 font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] md:w-[calc(3*8.33vw)] md:pl-3 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]"
          id="project-about"
        >
          О проекте
        </p>
        <div className="flex flex-col items-start w-full">
          <div className="flex flex-col gap-5 w-[calc(5*12.5vw)] md:gap-10 md:w-[calc((4.5*8.33vw)-3px)] md:max-xl:-ml-2 ">
            {project.projectLabels
              .reduce<Array<Array<{ label: string; value: string }>>>(
                (acc, label, index) => {
                  if (index % 4 === 0) acc.push([]);
                  acc[acc.length - 1].push(label);
                  return acc;
                },
                []
              )
              .map((group, groupIndex) => (
                <div key={groupIndex} className="flex flex-col gap-2 md:gap-3">
                  {group.map((label, index) => (
                    <div
                      key={index}
                      className="flex flex-col text-[16px] font-normal leading-5 -tracking-[0.32px] 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]"
                    >
                      <p className="font-apercu">{label.label}:</p>
                      <p className="font-spectral">{label.value}</p>
                    </div>
                  ))}
                </div>
              ))}
          </div>
          {project.connectedResearch && (
            <Link
              href={`/knowledge/${project.connectedResearch.slug.current}`}
              className="flex max-md:flex-col-reverse flex-col max-md:mt-10 gap-3 w-[calc(4*12.5vw)] md:w-3/12 xl:w-[calc(2*8.33vw)] xl:ml-auto xl:mr-3 md:max-xl:ml-auto md:max-xl:mr-3"
            >
              <Image
                src={project.connectedResearch?.images?.[0]?.asset.url || ""}
                width={0}
                height={0}
                alt={project.connectedResearch?.title || ""}
                className="w-full h-auto"
                unoptimized
              />
              <p className="font-apercu text-[16px] font-normal leading-5 -tracking-[0.32px] 2xl:text-[38px] 2xl:leading-[48px] 2xl:-tracking-[0.76px]">
                {project.connectedResearch.title}
              </p>
            </Link>
          )}
        </div>
      </div>
      {project.relatedProjects && (
        <div className="flex flex-col w-full max-xl:mb-14">
          <RelatedItems
            title="Больше материалов"
            items={project.relatedProjects}
          />
        </div>
      )}
    </div>
  );
}
