"use client";

import Image from "next/image";
import { urlFor, getProject } from "@/lib/sanity";

import { ArticleText } from "../article/Text";
import { ArticleImage } from "../article/Image";
import PageTitle from "../PageTitle";
import Footer from "../Footer";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

import { AnimatePresence, motion } from "framer-motion";

import { Project } from "@/components/home/types";
import Link from "next/link";

export default function ProjectPage() {
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const [project, setProject] = useState<Project | null>(null);
  const searchParams = useSearchParams();

  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const slug = searchParams.get("project");
    setIsSheetOpen(slug !== null);

    if (slug !== null) {
      document.body.style.overflow = "hidden";
      fetchProject(slug);
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [searchParams]);

  const fetchProject = async (slug: string) => {
    const projectData = await getProject(slug);
    setProject(projectData);
  };

  if (!project) return null;

  return (
    <AnimatePresence mode="sync">
      {isSheetOpen && (
        <motion.div
          className="fixed top-0 left-0 h-full max-h-screen w-full z-50"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1 }}
          tabIndex={0}
        >
          <div className="relative w-full h-full custom-shadow-top" />
        </motion.div>
      )}
      {isSheetOpen && (
        <motion.div
          id="project-page"
          className="fixed top-0 left-0 h-full max-h-screen bg-white md:pb-0 overflow-y-auto w-full z-50 pt-[44px]"
          initial={{ y: "100%" }}
          animate={{ y: "0%" }}
          exit={{ y: "100%" }}
          transition={{ duration: 1 }}
          tabIndex={0}
        >
          <div
            className="flex flex-col"
            style={{
              opacity: isVisible ? 1 : 0,
              transition: "opacity 0.5s ease-in-out",
            }}
          >
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
              <p className="font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] w-[calc(3*8.33vw)] pl-3">
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
                <div className="flex flex-col gap-3 w-[calc(2*8.33vw)] ml-auto mr-3">
                  <Image
                    src={urlFor(
                      project.connectedResearch.images[0].asset.url
                    ).url()}
                    width={0}
                    height={0}
                    alt={project.connectedResearch.title}
                    className="w-full h-auto"
                    unoptimized
                  />
                  <p className="font-apercu text-[16px] font-normal leading-5 -tracking-[0.32px]">
                    {project.connectedResearch.title}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col w-full max-xl:mb-14">
              <p className="font-apercu font-normal text-[16px] leading-5 -tracking-[0.32px] pl-3 w-full border-b border-[#E7E9EF] pb-3">
                Похожие проекты
              </p>
              <div className="flex flex-row w-full items-center justify-center gap-20 mt-40">
                {project.relatedProjects &&
                  project.relatedProjects.map((relatedProject, index) => (
                    <Link
                      href={`/?project=${relatedProject.slug.current}`}
                      key={index}
                      className="w-[calc(2*8.33vw)] min-h-[360px] relative group cursor-pointer"
                      onClick={() => {
                        setIsVisible(false);
                        const projectPage =
                          document.getElementById("project-page");
                        if (projectPage) {
                          projectPage.scrollTo({
                            top: 0,
                            behavior: "smooth",
                          });
                          projectPage.addEventListener(
                            "scroll",
                            function scrollListener() {
                              if (projectPage.scrollTop === 0) {
                                setTimeout(() => {
                                  setIsVisible(true);
                                }, 500);
                                projectPage.removeEventListener(
                                  "scroll",
                                  scrollListener
                                );
                              }
                            }
                          );
                        }
                      }}
                    >
                      <Image
                        src={urlFor(relatedProject.image.asset.url).url()}
                        width={0}
                        height={0}
                        alt={relatedProject.title}
                        className="w-full object-cover"
                        unoptimized
                      />
                      <div className="xl:absolute xl:left-0 xl:top-0 w-full h-full xl:bg-white xl:opacity-0 transition-opacity xl:custom-shadow-right-no-margin xl:group-hover:opacity-100 flex md:flex-row-reverse xl:flex-col flex-col-reverse max-xl:justify-end">
                        <p className="font-apercu font-normal text-[14px] md:text-[28px] xl:text-[16px] 2xl:text-[32px] leading-[20px] md:leading-[32px] xl:leading-[20px] 2xl:leading-[40px] -tracking-[0.28px] md:-tracking-[0.56px] xl:-tracking-[0.02em] xl:pt-3 2xl:pt-6 md:pl-[calc(2*8.33vw)] xl:pl-0">
                          {relatedProject.title} <br className="xl:hidden" />
                          <span className="opacity-30">
                            {relatedProject.categories
                              .map((cat) => cat.title)
                              .join(", ")}
                          </span>
                        </p>
                        <p className="font-apercu font-normal text-[14px] md:text-[28px] 2xl:text-[32px] leading-[20px] md:leading-[32px]  2xl:leading-[40px] -tracking-[0.28px] md:-tracking-[0.56px] xl:-tracking-[0.02em] xl:mt-auto xl:pb-1 2xl:pb-3">
                          {relatedProject.projectCodeName}
                        </p>
                      </div>
                    </Link>
                  ))}
              </div>
              <Footer />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
