export interface NavigationItem {
  key: string;
  path: `/${string}`;
  isContentType: boolean;
}

export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", isContentType: true },
  { key: "mechanics", path: "/mechanics", isContentType: true },
  { key: "combat", path: "/combat", isContentType: true },
  { key: "items", path: "/items", isContentType: true },
  { key: "modes", path: "/modes", isContentType: true },
  { key: "controls", path: "/controls", isContentType: true },
  { key: "platforms", path: "/platforms", isContentType: true },
] satisfies readonly NavigationItem[];

export const CONTENT_TYPES = NAVIGATION_CONFIG.filter((item) => item.isContentType).map((item) =>
  item.path.replace(/^\//, ""),
);
