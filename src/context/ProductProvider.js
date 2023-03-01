import ProductContext from './ProductContext';
import { HotProductArr } from '../utils/ProductData';

export const ProductProvider = (props) => {
    return <ProductContext.Provider value={HotProductArr}>{props.children}</ProductContext.Provider>;
};
