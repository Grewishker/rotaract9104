/**
 * Centralized theme configuration
 * Update the theme name here to apply across all pages
 */
export const THEME = {
  name: "Create Lasting Impact",
  shortName: "Create Lasting Impact",
} as const;

export type ThemeName = typeof THEME.name;