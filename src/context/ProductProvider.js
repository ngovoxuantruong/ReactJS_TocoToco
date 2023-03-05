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
    toppingValue: [],
};

const productReducer = (state, action) => {
    // ADD ACTION
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

    // REMOVE ACTION
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

    // SUBMIT ACTION
    if (action.type === 'SUBMIT_PRODUCT') {
        return { product: state.product, totalAmount: state.totalAmount, toppingValue: action.toppingValue };
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

    const removeProductHandler = (product) => {
        dispatchProductActions({ type: 'REMOVE_PRODUCT', product: product });
    };

    const submitProductHandler = (toppingValue) => {
        dispatchProductActions({ type: 'SUBMIT_PRODUCT', toppingValue: toppingValue });
    };

    const clearProductHandler = () => {
        dispatchProductActions({ type: 'CLEAR_PRODUCT' });
    };

    const value = {
        product: productState.product,
        totalAmount: productState.totalAmount,
        toppingValue: productState.toppingValue,
        addProduct: addProductHandler,
        submitProduct: submitProductHandler,
        removeProduct: removeProductHandler,
        clearProduct: clearProductHandler,
    };

    const productDataArr = { HotProductArr, MilkTeaArr, FreshFruitTeaArr, MacchiatoArr, SuaChuaArr };

    return <ProductContext.Provider value={{ productDataArr, value }}>{props.children}</ProductContext.Provider>;
};
