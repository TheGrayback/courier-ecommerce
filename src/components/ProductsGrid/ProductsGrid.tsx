import GridItem from '../GridItem/GridItem.js';
import styles from './ProductsGrid.module.css';

type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

const products: Product[] = [
    {
        id: 1,
        name: 'Product 1',
        price: 29.99,
        imageUrl: '/placeholder.jpg',
    },
    {
        id: 2,
        name: 'Product 2',
        price: 39.99,
        imageUrl: '/placeholder2.jpg',
    },
    {
        id: 3,
        name: 'Product 3',
        price: 19.99,
        imageUrl: '/placeholder3.jpg',
    },
    {
        id: 4,
        name: 'Product 4',
        price: 49.99,
        imageUrl: '/placeholder4.jpg',
    },
];

function ProductsGrid() {

    return (
        <section>
            {products.map((product) => (
                <GridItem
                    key={product.id}
                    product={product}
                />
            ))}
        </section>
    );
}

export default ProductsGrid;
