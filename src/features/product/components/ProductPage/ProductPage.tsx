import { Button } from '@/shared/ui/button';
import data from '@/features/product/data/products.json'; // soon to be API
import styles from './ProductPage.module.css';
import { useParams } from 'react-router-dom';
import type { Product } from '@/features/product/types/product.types';
import { useEffect, useState, useMemo } from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/shared/ui/toggle-group';
import { useCartActions } from '@/features/cart/hooks/useCartActions';
import { useCart } from '@/features/cart/contexts/CartContext';
import RelatedItem from '../RelatedItem/RelatedItem';
import { toast } from 'sonner';

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
        window.scrollTo(0, 0);
    }, [product]);

    const productVariantId = [product?.id, selectedColor, selectedSize]
        .filter(Boolean)
        .join('-');

    const cartItemName = [selectedColor, product?.name, selectedSize]
        .filter(Boolean)
        .join(' ');

    const isInCart = state.items.some((item) => item.id === productVariantId);

    const relatedProducts = useMemo(() => {
        if (!product) return [];
        return products
            .filter((p) => p.id !== product.id)
            .slice(0, 4);
    }, [product, products]);

    if (!product) return <h1>Product not found!</h1>;

    const handleAddToCart = () => {
        if (isInCart) return;
        
        addItem({
            ...product,
            previewImage: product.previewImage[0] || '',
            id: productVariantId,
            name: cartItemName,
            quantity: 1,
        });
        
        toast.success(`Added ${cartItemName} to cart`);
    };

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
                            <div
                                key={imageIndex}
                                className={`${styles.previewItem} ${mainImage === image ? styles.activePreview : ''}`}
                            >
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
                    <h1 className={styles.productName}>{cartItemName}</h1>
                    <p className={styles.productPrice}>
                        ${product.price.toFixed(2)}
                    </p>

                    <div className={styles.optionGroup}>
                        <p className={styles.optionLabel}>Color: {selectedColor}</p>
                        <ToggleGroup
                            type='single'
                            className='justify-start gap-2'
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
                            <p className={styles.optionLabel}>Size: {selectedSize}</p>
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
                        onClick={handleAddToCart}
                        disabled={isInCart}
                    >
                        {isInCart ? 'Already in cart' : 'Add to Cart'}
                    </Button>
                </div>
            </div>

            <div className={styles.fullDescription}>
                <h2 className='mb-2 text-lg font-semibold'>Description</h2>
                <p>{product.fullDescription}</p>
            </div>

            <section className={styles.relatedSection}>
                <h2 className='mb-4 text-2xl font-bold md:mb-6'>Related Products</h2>
                <div className={styles.relatedGrid}>
                    {relatedProducts.map((item) => (
                        <RelatedItem
                            key={item.id}
                            relatedItem={item}
                        />
                    ))}
                </div>
            </section>
        </div>
    );
}

export default ProductPage;
