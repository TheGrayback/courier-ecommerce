import styles from './Navbar.module.css';
import { useCart } from '../../contexts/CartContext.js';
import { ShoppingCart } from 'lucide-react';

function showTotalSum(
    items: Array<{ price: number; quantity: number }>
): number {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function Navbar() {
    const { state } = useCart();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>Courier_</div>
            <ul className={styles.navLinks}>
                <li>
                    <a href='#'>Shop</a>
                </li>
                <li>
                    <a href='#'>Lookbook</a>
                </li>
                <li>
                    <a href='#'>About</a>
                </li>
            </ul>
            <button className={styles.cartBtn}>
                <ShoppingCart />
            </button>
        </nav>
    );
}

export default Navbar;
