import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    tag: z.string(),
    date: z.coerce.date(),
    minRead: z.string(),
    image: z.string(),
  }),
});

const portfolio = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    category: z.string(),
    founders: z.string(),
    description: z.string(),
    mission: z.string(),
    coInvestors: z.string(),
    badge: z.string(),
    badgeBg: z.string(),
    imageBg: z.string(),
    image: z.string(),
    imageTitle: z.string().optional(),
  }),
});

const team = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    role: z.string(),
    group: z.string(),
    image: z.string(),
    alt: z.string(),
    bio: z.string(),
    bioHighlight: z.string().optional(),
    location: z.string(),
    linkedinUrl: z.string().optional().default("#"),
    websiteUrl: z.string().optional().default("#"),
    languages: z.array(z.string()),
    logos: z.array(z.string()),
    order: z.number().optional().default(0),
  }),
});

export const collections = {
  news,
  portfolio,
  team,
};