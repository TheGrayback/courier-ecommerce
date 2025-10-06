import MainPage from './components/MainPage/Grid/MainPage';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartPage from './components/Cart/CartPage/CartPage';
import ProductPage from './components/Product/ProductPage';
import ScrollToTop from './components/Global/ScrollToTop';

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
            </div>
        </Router>
    );
}

export default App;
