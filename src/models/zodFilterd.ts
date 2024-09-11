import { z } from 'zod';

export const ZodSchemeFiltered = z.object({
  id: z.number(),
  title: z.string().nullable(),
});

export type TZodFiltered = z.infer<typeof ZodSchemeFiltered>;