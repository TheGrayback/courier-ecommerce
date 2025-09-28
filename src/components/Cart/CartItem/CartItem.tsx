import { Button } from '../../ui/button';
import styles from './CartItem.module.css';

function CartItem({
    item,
}: {
    item: {
        id: number;
        name: string;
        price: number;
        quantity: number;
        imageUrl: string;
    };
}) {
    return (
        <li key={item.id} className={styles.item}>
            <div className={styles.itemDetails}>
                <img
                    src={item.imageUrl}
                    alt={item.name}
                    className={styles.itemImage}
                />
                <div>
                    <p className={styles.itemName}>{item.name}</p>
                    <p className={styles.totalItemPrice}>
                        {item.quantity} × ${item.price}
                    </p>
                </div>
            </div>
            <div>
                <Button variant={'outline'}>-</Button>
                <span>{item.quantity}</span>
                <Button variant={'outline'}>+</Button>
            </div>

            <span className={styles.totalCartPrice}>
                ${(item.price * item.quantity).toFixed(2)}
            </span>
        </li>
    );
}

export default CartItem;
