export type CartItem = {
    id: string;
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
    | { type: 'REMOVE_ITEM'; payload: { id: string } }
    | { type: 'CLEAR_CART' }
    | {
          type: 'UPDATE_QUANTITY';
          payload: { id: string; delta: number };
      };
