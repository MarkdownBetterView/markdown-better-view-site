import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Astro 6 Content Layer API: the legacy `type: 'content'` collections were
// removed, so the changelog is loaded with the `glob()` loader. Authoring is
// still "add a .md file to src/content/changelog/".
const changelog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/changelog' }),
  schema: z.object({
    version: z.string(),
    date: z.date(),
    title: z.string().optional(),
  }),
});

export const collections = { changelog };
