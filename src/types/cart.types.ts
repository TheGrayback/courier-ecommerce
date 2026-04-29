export type CartItemType = {
    id: string;
    name: string;
    price: number;
    quantity: number;
    previewImage: string;
};

export type CartStateType = {
    items: CartItemType[];
};

export type CartActionType =
    | { type: 'ADD_ITEM'; payload: CartItemType }
    | { type: 'REMOVE_ITEM'; payload: { id: string } }
    | { type: 'CLEAR_CART' }
    | {
          type: 'UPDATE_QUANTITY';
          payload: { id: string; delta: number };
      };

export type CartContextType = {
    state: CartStateType;
    dispatch: React.Dispatch<CartActionType>;
};
