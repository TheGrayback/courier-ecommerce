import ProductsGrid from './components/ProductsGrid/ProductsGrid';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartPage from './components/CartPage/CartPage';

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Navbar />
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<ProductsGrid />} />
                        <Route path='/cart' element={<CartPage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
