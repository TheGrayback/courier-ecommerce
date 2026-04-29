import { cartReducer } from '@/reducers/cartReducer';
import type {
    CartContextType,
    CartStateType,
} from '@/types/cart.types';
import { createContext, useContext, useEffect, useReducer } from 'react';

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = 'cart_v1';

const initialState: CartStateType = {
    items: [],
};

function isValidCartState(value: unknown): value is CartStateType {
    if (!value || typeof value !== 'object') return false;
    const items = (value as CartStateType).items;
    if (!Array.isArray(items)) return false;

    return items.every((item) => {
        return (
            item &&
            typeof item.id === 'string' &&
            typeof item.name === 'string' &&
            typeof item.price === 'number' &&
            typeof item.quantity === 'number' &&
            typeof item.previewImage === 'string'
        );
    });
}

function getInitialCartState(): CartStateType {
    if (typeof window === 'undefined') return initialState;

    try {
        const rawState = window.localStorage.getItem(CART_STORAGE_KEY);
        if (!rawState) return initialState;

        const parsedState = JSON.parse(rawState) as unknown;
        if (isValidCartState(parsedState)) return parsedState;
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
