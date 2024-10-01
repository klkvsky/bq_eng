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
  connectedResearch?: Article;
  relatedProjects: Array<Project>;
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

export interface CulturePage {
  pageTitle: string;
  heroImage: {
    asset: {
      url: string;
    };
    hotspot?: {
      x: number;
      y: number;
    };
  };
  content: Array<ContentItem>;
  relatedArticles: Array<Article>;
}

export interface ContentItem {
  type: "text" | "image" | "columns" | "teamBlock";
  text?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  imagePosition?: "center" | "right" | "left" | "full";
  imageCaption?: string;
  teamBlock?: {
    title: string;
    teamMembers: Array<TeamMember>;
  };
  columns?: {
    width: "full" | "short";
    columnContent: Array<{
      title: string;
      items: Array<{
        type: "regular" | "email";
        text: string;
        email?: string;
      }>;
    }>;
  };
}

export interface TeamMember {
  name?: string;
  position?: string;
  quote?: string;
  image?: {
    asset: {
      url: string;
    };
  };
}

export interface Article {
  id: string;
  slug: { current: string };
  type: "digest" | "gallery" | "press-release" | "research";
  date: string;
  source?: string;
  pressReleaseCategory?: "magazines" | "bq";
  title: string;
  description?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  images?: Array<{
    asset: {
      url: string;
    };
  }>;
  content?: Array<ArticleContent>;
  connectedResearch?: Article;
  relatedArticles?: Array<Article>;
}

export interface ArticleContent {
  type: "text" | "image" | "video" | "quote" | "list";
  textTitle?: string;
  textSubtitle?: string;
  text?: string;
  image?: {
    asset: {
      url: string;
    };
  };
  imagePosition?: "right" | "left" | "full";
  imageCaption?: string;
  videoUrl?: string;
  videoThumbnail?: {
    asset: {
      url: string;
    };
  };
  quote?: string;
  quoteAuthor?: string;
  quoteAuthorPosition?: string;
  listTitle?: string;
  list?: string[];
}
