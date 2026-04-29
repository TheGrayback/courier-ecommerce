import * as z from 'zod';

// CartItem Schema
export const CartItemSchema = z.object({
    id: z.string(),
    name: z.string(),
    price: z.number(),
    quantity: z.number(),
    previewImage: z.string(),
});

export type CartItem = z.infer<typeof CartItemSchema>;

// CartState Schema
export const CartStateSchema = z.object({
    items: z.array(CartItemSchema),
});

export type CartState = z.infer<typeof CartStateSchema>;

// Reducer Actions Schema
type AddItemAction = {
    type: 'ADD_ITEM';
    payload: CartItem;
};

type RemoveItemAction = {
    type: 'REMOVE_ITEM';
    payload: { id: string };
};

type ClearCartAction = {
    type: 'CLEAR_CART';
};

type UpdateQuantityAction = {
    type: 'UPDATE_QUANTITY';
    payload: { id: string; delta: number };
};

export type CartAction =
    | AddItemAction
    | RemoveItemAction
    | ClearCartAction
    | UpdateQuantityAction;

// Cart Context type
export type CartContext = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};
