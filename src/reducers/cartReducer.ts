import type { CartAction, CartState } from "@/types/cart.types";

export function cartReducer(state: CartState, action: CartAction): CartState {
    switch (action.type) {
        case 'ADD_ITEM':
            const existing = state.items.find(
                (item) => item.id === action.payload.id
            );
            if (existing) {
                return {
                    items: state.items.map((item) =>
                        item.id === action.payload.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    ),
                };
            }
            return { items: [...state.items, action.payload] };
        case 'REMOVE_ITEM':
            return {
                items: state.items.filter(
                    (item) => item.id !== action.payload.id
                ),
            };
        case 'CLEAR_CART':
            return { items: [] };
        case 'UPDATE_QUANTITY':
            return {
                items: state.items
                    .map((item) =>
                        item.id === action.payload.id
                            ? {
                                  ...item,
                                  quantity:
                                      item.quantity + action.payload.delta,
                              }
                            : item
                    )
                    .filter((item) => item.quantity > 0),
            };
        default:
            return state;
    }
}