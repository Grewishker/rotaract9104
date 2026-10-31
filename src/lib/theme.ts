/**
 * Centralized theme and branding configuration.
 * Update these values once to apply them consistently across the site.
 */
export const THEME = {
  name: "Create Lasting Impact",
  shortName: "Create Lasting Impact",
  siteName: "Rotaract District 9104",
  siteTitle: "Rotaract District 9104 | Ghana • Region 27 Zone 22",
  tagline: "Service Above Self — empowering young leaders across Ghana through Rotaract.",
  rotaryYear: "2026-27",
  rotaryYearLabel: "Rotary Year 2026–27",
  copyrightYear: "2026",
  siteUrl: "https://rotaractdistrict9104.org",
  socialImage: "/favicon.ico",
} as const;

export const PAGE_METADATA = {
  "/": {
    title: `${THEME.siteName} | Home`,
    description: `${THEME.siteName} is the official district website for Rotary and Rotaract updates, service opportunities, projects, and leadership in Ghana.`,
  },
  "/about/rotary-international": {
    title: `About Rotary International | ${THEME.siteName}`,
    description: "Discover Rotary International’s mission, values, and the opportunity to serve through Rotaract in Ghana.",
  },
  "/about/rotaract": {
    title: `About Rotaract | ${THEME.siteName}`,
    description: "Learn about Rotaract’s service-led community, professional development, and leadership opportunities across District 9104.",
  },
  "/about/district-9104": {
    title: `About District 9104 | ${THEME.siteName}`,
    description: "Explore the structure, values, and service impact of Rotaract District 9104.",
  },
  "/about/drr": {
    title: `District Rotaract Representative | ${THEME.siteName}`,
    description: "Meet the District Rotaract Representative and learn about district leadership and district-wide initiatives.",
  },
  "/about/team": {
    title: `District Leadership Team | ${THEME.siteName}`,
    description: "Meet the leaders and committees shaping Rotaract District 9104’s service and growth.",
  },
  "/projects/signature": {
    title: `Signature Projects | ${THEME.siteName}`,
    description: "Read about the district’s flagship signature projects and their impact across communities in Ghana.",
  },
  "/projects/club-projects": {
    title: `Club Projects | ${THEME.siteName}`,
    description: "See the inspiring projects led by Rotaract clubs across District 9104.",
  },
  "/projects/professional-dev": {
    title: `Professional Development | ${THEME.siteName}`,
    description: "Find professional-development resources, events, and opportunities for Rotaractors in District 9104.",
  },
  "/projects/service-notices": {
    title: `Service Notices | ${THEME.siteName}`,
    description: "Stay informed with service notices, volunteer opportunities, and community engagement updates.",
  },
  "/media/blog": {
    title: `District Blog | ${THEME.siteName}`,
    description: "Read stories, reflections, and updates from Rotaract District 9104’s members and projects.",
  },
  "/media/gallery": {
    title: `Photo Gallery | ${THEME.siteName}`,
    description: "Browse gallery highlights from district events, service projects, and memorable moments.",
  },
  "/media/flyers": {
    title: `Event Flyers | ${THEME.siteName}`,
    description: "Download event flyers, notices, and promotional materials from Rotaract District 9104.",
  },
  "/media/videos": {
    title: `Videos | ${THEME.siteName}`,
    description: "Watch district videos, highlights, and institutional content from Rotaract District 9104.",
  },
  "/events/dlac": {
    title: `DLAC 2027 | ${THEME.siteName}`,
    description: "Learn about the District Leadership and Capacity-building event for Rotaract District 9104.",
  },
  "/events/calendar": {
    title: `Event Calendar | ${THEME.siteName}`,
    description: "Browse the district event calendar for club programs, leadership gatherings, and service initiatives.",
  },
  "/contact/club-locator": {
    title: `Club Locator | ${THEME.siteName}`,
    description: "Find Rotaract clubs and contact points across District 9104 with the club locator.",
  },
  "/contact": {
    title: `Contact Us | ${THEME.siteName}`,
    description: "Get in touch with Rotaract District 9104 for collaboration, inquiries, and support.",
  },
  "/donate": {
    title: `Donate | ${THEME.siteName}`,
    description: "Support Rotaract District 9104’s projects and service initiatives through donations.",
  },
  "/join": {
    title: `Join Rotaract | ${THEME.siteName}`,
    description: "Learn how to join Rotaract and become part of the service-driven network in District 9104.",
  },
} as const;

export type ThemeName = typeof THEME.name;