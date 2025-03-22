import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Iskandar PRO MK.",
  DESCRIPTION: "Tentang aku dan Kamu.",
  EMAIL: "trevortylerlee@gmail.com",
  NUM_POSTS_ON_HOMEPAGE: 5,
  NUM_PROJECTS_ON_HOMEPAGE: 3,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Tentang aku dan kamu.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION: "Koleksi tulisan sehari-hari.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my projects.",
};

export const SOCIALS: Socials = [
  {
    NAME: "X (formerly Twitter)",
    HREF: "https://twitter.com/moomoonmyid",
  },
  {
    NAME: "GitHub",
    HREF: "https://github.com/fooiskandar",
  },
  {
    NAME: "Website",
    HREF: "https://iskandar.pro.mk",
  },
];
