import { Star } from 'lucide-react';
import styles from './GridItem.module.css';
import { useCartActions } from '@/hooks/useCartActions';
import type { Product } from '@/types/itemGrid.types';

function GridItem({ product }: { product: Product }) {
    const { addItem } = useCartActions();

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
                    onClick={() => addItem({ ...product, quantity: 1 })}
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
