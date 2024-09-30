import { client } from "@/sanity/lib/client";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";

import { HomeData, StudioPage } from "@/components/home/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export async function getHomeData() {
  return client.fetch<HomeData>(
    `*[_type == "home"][0]{
      title,
      categories[]->{
        _id,
        name
      },
      featuredProjects[]->{
        _id,
        title,
        slug,
        image {
          asset->,
          alignment
        },
        cols,
        projectCodeName,
        secondImage {
          asset->
        },
        secondCodeName,
        categories[]->{name},
        description,
        content[]{
          type,
          text,
          textPosition,
          image{asset->},
          imagePosition,
          secondaryImage{asset->},
          videoUrl,
          videoThumbnail{asset->}
        },
        projectLabels[]{
          label,
          value
        },
        connectedResearch->{
          title,
          slug
        },
        relatedProjects[]->{
          title,
          slug,
          image{
            asset->,
            alignment
          },
          categories[]->{name}
        }
      }
    }`,
    {},
    {
      next: { revalidate: 30 },
    }
  );
}

export async function getProject(slug: string) {
  return client.fetch(
    `*[_type == "project" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      image{
        asset->,
        alignment
      },
      cols,
      projectCodeName,
      secondImage{
        asset->
      },
      secondCodeName,
      categories[]->{name},
      description,
      content[]{
        type,
        text,
        textPosition,
        image{asset->},
        imagePosition,
        secondaryImage{asset->},
        videoUrl,
        videoThumbnail{asset->}
      },
      projectLabels[]{
        label,
        value
      },
      connectedResearch->{
        title,
        images[]{
          asset->
        },
        slug
      },
      relatedProjects[]->{
        title,
        projectCodeName,
        slug,
        image{
          asset->,
          alignment
        },
        categories[]->{name}
      }
    }`,
    { slug }
  );
}

export async function getCategories() {
  return client.fetch(`*[_type == "category"] { name, _id }`);
}

export async function getStudioData() {
  return client.fetch<StudioPage>(
    `*[_type == "studioPage"][0]{
      pageTitle,
      heroImage{
        asset->{
          url
        },
        hotspot
      },
      heroDescription,
      contactSection{
        title,
        contacts[]{
          name,
          email
        }
      },
      workDirections{
        title,
        directions[]{
          name,
          details
        }
      },
      bottomImage{
        asset->{
          url
        },
        hotspot
      },
      bottomDescription,
      partnershipSection{
        title,
        description,
        email
      },
      clientsSection{
        title,
        clients
      },
      partnersSection{
        title,
        partners
      }
    }`,
    {},
    {
      next: { revalidate: 30 },
    }
  );
}