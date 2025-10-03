import { Button } from '../ui/button';
import data from '../../utils/products.json';
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import type { Product } from '@/types/product.types';
import { useEffect } from 'react';

function ProductPage() {
    
    useEffect(() => {
        window.scroll(0, 0);
    }, []);

    const { id } = useParams();
    const products: Product[] = data as Product[];
    const product = products.find((p) => p.id === Number(id));

    if (!product) return <h1>Product not found!</h1>;
    return (
        <div className={styles.container}>
            <div className={styles.gridMain}>
                <div>
                    <div className={styles.mainImageWrapper}>
                        <img
                            src={product.imageUrl}
                            alt={product.name}
                            className={styles.mainImage}
                        />
                    </div>
                    <div className={styles.previewWrapper}>
                        {Array(3)
                            .fill(0)
                            .map((_, idx) => (
                                <div key={idx} className={styles.previewItem}>
                                    <img
                                        src={product.imageUrl}
                                        alt={`preview ${idx}`}
                                        className={styles.mainImage}
                                    />
                                </div>
                            ))}
                    </div>
                </div>

                <div className={styles.productInfo}>
                    <h1 className={styles.productName}>{product.name}</h1>
                    <p className={styles.productPrice}>
                        ${product.price.toFixed(2)}
                    </p>

                    <div className={styles.optionGroup}>
                        <p className={styles.optionLabel}>Color</p>
                        <div className={styles.colorsWrapper}>
                            {product.color.map((color, id) => (
                                <div
                                    key={id}
                                    className={styles.colorItem}
                                    style={{ backgroundColor: color[1] }}
                                />
                            ))}
                        </div>
                    </div>

                    <div className={styles.optionGroup}>
                        <p className={styles.optionLabel}>Size</p>
                        <div className={styles.sizesWrapper}>
                            <button className={styles.sizeButton}>S</button>
                            <button className={styles.sizeButton}>M</button>
                            <button className={styles.sizeButton}>L</button>
                            <button className={styles.sizeButton}>XL</button>
                        </div>
                    </div>

                    <div className={styles.cartControls}>
                        <input
                            type='number'
                            value={1}
                            readOnly
                            className={styles.quantityInput}
                        />
                        <Button className='flex-1'>Add to Cart</Button>
                    </div>

                    <p className={styles.shortDescription}>
                        {product.shortDescription}
                    </p>
                </div>
            </div>

            <div className={styles.fullDescription}>
                <h2 className='mb-2 text-lg font-semibold'>Description</h2>
                <p>{product.fullDescription}</p>
            </div>

            <section className={styles.relatedSection}>
                <h2 className='mb-6 text-2xl font-bold'>Related Products</h2>
                <div className={styles.relatedGrid}>
                    {data.slice(1, 5).map((p) => (
                        <div key={p.id} className={styles.relatedItem}>
                            <img
                                src={p.imageUrl}
                                alt={p.name}
                                className={styles.relatedImage}
                            />
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProductPage;
