import styles from './CartItem.module.css';

function CartItem({
    item,
}: {
    item: { id: number; name: string; price: number; quantity: number };
}) {
    return (
        <li key={item.id} className={styles.item}>
            <div>
                <p className={styles.itemName}>{item.name}</p>
                <p className={styles.totalItemPrice}>
                    {item.quantity} × ${item.price}
                </p>
            </div>
            <span className={styles.totalCartPrice}>
                ${(item.price * item.quantity).toFixed(2)}
            </span>
        </li>
    );
}

export default CartItem;
