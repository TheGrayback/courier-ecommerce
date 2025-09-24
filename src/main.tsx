import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.js';
import { CartProvider } from './contexts/CartContext.js';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <CartProvider>
            <App />
        </CartProvider>
    </StrictMode>
);
