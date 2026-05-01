import type { Product } from '@/features/product/types/product.types';
import styles from './RelatedItem.module.css';
import { Link } from 'react-router-dom';

type RelatedItemProps = {
    relatedItem: Product;
};

function RelatedItem({ relatedItem }: RelatedItemProps) {
    return (
        <Link
            to={`/item/${relatedItem.id}`}
            className={styles.relatedLink}
        >
            <div className={styles.relatedItem}>
                <div className={styles.imageWrapper}>
                    <img
                        src={relatedItem.previewImage[0]}
                        alt={relatedItem.name}
                        className={styles.relatedImage}
                    />
                </div>
                <div className={styles.relatedInfo}>
                    <p className={styles.relatedName}>{relatedItem.name}</p>
                    <p className={styles.relatedPrice}>
                        ${relatedItem.price.toFixed(2)}
                    </p>
                </div>
            </div>
        </Link>
    );
}

export default RelatedItem;
