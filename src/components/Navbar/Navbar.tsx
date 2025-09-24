import styles from './Navbar.module.css';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/' className={styles.logo}>
                Courier_
            </Link>
            <ul className={styles.navLinks}>
                <Link to='/'>
                    <a href='#'>Shop</a>
                </Link>
                <Link to='/'>
                    <a href='#'>Lookbook</a>
                </Link>
                <Link to='/'>
                    <a href='#'>About</a>
                </Link>
            </ul>
            <Link to='/cart' className={styles.cartBtn}>
                <ShoppingCart />
            </Link>
        </nav>
    );
}

export default Navbar;
