import { Heart } from 'lucide-react';
import styles from './GridItem.module.css';
import type { Product } from '@/features/product/types/product.types';
import { Link } from 'react-router-dom';
import { Button } from '@/shared/ui/button';

function GridItem({ product }: { product: Product }) {
    return (
        <div key={product.id} className={styles.productCard}>
            <Link to={`/item/${product.id}`}>
                <img
                    src={product.previewImage[0]}
                    alt={product.name}
                    className={styles.productImage}
                ></img>
                <h2 className={styles.productName}>{product.name}</h2>
            </Link>
            <div className={styles.footer}>
                <p className={styles.productPrice}>${product.price}</p>
                <div className={styles.footerBtns}>
                    <Button className={styles.addToFavBtn}>
                        <Heart className='size-6'/>
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default GridItem;
