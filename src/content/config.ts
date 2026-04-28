import { defineCollection, z } from "astro:content";

const productos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    description: z.string(),
    headline: z.string().optional(),
    image: z.string().optional(),
    category: z.string().optional(),
    features: z.array(z.string()).default([]),
    cta: z.string().default("Solicitar cotizacion")
  })
});

export const collections = { productos };
