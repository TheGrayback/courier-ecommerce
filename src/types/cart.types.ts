export type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
};

export type CartState = {
    items: CartItem[];
};

export type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: { id: number } }
    | { type: 'CLEAR_CART' }
    | {
          type: 'UPDATE_QUANTITY';
          payload: { id: number; delta: number };
      };
