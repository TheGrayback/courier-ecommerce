import { Star } from 'lucide-react';
import styles from './GridItem.module.css';
import { useCartActions } from '@/hooks/useCartActions';
import type { Product } from '@/types/product.types';
import { Link } from 'react-router-dom';

function GridItem({ product }: { product: Product }) {
    const { addItem } = useCartActions();

    return (
        <div key={product.id} className={styles.productCard}>
            <Link to={`/item/${product.id}`}>
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className={styles.productImage}
                ></img>
                <h2 className={styles.productName}>{product.name}</h2>
            </Link>
            <div className={styles.footer}>
                <p className={styles.productPrice}>${product.price}</p>
                <div className={styles.footerBtns}>
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
        </div>
    );
}

export default GridItem;
