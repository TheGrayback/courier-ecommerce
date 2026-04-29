import { CartStateSchema } from "@/types/cart.types";

export function getItemBaseID(variantID: string) {
    return variantID.split('-')[0];
}

export function parseCartState(value: unknown) {
    return CartStateSchema.safeParse(value);
}