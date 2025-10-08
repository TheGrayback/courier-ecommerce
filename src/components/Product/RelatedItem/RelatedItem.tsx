import type { Product } from '@/types/product.types';
import styles from './RelatedItem.module.css';

type RelatedItemProps = {
    relatedItem: Product;
};

function RelatedItem({ relatedItem }: RelatedItemProps) {
    return (
        <div className={styles.relatedItem}>
            <img
                src={relatedItem.imageUrl}
                alt={relatedItem.name}
                className={styles.relatedImage}
            />
        </div>
    );
}

export default RelatedItem;
