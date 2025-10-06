import { useCart } from '@/contexts/CartContext';
import type { CartItem } from '@/types/cart.types';

export const useCartActions = () => {
    const { dispatch } = useCart();

    const addItem = (item: CartItem) => dispatch({ type: 'ADD_ITEM', payload: item });
    const removeItem = (id: string) => dispatch({ type: 'REMOVE_ITEM', payload: { id } });
    const clearCart = () => dispatch({ type: 'CLEAR_CART' });
    const updateQuantity = (id: string, delta: number) => dispatch({ type: 'UPDATE_QUANTITY', payload: { id, delta } });

    return { addItem, removeItem, clearCart, updateQuantity };
};
