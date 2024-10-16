import PageTitle from "@/components/PageTitle";
import { cn } from "@/lib/utils";

import Image from "next/image";

import { getPositions, getStudioData } from "@/lib/sanity";
import { Position, StudioPage } from "@/components/home/types";

import { urlFor } from "@/lib/sanity";
import React from "react";
import Link from "next/link";

export default async function Home() {
  const data: StudioPage = await getStudioData();
  const positions: Position[] = await getPositions();
  return (
    <div className="flex flex-col">
      <PageTitle title={data.heroDescription} categories={[]} />
      <div className="flex flex-col items-end mt-[32px] md:mt-[24px] xl:mt-[80px]">
        <div className="custom-shadow-left md:after:hidden xl:after:block relative w-[calc(7*12.5vw)] md:w-full xl:w-[calc(9*8.33vw)] h-auto bg-red-500">
          <Image
            src={urlFor(data.heroImage.asset.url).url()}
            alt="project-1"
            width={0}
            height={0}
            unoptimized
            className={cn(
              "w-[calc(7*12.5vw)] md:w-screen xl:w-[calc(9*8.33vw)] h-auto"
            )}
          />
        </div>
        <p
          className={cn(
            "font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] mt-[16px] md:mt-[24px] xl:mt-[24px] px-2 md:px-3 xl:pl-0",
            "w-full xl:w-[calc(9*8.33vw)]"
          )}
        >
          {data.heroDescription}
        </p>

        <div className="flex flex-col md:flex-row mt-[32px] md:mt-[24px] xl:mt-[80px] px-2 md:px-3 xl:pr-[calc(0.5*8.33vw)] xl:pl-0 gap-[16px] md:gap-[calc(0.5*8.33vw)] w-full xl:w-[calc(9*8.33vw)]">
          <div
            className="flex flex-col max-sm:gap-[16px] w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]"
            id="positions"
          >
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em] max-sm:mt-[8px]">
              {data.contactSection.title}
            </p>
            {data.contactSection.contacts.map((contact) => (
              <div
                className="flex flex-col gap-0 mt-3 xl:mt-[24px] font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]"
                key={contact.name}
              >
                <p className="font-spectral">{contact.name}</p>
                <a
                  href={`mailto:${contact.email}`}
                  className="font-apercu opacity-30"
                >
                  {contact.email}
                </a>
              </div>
            ))}
          </div>
          <div className="flex flex-col w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.28px] xl:-tracking-[0.02em]">
              {data.workDirections.title}
            </p>
            <div className="flex flex-col mt-3 xl:mt-6 font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em] gap-3 xl:gap-6">
              {data.workDirections.directions.map((direction) => (
                <div
                  key={direction.name}
                  className="flex flex-col gap-px font-normal text-[20px] xl:text-[28px] leading-[24px] xl:leading-[32px] -tracking-[0.6px] xl:-tracking-[0.02em]"
                >
                  <p className="font-spectral">{direction.name}</p>
                  <p className="font-spectral opacity-30">
                    {direction.details.map((detail, index) => (
                      <React.Fragment key={index}>
                        {detail}
                        {index < direction.details.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Image
        src={urlFor(data.bottomImage.asset.url).url()}
        alt="project-1"
        width={0}
        height={0}
        style={{
          width: "100vw",
          height: "auto",
        }}
        className="mt-[80px] md:mt-[160px]"
        unoptimized
      />
      <h1 className="font-spectral font-normal text-[20px] md:text-[28px] xl:text-[38px] leading-[24px] md:leading-[32px] xl:leading-[42px] -tracking-[0.6px] md:-tracking-[0.84px] xl:-tracking-[0.03em] px-2 md:px-3 mt-4 md:mt-6">
        {data.bottomDescription}
      </h1>
      <div className="flex flex-col md:flex-row justify-between mt-[32px] md:mt-20 xl:mt-[80px] gap-4 xl:gap-0 px-2 md:px-3 xl:pl-3 xl:pr-[calc(0.5*8.33vw)]">
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]">
          <div className="flex flex-col gap-3 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)]">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
              {data.partnershipSection.title}
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              {data.partnershipSection.description.replace(/\s+\S+\s+\S+$/, "")}
              <br className="hidden xl:block" />{" "}
              {data.partnershipSection.description
                .split(" ")
                .slice(-2)
                .join(" ")}
              <br className="hidden md:block xl:hidden" />
              <a
                href={`mailto:${data.partnershipSection.email}`}
                className="font-spectral xl:font-apercu font-normal opacity-100 xl:opacity-30 md:pl-0 xl:pl-1 pl-1"
              >
                {data.partnershipSection.email}
              </a>
            </p>
          </div>
          {positions && positions.length > 0 && (
            <div className="flex flex-col gap-0 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(6*8.33vw)]">
              <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
                {positions.length} открыт{positions.length === 1 ? "а" : "ы"}
                {positions.length === 1 ? "я" : "х"} позици
                {positions.length === 1 ? "я" : "и"}
              </p>
              {positions.map((position) => (
                <Link
                  href={position.link}
                  target="_blank"
                  key={position.title}
                  className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em] hover:opacity-30 transition-opacity duration-500 group"
                >
                  {position.title}
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    ↗
                  </span>
                </Link>
              ))}
            </div>
          )}
        </div>
        <div className="flex flex-col gap-4 md:gap-6 xl:gap-10 w-full md:w-[calc(5*8.33vw)] xl:w-[calc(4*8.33vw)]">
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
              {data.clientsSection.title}
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              {data.clientsSection.clients.map((client, index) => (
                <React.Fragment key={index}>
                  {client}
                  {index < data.clientsSection.clients.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <p className="font-apercu font-normal text-[14px] xl:text-[16px] leading-[20px] xl:leading-[20px] -tracking-[0.02em]">
              {data.partnersSection.title}
            </p>
            <p className="font-spectral font-normal text-[20px] md:text-[24px] xl:text-[28px] leading-[24px] md:leading-[28px] xl:leading-[32px] -tracking-[0.6px] md:-tracking-[0.48px] xl:-tracking-[0.02em]">
              {data.partnersSection.partners.map((partner, index) => (
                <React.Fragment key={index}>
                  {partner}
                  {index < data.partnersSection.partners.length - 1 && <br />}
                </React.Fragment>
              ))}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
