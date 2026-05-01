import * as z from 'zod';

// Product schema (pseudoAPI)
export const ProductSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    previewImage: z.array(z.string()),
    color: z.array(z.tuple([z.string(), z.string()])),
    shortDescription: z.string(),
    fullDescription: z.string(),
    size: z.array(z.tuple([z.string(), z.string()])),
})

export const ProductsSchema = z.array(ProductSchema);

export type Product = z.infer<typeof ProductSchema>;