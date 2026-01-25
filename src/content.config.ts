import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const blog = defineCollection({
	// Load Markdown and MDX files in the `src/content/blog/` directory.
	loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const projects = defineCollection({
	loader: glob({ base: "./src/content/projects", pattern: "**/*.md" }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		role: z.string(),
		techStack: z.array(z.string()),
		startDate: z.coerce.date(),
		endDate: z.coerce.date().optional(),
		liveUrl: z.string().url().optional(),
		repoUrl: z.string().url().optional(),
		heroImage: z.string().optional(),
	}),
});

export const collections = { blog, projects };
