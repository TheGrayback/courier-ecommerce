type CartItemId = string;

export type CartItem = {
    id: CartItemId;
    name: string;
    price: number;
    quantity: number;
    previewImage: string;
};

export type CartState = {
    items: CartItem[];
};

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

export type CartContext = {
    state: CartState;
    dispatch: React.Dispatch<CartAction>;
};
