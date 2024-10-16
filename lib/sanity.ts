import { client } from "@/sanity/lib/client";
import imageUrlBuilder from "@sanity/image-url";

import {
  HomeData,
  StudioPage,
  CulturePage,
  Article,
  Position,
  ContactsPage,
  PrivacyPolicy,
} from "@/components/home/types";

const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
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
    { slug },
    {
      next: { revalidate: 30 },
    }
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

export async function getCultureData() {
  return client.fetch<CulturePage>(
    `*[_type == "culturePage"][0]{
      pageTitle,
      heroImage{
        asset->{
          url
        },
        hotspot
      },
      content[]{
        type,
        text,
        image{
          asset->{
            url
          }
        },
        imagePosition,
        imageCaption,
        teamBlock{
          title,
          teamMembers[]{
            name,
            position,
            quote,
            image{
              asset->{
                url
              }
            }
          }
        },
        columns{
          width,
          columnContent[]{
            title,
            items[]{
              type,
              text,
              email
            }
          }
        }
      },
      "relatedArticles": relatedArticles[]->{
        id,
        title,
        image{
          asset->{
            url
          }
        },
        slug,
        date,
        type
      }
    }`,
    {},
    {
      next: { revalidate: 30 },
    }
  );
}

export async function getArticles(limit: number = 100) {
  return client.fetch<Article[]>(
    `*[_type == "article"] | order(date desc)[0...$limit]{
      id,
      slug,
      type,
      date,
      source,
      pressReleaseCategory,
      title,
      description,
      image{
        asset->{
          url
        }
      },
      images[]{
        asset->{
          url
        }
      }
    }`,
    { limit },
    {
      next: { revalidate: 30 },
    }
  );
}

export async function getArticle(slug: string) {
  return client.fetch<Article>(
    `*[_type == "article" && slug.current == $slug][0]{
      id,
      slug,
      type,
      date,
      source,
      pressReleaseCategory,
      title,
      description,
      image{
        asset->{
          url
        }
      },
      images[]{
        asset->{
          url
        }
      },
      content[]{
        type,
        textTitle,
        textSubtitle,
        text,
        image{
          asset->{
            url
          }
        },
        imagePosition,
        imageCaption,
        videoUrl,
        videoThumbnail{
          asset->{
            url
          }
        },
        quote,
        quoteAuthor,
        quoteAuthorPosition,
        listTitle,
        list
      },
      connectedResearch->{
        _ref,
        _type
      },
      "relatedArticles": relatedArticles[]->{
        id,
        title,
        image{
          asset->{
            url
          }
        },
        slug,
        date,
        type
      }
    }`,
    { slug },
    {
      next: { revalidate: 30 },
    }
  );
}

export async function getArticleBySlug(slug: string) {
  return client.fetch(
    `*[_type == "article" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      type,
      date,
      source,
      pressReleaseCategory,
      description,
      images[]{
        asset->{
          url
        }
      },
      image{
        asset->{
          url
        }
      },
      content[]{
        ...,
        image{
          asset->{
            url
          }
        },
        videoThumbnail{
          asset->{
            url
          }
        }
      },
      relatedArticles[]->{
        id,
        slug,
        image{
          asset->{
            url
          }
        },
        title,
        source,
        date,
        type,
      },
      connectedResearch->{
        _ref,
        _type,
        slug,
        image{
          asset->{
            url
          }
        },
        title,
        type,
      }
    }`,
    { slug }
  );
}

export async function getPositions() {
  return client.fetch<Position[]>(`*[_type == "position"] {
    title,
    link
  }`);
}

export async function getContactsData() {
  return client.fetch<ContactsPage>(
    `*[_type == "contactsPage"][0]{
      pageTitle,
      columns[]{
        title,
        items[]{
          type,
          text,
          email,
          link
        }
      },
      width
    }`,
    {},
    {
      next: { revalidate: 30 },
    }
  );
}

export async function getPrivacyPolicy() {
  return client.fetch<PrivacyPolicy>(
    `*[_type == "privacyPolicy"][0]{
      content[]{
        type,
        title,
        subtitle,
        textTitle,
        text,
        listTitle,
        list,
        pretext,
        posttext
      }
    }`,
    {},
    {
      next: { revalidate: 30 },
    }
  );
}
