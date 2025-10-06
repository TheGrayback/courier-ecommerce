import { Button } from '../ui/button';
import data from '../../utils/products.json';
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import type { Product } from '@/types/product.types';
import { useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { Minus, Plus } from 'lucide-react';
import { Input } from '../ui/input';

function ProductPage() {
    const { id } = useParams();
    const products: Product[] = data as Product[];
    const product = products.find((p) => p.id === Number(id));

    const [mainImage, setMainImage] = useState(product?.imageUrl);

    const [productColor, setProductColor] = useState<string | null>(null);
    const [productSize, setProductSize] = useState<string | null>(null);

    const [productQuantity, setProductQuantity] = useState<number>(0);

    if (!product) return <h1>Product not found!</h1>;
    return (
        <div className={styles.container}>
            <div className={styles.gridMain}>
                <div className='fake-container'>
                    <div className={styles.mainImageWrapper}>
                        <img
                            src={mainImage}
                            alt={product.name}
                            className={styles.mainImage}
                        />
                    </div>
                    <div className={styles.previewWrapper}>
                        <div className={styles.previewItem}>
                            <img
                                src={product.imageUrl}
                                alt={`preview 0`}
                                className={styles.mainImage}
                                onClick={() => setMainImage(product.imageUrl)}
                            />
                        </div>
                        {product.previewImage.map((image, id) => (
                            <div key={id} className={styles.previewItem}>
                                <img
                                    src={image}
                                    alt={`preview ${id}`}
                                    className={styles.mainImage}
                                    onClick={() => setMainImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.productInfo}>
                    <h1 className={styles.productName}>
                        {productColor} {product.name} {productSize}
                    </h1>
                    <p className={styles.productPrice}>
                        ${product.price.toFixed(2)}
                    </p>

                    <div className={styles.optionGroup}>
                        <p className={styles.optionLabel}>Color</p>
                        <ToggleGroup type='single' className='gap-2'>
                            {product.color.map(([color, hex], id) => (
                                <ToggleGroupItem
                                    key={id}
                                    value={color}
                                    title={color}
                                    className={styles.colorItem}
                                    style={{ backgroundColor: hex }}
                                    onClick={() => setProductColor(color)}
                                />
                            ))}
                        </ToggleGroup>
                    </div>

                    {product.sizes.length > 0 && (
                        <div className={styles.optionGroup}>
                            <p className={styles.optionLabel}>Size</p>
                            <ToggleGroup
                                type='single'
                                className={styles.sizesWrapper}
                            >
                                {product.sizes.map((size, id) => (
                                    <ToggleGroupItem
                                        key={id}
                                        value={size}
                                        title={size}
                                        className={styles.sizeButton}
                                        onClick={() => setProductSize(size)}
                                    >
                                        {size}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </div>
                    )}

                    <Button className='flex-1'>Add to Cart</Button>

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
                <h2 className='text-2xl font-bold md:mb-6'>Related Products</h2>
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
