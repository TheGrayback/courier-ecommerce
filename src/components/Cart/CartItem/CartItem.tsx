import { useCartActions } from '@/hooks/useCartActions';
import { Button } from '../../ui/button';
import styles from './CartItem.module.css';
import { Minus, Plus, X } from 'lucide-react';
import { Input } from '@/components/ui/input';

function CartItem({
    item,
}: {
    item: {
        id: string;
        name: string;
        price: number;
        quantity: number;
        imageUrl: string;
    };
}) {
    const { updateQuantity, removeItem } = useCartActions();

    return (
        <li key={item.id} className={styles.item}>
            <div className={styles.leftContainer}>
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className={styles.itemImage}
                />
                <p className={styles.itemName}>{item.name}</p>
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

export default CartItem;
