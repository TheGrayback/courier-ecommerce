import GridItem from '../GridItem/GridItem';
import styles from './MainPage.module.css'
import data from '../../../utils/products.json';
import type { Product } from '@/types/product.types';

const products: Product[] = data as Product[];

function MainPage() {
    return (
        <section>
            {products.map((product) => (
                <GridItem key={product.id} product={product} />
            ))}
        </section>
    );
}

export default MainPage;
