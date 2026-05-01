import MainPage from './features/home/components/MainPage/MainPage';
import styles from './App.module.css';
import Navbar from './shared/layout/navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartPage from '@/features/cart/components/CartPage/CartPage';
import ProductPage from './features/product/components/ProductPage/ProductPage';
import ScrollToTop from './shared/lib/ScrollToTop';
import { Toaster } from '@/shared/ui/sonner';

function App() {
    return (
        <Router>
            <ScrollToTop />
            <div className={styles.app}>
                <Navbar />
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/item/:id' element={<ProductPage />} />
                    </Routes>
                </main>
                <Toaster position='bottom-right' />
            </div>
        </Router>
    );
}

export default App;
