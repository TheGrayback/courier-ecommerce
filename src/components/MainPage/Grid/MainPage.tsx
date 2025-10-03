import GridItem from '../GridItem/GridItem';
import styles from './MainPage.module.css'
import data from '../../../utils/products.json';

type Product = {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
};

const products: Product[] = data;

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
