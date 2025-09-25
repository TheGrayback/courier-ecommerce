import { useCart } from '../../contexts/CartContext';
import { Star } from 'lucide-react';
import styles from './GridItem.module.css';

type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

function GridItem({ product }: { product: Product }) {
    const { dispatch } = useCart();

    return (
        <div key={product.id} className={styles.productCard}>
            <img
                src={product.imageUrl}
                alt={product.name}
                className={styles.productImage}
            ></img>
            <h2 className={styles.productName}>{product.name}</h2>
            <p className={styles.productPrice}>${product.price}</p>
            <div className={styles.cardFooter}>
                <button
                    className={styles.addToCartButton}
                    onClick={() =>
                        dispatch({
                            type: 'ADD_ITEM',
                            payload: {
                                ...product,
                                id: product.id,
                                quantity: 1,
                            },
                        })
                    }
                >
                    Add to Cart
                </button>
                <button className={styles.addToFavBtn}>
                    <Star />
                </button>
            </div>
        </div>
    );
}

export default GridItem;
