import { cartReducer } from '@/features/cart/reducers/cartReducer';
import {
    type CartContext,
    type CartState,
} from '@/features/cart/types/cart.types';
import { parseCartState } from '@/features/cart/utils/cart.utils';
import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext<CartContext | undefined>(undefined);

const CART_STORAGE_KEY = 'cart_v1';

const initialState: CartState = {
    items: [],
};

function getInitialCartState(): CartState {
    if (typeof window === 'undefined') return initialState;

    try {
        const rawState = window.localStorage.getItem(CART_STORAGE_KEY);
        if (!rawState) return initialState;

        const parsedState = JSON.parse(rawState);
        const result = parseCartState(parsedState);
        if (result.success) return result.data;
    } catch {
        // ignore malformed localStorage data and fallback to initial state
    }

    return initialState;
}

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
    const [state, dispatch] = useReducer(
        cartReducer,
        initialState,
        getInitialCartState
    );

    useEffect(() => {
        window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(state));
    }, [state]);

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
};
