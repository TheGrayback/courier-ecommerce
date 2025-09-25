import GridItem from '../GridItem/GridItem';
import styles from './ProductsGrid.module.css';
import data from '../../utils/products.json';

type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

const products: Product[] = data;

function ProductsGrid() {
    return (
        <section>
            {products.map((product) => (
                <GridItem key={product.id} product={product} />
            ))}
        </section>
    );
}

export default ProductsGrid;
