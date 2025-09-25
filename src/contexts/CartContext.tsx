import { createContext, useContext, useReducer } from 'react';

type CartItem = {
    id: number;
    name: string;
    price: number;
    quantity: number;
    imageUrl: string;
};

type CartState = {
    items: CartItem[];
};

type CartAction =
    | { type: 'ADD_ITEM'; payload: CartItem }
    | { type: 'REMOVE_ITEM'; payload: { id: number } }
    | { type: 'CLEAR_CART' };

const CartContext = createContext<
    { state: CartState; dispatch: React.Dispatch<CartAction> } | undefined
>(undefined);

const initialState: CartState = {
    items: [],
};

function cartReducer(state: CartState, action: CartAction): CartState {
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

        default:
            return state;
    }
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);
    return (
        <CartContext.Provider value={{ state, dispatch }}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}