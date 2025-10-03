import styles from './Navbar.module.css';
import { ShoppingBasket } from 'lucide-react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <Link to='/' className={styles.logo}>
                Courier_
            </Link>
            <ul className={styles.navLinks}>
                <Link to='/'>Shop</Link>
                <Link to='/'>Lookbook</Link>
                <Link to='/'>About</Link>
            </ul>
            <Link to='/cart' className={styles.cartBtn}>
                <ShoppingBasket />
            </Link>
        </nav>
    );
}

export default Navbar;
