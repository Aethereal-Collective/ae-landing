import { defineCollection, defineContentConfig, z } from "@nuxt/content";
import { asSitemapCollection } from "@nuxtjs/sitemap/content";

export default defineContentConfig({
	collections: {
		blog: defineCollection(
			asSitemapCollection({
				type: "page",
				source: "blog/*.md",
				schema: z.object({
					date: z.string(),
					topic: z.string(),
					summary: z.string(),
					cover: z.string().optional(),
					featured: z.boolean().optional(),
					disclosure: z.string().optional(),
					source: z.string().optional(),
				}),
			},
			// Posts canonical to Medium stay out of our sitemap.
			{ name: "blog", filter: (entry: { source?: string }) => !entry.source },
			),
		),
	},
});
