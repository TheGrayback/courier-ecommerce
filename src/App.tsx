import MainPage from './components/MainPage/Grid/MainPage';
import styles from './App.module.css';
import Navbar from './components/Navbar/Navbar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import CartPage from './components/Cart/CartPage/CartPage';
import ProductPage from './components/Product/ProductPage';

function App() {
    return (
        <Router>
            <div className={styles.app}>
                <Navbar />
                <main className={styles.main}>
                    <Routes>
                        <Route path='/' element={<MainPage />} />
                        <Route path='/cart' element={<CartPage />} />
                        <Route path='/testPage/:id' element={<ProductPage/>} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
