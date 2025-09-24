import ProductsGrid from './components/ProductsGrid/ProductsGrid.js';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar.js';

function App() {
    return (
        <div className={styles.app}>
            <Navbar />
            <main className={styles.main}>
                <ProductsGrid />
            </main>
        </div>
    );
}

export default App;
