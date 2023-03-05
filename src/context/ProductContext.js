import { createContext } from 'react';

const ProductContext = createContext({
    product: [],
    totalAmount: 0,
    toppingValue: [],
    addProduct: () => {},
    removeProduct: () => {},
    clearProduct: () => {},
});

export default ProductContext;
