# _Courier E-commerce Documentation

## Overview
**_Courier** is a pet project e-commerce shop built with React, focusing on a clean, modern shopping experience for curated items. It features a responsive design, product variants (size/color), and a persistent shopping cart.

## Tech Stack
- **Framework**: React 18+ (with Vite)
- **Language**: TypeScript
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS + CSS Modules
- **State Management**: React Context API + `useReducer`
- **Components**: Shadcn/UI (Radix UI)
- **Icons/Notifications**: Sonner

## Project Structure
```text
src/
├── components/          # React components
│   ├── ui/             # Reusable Shadcn UI components
│   ├── Product/        # Product page and related items
│   ├── Cart/           # Cart page and line items
│   ├── Navbar/         # Main navigation
│   └── MainPage/       # Landing page / Product grid
├── contexts/           # React Contexts (CartContext)
├── hooks/              # Custom hooks (useCartActions)
├── reducers/           # State logic (cartReducer)
├── types/              # TypeScript interfaces and types
└── utils/              # Mock data and helper functions
```

## Core Features

### 1. Product Management
- **Mock Data**: Uses a local `products.json` file as a database.
- **Dynamic Routing**: Uses `:id` parameters to fetch and display specific product data.
- **Variants**: Supports multiple colors and sizes per product. Selecting variants updates the `productVariantId` and the product name in the UI.

### 2. Shopping Cart
- **State Logic**: Managed via `useReducer` to handle complex actions like updating quantities, adding unique variants, and clearing the cart.
- **Persistence**: Automatically synchronizes the cart state with `localStorage` via `CartProvider`.
- **Validation**: Includes a schema check on initialization to prevent crashes from malformed storage data.

### 3. User Interface
- **Responsive Layout**: Adapts from mobile to desktop using Tailwind grid systems.
- **Micro-interactions**:
    - Image switching on product pages.
    - Toast notifications for feedback (e.g., "Added to cart").
    - "Already in cart" disabled button state.
- **Global Navigation**: Fixed navbar with a cart item counter.

## Key Logic

### Variant IDs
Items are added to the cart using a unique ID generated from the product ID and its selected options:
```typescript
const productVariantId = [product.id, selectedColor, selectedSize]
    .filter(Boolean)
    .join('-');
```

### Cart Persistence
The `CartProvider` component handles the side-effect of persisting data:
```typescript
useEffect(() => {
    window.localStorage.setItem('cart_v1', JSON.stringify(state));
}, [state]);
```

## Running the Project
1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`
