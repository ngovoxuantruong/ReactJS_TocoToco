import { useReducer } from 'react';

import ProductContext from './ProductContext';
import { HotProductArr } from '../utils/HotProductData';
import { MilkTeaArr } from '../utils/MilkTeaData';
import { FreshFruitTeaArr } from '../utils/FreshFruitTeaData';
import { MacchiatoArr } from '../utils/MacchiatoData';
import { SuaChuaArr } from '../utils/SuaChuaData';

const defaultProductValue = {
    product: [],
    totalAmount: 0,
};

const productReducer = (state, action) => {
    if (action.type === 'ADD_PRODUCT') {
        const updatedTotalAmount = action.product.salePrice * action.product.amount;

        const existingProductIndex = state.product.findIndex((product) => product.id === action.product.id);

        const existingProduct = state.product[existingProductIndex];
        let updatedProduct;

        if (existingProduct) {
            let updatedProductAmount = {
                ...existingProduct,
                amount: action.product.amount + 1,
            };
            updatedProduct = [...state.product];
            updatedProduct[existingProductIndex] = updatedProductAmount;
        } else {
            updatedProduct = state.product.concat(action.product);
        }

        return {
            product: updatedProduct,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'REMOVE_PRODUCT') {
        const existingProductIndex = state.product.findIndex((product) => product.id === action.product.id);

        const existingProduct = state.product[existingProductIndex];
        let updatedTotalAmount;
        updatedTotalAmount = state.totalAmount - existingProduct.salePrice;

        let updatedProduct;
        if (existingProduct.amount === 1) {
            updatedProduct = state.product;
            updatedTotalAmount = 0;
        } else {
            const updatedProductAmount = { ...existingProduct, amount: existingProduct.amount - 1 };

            updatedProduct = [...state.product];
            updatedProduct[existingProductIndex] = updatedProductAmount;
        }

        return {
            product: updatedProduct,
            totalAmount: updatedTotalAmount,
        };
    }

    if (action.type === 'CLEAR_PRODUCT') {
        return defaultProductValue;
    }
};

export const ProductProvider = (props) => {
    const [productState, dispatchProductActions] = useReducer(productReducer, defaultProductValue);

    const addProductHandler = (product) => {
        dispatchProductActions({
            type: 'ADD_PRODUCT',
            product: product,
        });
    };

    const removeProductHandler = (product, numberOfProductAmount) => {
        dispatchProductActions({ type: 'REMOVE_PRODUCT', product: product, numberOfProductAmount });
    };

    const clearProductHandler = () => {
        dispatchProductActions({ type: 'CLEAR_PRODUCT' });
    };

    const value = {
        product: productState.product,
        totalAmount: productState.totalAmount,
        addProduct: addProductHandler,
        removeProduct: removeProductHandler,
        clearProduct: clearProductHandler,
    };

    const productDataArr = { HotProductArr, MilkTeaArr, FreshFruitTeaArr, MacchiatoArr, SuaChuaArr };

    return <ProductContext.Provider value={{ productDataArr, value }}>{props.children}</ProductContext.Provider>;
};
