import { z } from "zod";

export const ZodScheme = z.object({
    id: z.number(),
    artist_title: z.string().nullable(),
    date_start: z.number().nullable(),
    date_end: z.number().nullable(),
    place_of_origin: z.string().nullable(),
    title: z.string().nullable(),
    description: z.string().nullable(),
    image_id: z.string().nullable()
})

export type TZod = z.infer<typeof ZodScheme>