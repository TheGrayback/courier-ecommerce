import { Link } from 'react-router-dom';
import { useCart } from '../../../contexts/CartContext';
import { ShoppingCart, Trash2 } from 'lucide-react';
import {
    Card,
    CardHeader,
    CardContent,
    CardFooter,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import CartItem from '../CartItem/CartItem';
import styles from './CartPage.module.css';

function showTotalSum(
    items: Array<{ price: number; quantity: number }>
): number {
    return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
}

function CartPage() {
    const { state, dispatch } = useCart();
    const total = showTotalSum(state.items);

    if (state.items.length === 0) {
        return (
            <div className={styles.cartEmpty}>
                <ShoppingCart className={styles.cartEmptyIcon} />
                <p className={styles.cartEmptyText}>Your cart is empty</p>
                <Button variant={'outline'} asChild>
                    <Link to='/'>Back to shop</Link>
                </Button>
            </div>
        );
    }

    return (
        <div className={styles.cartPage}>
            <h1 className={styles.cartTitle}>Your Cart</h1>

            <Card className={styles.cartCard}>
                <CardHeader className={styles.cartCardHeader}>
                    <Button
                        size={'icon'}
                        onClick={() => dispatch({ type: 'CLEAR_CART' })}
                    >
                        <Trash2 className={styles.cartClearIcon}/>
                    </Button>
                </CardHeader>

                <CardContent className={styles.cartCardContent}>
                    <ul className={styles.cartItemsList}>
                        {state.items.map((item) => (
                            <CartItem key={item.id} item={item} />
                        ))}
                    </ul>
                </CardContent>

                <Separator className={styles.cartSeparator} />

                <CardFooter className={styles.cartCardFooter}>
                    <p className={styles.cartTotal}>${total.toFixed(2)}</p>
                    <Button className={styles.cartButton}>Checkout</Button>
                </CardFooter>
            </Card>
        </div>
    );
}

export default CartPage;
