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
    badge: z.string().optional(),
    badgeBg: z.string().optional(),
    badgeImage: z.string().optional(),
    imageBg: z.string(),
    image: z.string(),
    imageTitle: z.string().optional(),
    linkedinUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    jobsUrl: z.string().optional(),
    whyInvestedUrl: z.string().optional(),
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
    linkedinUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    languages: z.array(z.string()),
    logos: z.array(z.string()),
    order: z.number(),
  }),
});

const partners = defineCollection({
  type: "content",
  schema: z.object({
    name: z.string(),
    image: z.string(),
    url: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  news,
  portfolio,
  team,
  partners,
};