import { Button } from '../ui/button';
import data from '../../utils/products.json';
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import type { Product } from '@/types/product.types';
import { useEffect, useState } from 'react';
import { ToggleGroup, ToggleGroupItem } from '../ui/toggle-group';
import { useCartActions } from '@/hooks/useCartActions';
import { useCart } from '@/contexts/CartContext';
import RelatedItem from './RelatedItem/RelatedItem';

function ProductPage() {
    const { id } = useParams();

    const products: Product[] = data as Product[];
    const product = products.find((p) => p.id === String(id));

    const [mainImage, setMainImage] = useState(product?.previewImage[0] ?? '');

    const [selectedColor, setSelectedColor] = useState<string>(
        product?.color?.[0]?.[0] ?? ''
    );
    const [selectedSize, setSelectedSize] = useState<string>(
        product?.size?.[0]?.[1] ?? ''
    );

    const { addItem } = useCartActions();
    const { state } = useCart();

    useEffect(() => {
        if (!product) return;
        setMainImage(product.previewImage[0] ?? '');
        setSelectedColor(product.color[0]?.[0] ?? '');
        setSelectedSize(product.size[0]?.[1] ?? '');
    }, [product]);

    if (!product) return <h1>Product not found!</h1>;

    const productVariantId = [product.id, selectedColor, selectedSize]
        .filter(Boolean)
        .join('-');
    const cartItemName = [selectedColor, product.name, selectedSize]
        .filter(Boolean)
        .join(' ');
    const isInCart = state.items.some((item) => item.id === productVariantId);

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
                        {product.previewImage.map((image, imageIndex) => (
                            <div key={imageIndex} className={styles.previewItem}>
                                <img
                                    src={image}
                                    alt={`${product.name} preview ${imageIndex + 1}`}
                                    className={styles.mainImage}
                                    onClick={() => setMainImage(image)}
                                />
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.productInfo}>
                    <h1 className={styles.productName}>
                        {cartItemName}
                    </h1>
                    <p className={styles.productPrice}>
                        ${product.price.toFixed(2)}
                    </p>

                    <div className={styles.optionGroup}>
                        <p className={styles.optionLabel}>Color</p>
                        <ToggleGroup
                            type='single'
                            className='gap-2'
                            value={selectedColor}
                            onValueChange={(value) => {
                                if (value) setSelectedColor(value);
                            }}
                        >
                            {product.color.map(([color, hex], id) => (
                                <ToggleGroupItem
                                    key={id}
                                    value={color}
                                    title={color}
                                    className={styles.colorItem}
                                    style={{ backgroundColor: hex }}
                                />
                            ))}
                        </ToggleGroup>
                    </div>

                    {product.size.length > 0 && (
                        <div className={styles.optionGroup}>
                            <p className={styles.optionLabel}>Size</p>
                            <ToggleGroup
                                type='single'
                                className={styles.sizesWrapper}
                                value={selectedSize}
                                onValueChange={(value) => {
                                    if (value) setSelectedSize(value);
                                }}
                            >
                                {product.size.map(([name, sizeCode], id) => (
                                    <ToggleGroupItem
                                        key={id}
                                        value={sizeCode}
                                        title={name}
                                        className={styles.sizeButton}
                                    >
                                        {sizeCode}
                                    </ToggleGroupItem>
                                ))}
                            </ToggleGroup>
                        </div>
                    )}

                    <Button
                        className={`${styles.addToCartButton} ${isInCart ? styles.inCart : ''}`}
                        onClick={
                            isInCart
                                ? undefined
                                : () =>
                                      addItem({
                                          ...product,
                                          previewImage:
                                              product.previewImage[0] || '',
                                          id: productVariantId,
                                          name: cartItemName,
                                          quantity: 1,
                                      })
                        }
                    >
                        {isInCart ? 'Already in cart!' : 'Add to Cart'}
                    </Button>
                </div>
            </div>

            <div className={styles.fullDescription}>
                <h2 className='mb-2 text-lg font-semibold'>Description</h2>
                <p>{product.fullDescription}</p>
            </div>

            <section className={styles.relatedSection}>
                <h2 className='text-2xl font-bold md:mb-6'>Related Products</h2>
                <div className={styles.relatedGrid}>
                    {data.slice(1, 5).map((item) => (
                        <RelatedItem
                            key={item.id}
                            relatedItem={{
                                ...item,
                                color: item.color as [string, string][],
                                size: item.size as [string, string][],
                            }}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProductPage;
