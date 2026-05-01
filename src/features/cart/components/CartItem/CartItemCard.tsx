import { useCartActions } from '@/features/cart/hooks/useCartActions';
import { Button } from '@/shared/ui/button';
import styles from './CartItemCard.module.css';
import { Minus, Plus, X } from 'lucide-react';
import { Input } from '@/shared/ui/input';
import { Link } from 'react-router-dom';
import { getItemBaseID } from '@/features/cart/utils/cart.utils';
import type { CartItem } from '@/features/cart/types/cart.types';

function CartItemCard({ item }: { item: CartItem }) {
    const { updateQuantity, removeItem } = useCartActions();
    const baseID = getItemBaseID(item.id);

    return (
        <li key={item.id} className={styles.item}>
            <div className={styles.leftContainer}>
                <img
                    src={item.previewImage}
                    alt={item.name}
                    className={styles.itemImage}
                />
                <p className={styles.itemName}>
                    <Link to={`/item/${baseID}`}>{item.name}</Link>
                </p>
            </div>
            <div className={styles.utilityWrapper}>
                <div className={styles.centralContainer}>
                    <Button
                        onClick={() => updateQuantity(item.id, -1)}
                        className={styles.quantityBtns}
                        size={'icon'}
                    >
                        <Minus className={styles.quantityIcons} />
                    </Button>
                    <Input
                        type='number'
                        min={1}
                        value={item.quantity}
                        onChange={(e) => {
                            const newQuantity = parseInt(e.target.value);
                            if (!isNaN(newQuantity) && newQuantity > 0) {
                                updateQuantity(
                                    item.id,
                                    newQuantity - item.quantity
                                );
                            }
                        }}
                        className={styles.quantityInput}
                    />
                    <Button
                        onClick={() => updateQuantity(item.id, +1)}
                        className={styles.quantityBtns}
                        size={'icon'}
                    >
                        <Plus className={styles.quantityIcons} />
                    </Button>
                </div>

                <div className={styles.rightContainer}>
                    <span className={styles.totalCartPrice}>
                        ${(item.price * item.quantity).toFixed(2)}
                    </span>
                    <Button
                        className={styles.removeItemBtn}
                        onClick={() => removeItem(item.id)}
                    >
                        <X className={styles.removeItemIcon} />
                    </Button>
                </div>
            </div>
        </li>
    );
}

export default CartItemCard;
