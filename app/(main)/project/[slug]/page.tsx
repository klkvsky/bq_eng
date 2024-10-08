import { urlFor, getProject } from "@/lib/sanity";

import { ArticleText } from "@/components/article/Text";
import { ArticleImage } from "@/components/article/Image";

import PageTitle from "@/components/PageTitle";
import RelatedItems from "@/components/RelatedItems";

import type { Project } from "@/components/home/types";

import Link from "next/link";
import Image from "next/image";

export default async function Project({
  params,
}: {
  params: { slug: string };
}) {
  const project: Project = await getProject(params.slug);

  return (
    <div className="flex flex-col relative">
      <PageTitle
        title={project.description}
        projectPrefix={`${project.title}.`}
        categories={[]}
      />
      <div className="flex flex-col items-center pb-20 gap-40 mt-20">
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
              />
            );
          }
        })}
      </div>
      <div className="flex flex-row w-full border-t border-[#E7E9EF] pt-3 mb-40">
        <p
          className="font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] w-[calc(3*8.33vw)] pl-3"
          id="project-about"
        >
          О проекте
        </p>
        <div className="flex flex-col gap-10 w-[calc((4.5*8.33vw)-3px)]">
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
              <div key={groupIndex} className="flex flex-col gap-3">
                {group.map((label, index) => (
                  <div
                    key={index}
                    className="flex flex-col text-[16px] font-normal leading-5 -tracking-[0.32px]"
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
            href={`/knowledge?article=${project.connectedResearch.slug.current}`}
            className="flex flex-col gap-3 w-[calc(2*8.33vw)] ml-auto mr-3"
          >
            <Image
              src={project.connectedResearch?.images?.[0]?.asset.url || ""}
              width={0}
              height={0}
              alt={project.connectedResearch?.title || ""}
              className="w-full h-auto"
              unoptimized
            />
            <p className="font-apercu text-[16px] font-normal leading-5 -tracking-[0.32px]">
              {project.connectedResearch.title}
            </p>
          </Link>
        )}
      </div>
      {project.relatedProjects && (
        <div className="flex flex-col w-full max-xl:mb-14">
          <RelatedItems
            title="Похожие проекты"
            items={project.relatedProjects}
          />
        </div>
      )}
    </div>
  );
}
