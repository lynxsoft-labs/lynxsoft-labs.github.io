import type { Site, Page, Links, Socials } from "@types"

// Global
export const SITE: Site = {
  TITLE: "LYNXSOFT",
  DESCRIPTION: "Software Development & Technical Consulting by Nicolas Luyckx.",
  AUTHOR: "Nicolas Luyckx",
}

// Work Page
export const WORK: Page = {
  TITLE: "Work",
  DESCRIPTION: "Overview of professional engagements, software consulting, and technical leadership.",
}

// Blog Page
export const BLOG: Page = {
  TITLE: "Blog",
  DESCRIPTION: "Articles on software engineering, modeling & simulation platforms, and other tools.",
}

// Projects Page 
export const PROJECTS: Page = {
  TITLE: "Projects",
  DESCRIPTION: "Software solutions, simulation frameworks, and open-source packages maintained by LYNXSOFT.",
}

// Search Page
export const SEARCH: Page = {
  TITLE: "Search",
  DESCRIPTION: "Search all articles, packages, and projects by keyword.",
}

// Links (Header Navigation)
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
    TEXT: "Blog", 
    HREF: "/blog", 
  },
  { 
    TEXT: "Projects", 
    HREF: "/projects", 
  },
]

// Socials & Contact
export const SOCIALS: Socials = [
  { 
    NAME: "Email",
    ICON: "email", 
    TEXT: "nicolas.luyckx@lynxsoft.be",
    HREF: "mailto:nicolas.luyckx@lynxsoft.be",
  },
  { 
    NAME: "Github",
    ICON: "github",
    TEXT: "lynxsoft-labs",
    HREF: "https://github.com/lynxsoft-labs",
  },
  { 
    NAME: "LinkedIn",
    ICON: "linkedin",
    TEXT: "Nicolas Luyckx",
    HREF: "https://www.linkedin.com/in/nicolas-luyckx-92547332/",
  },
]