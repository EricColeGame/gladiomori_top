export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Gladio Mori Wiki",
  shortName: "Gladio Mori",
  logoText: "GM",
  tagline: "Physics-Based Gladiator Combat, Weapons, Movesets & Armor",
  description: "Gladio Mori is a physics-driven gladiator fighting game with organ-based damage, customizable movesets, brutal weapon combat, and up to four-player cross-platform PvP.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://gladiomori.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://gladiomori.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://store.steampowered.com/app/2689120/Gladio_Mori/",
  heroVideoId: "VqC5SpypaOg", // Gladio Mori Official Release Window Trailer
  social: {
    discord: "https://discord.gg/gladiomori",
    youtube: "https://www.youtube.com/watch?v=VqC5SpypaOg",
  },
  locales: ["en", "de", "es", "ja"],
  defaultLocale: "en",
};
