import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "Maxence Marques-Pierre",
  DESCRIPTION: "Welcome to my porfolio.",
  AUTHOR: "Maxence Marques-Pierre",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Places I have worked.",
}

// School Page
export const EDUCATION: Page = {
  TITLE: "Education",
  DESCRIPTION: "Places I have study.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Recent projects I have worked on.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all posts and projects by keyword.",
}

// Links
export const LINKS: Links = [
  { 
    TEXT: "Home", 
    HREF: "/", 
  },
  { 
    TEXT: "Work", 
    HREF: "/work", 
  },
  { 
    TEXT: "Education", 
    HREF: "/education", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "maxence.mp@icloud.com",
    HREF: "mailto:maxence.mp@icloud.com",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "MaxMarques",
    HREF: "https://github.com/MaxMarques"
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Maxence Marques-Pierre",
    HREF: "https://www.linkedin.com/in/maxence-marques-pierre/",
  }
]

