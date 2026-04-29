import type { CartItem } from '@/types/cart.types';

export function getItemBaseID(variantID: string) {
    return variantID.split('-')[0];
}

export function isCartItem(item: CartItem) {
    return (
        item &&
        typeof item.id === 'string' &&
        typeof item.name === 'string' &&
        typeof item.price === 'number' &&
        typeof item.quantity === 'number' &&
        typeof item.previewImage === 'string'
    );
}
