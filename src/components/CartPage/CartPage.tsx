import { Link } from 'react-router-dom';
import { useCart } from '../../contexts/CartContext.js';
import styles from './CartPage.module.css';
import { ShoppingCart } from 'lucide-react';

function showTotalSum(
    items: Array<{ price: number; quantity: number }>
): number {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function CartPage() {
    const { state } = useCart();
    const total = showTotalSum(state.items);

    return (
        <div className={styles.cartPage}>
            <h1 className={styles.title}>Your Cart</h1>

            {state.items.length === 0 ? (
                <div className={styles.emptyCart}>
                    <span className={styles.iconWrapper}>
                        <p className={styles.emptyText}>Your cart is empty</p>
                        <ShoppingCart />
                    </span>
                    <Link to='/' className={styles.backButton}>
                        Back to shop
                    </Link>
                </div>
            ) : (
                <div className={styles.cartContent}>
                    <ul className={styles.itemList}>
                        {state.items.map((item) => (
                            <li key={item.id} className={styles.itemCard}>
                                <div>
                                    <h2 className={styles.itemName}>
                                        {item.name}
                                    </h2>
                                    <p className={styles.itemDetails}>
                                        {item.quantity} × ${item.price}
                                    </p>
                                </div>
                                <span className={styles.itemTotal}>
                                    ${(item.price * item.quantity).toFixed(2)}
                                </span>
                            </li>
                        ))}
                    </ul>

                    <div className={styles.summary}>
                        <p className={styles.total}>
                            Total: ${total.toFixed(2)}
                        </p>
                        <button className={styles.checkoutBtn}>Checkout</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default CartPage;
