import { defineCollection, z } from "astro:content";

const news = defineCollection({
  type: "content",
  schema: z.object({
    order: z.number(),
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
    twitterUrl: z.string().optional(),
    websiteUrl: z.string().optional(),
    jobsUrl: z.string().optional(),
    whyInvestedUrl: z.string().optional(),
    order: z.number(),
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
    emailUrl: z.string().optional(),
    languages: z.array(z.string()).optional(),
    logos: z.array(
      z.object({
        name: z.string(),
        image: z.string(),
      })
    ),
    order: z.number(),
  }),
});

const snapshots = defineCollection({
  type: "content",
  schema: z.object({
    image: z.string(),
    caption: z.string(),
    order: z.coerce.date(),
  }),
});

const testimonials = defineCollection({
  type: "content",
  schema: z.object({
    company: z.string(),
    category: z.string(),
    quote: z.string(),
    name: z.string(),
    role: z.string(),
    logo: z.string().optional(),
    image: z.string(),
    order: z.number().optional(),
  }),
});

export const collections = {
  news,
  portfolio,
  team,
  snapshots,
  testimonials,
};