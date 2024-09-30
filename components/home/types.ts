export interface Project {
  id: string;
  title: string;
  slug: { current: string };
  image: {
    asset: {
      url: string;
    };
    alignment: "left" | "right";
  };
  cols: number;
  projectCodeName: string;
  secondImage?: {
    asset: {
      url: string;
    };
  };
  secondCodeName?: string;
  categories: Array<{ name: string }>;
  description: string;
  content: Array<{
    type: "text" | "image" | "video";
    text?: string;
    textPosition?: "left" | "right";
    image?: {
      asset: {
        url: string;
      };
    };
    imagePosition?: "center" | "right" | "left" | "full";
    secondaryImage?: {
      asset: {
        url: string;
      };
    };
    videoUrl?: string;
    videoThumbnail?: {
      asset: {
        url: string;
      };
    };
  }>;
  projectLabels: Array<{
    label: string;
    value: string;
  }>;
  connectedResearch?: {
    title: string;
    images: Array<{
      asset: {
        url: string;
      };
    }>;
    slug: { current: string };
  };
  relatedProjects: Array<{
    title: string;
    projectCodeName: string;
    slug: { current: string };
    image: {
      asset: {
        url: string;
      };
      alignment: "left" | "right";
    };
    categories: Array<{ _id: string; title: string }>;
  }>;
}

export interface HomeData {
  title: string;
  categories: { _id: string; name: string }[];
  featuredProjects: Project[];
}

export interface StudioPage {
  pageTitle: string;
  heroImage: {
    asset: {
      url: string;
    };
    hotspot?: boolean;
  };
  heroDescription: string;
  contactSection: {
    title: string;
    contacts: Array<{
      name: string;
      email: string;
    }>;
  };
  workDirections: {
    title: string;
    directions: Array<{
      name: string;
      details: string[];
    }>;
  };
  bottomImage: {
    asset: {
      url: string;
    };
    hotspot?: boolean;
  };
  bottomDescription: string;
  partnershipSection: {
    title: string;
    description: string;
    email: string;
  };
  clientsSection: {
    title: string;
    clients: string[];
  };
  partnersSection: {
    title: string;
    partners: string[];
  };
}