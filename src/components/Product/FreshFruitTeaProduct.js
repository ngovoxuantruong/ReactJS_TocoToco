import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ProductContext from '../../context/ProductContext';
import { FreshFruitTeaArr } from '../../utils/FreshFruitTeaData';

const FreshFruitTeaProduct = (props) => {
    const { value } = useContext(ProductContext);

    const addProductHandler = (productInfo) => {
        value.addProduct(productInfo);
    };

    return (
        <>
            {FreshFruitTeaArr.map((product) => (
                <Link
                    to={`${product.id}`}
                    className="order__product"
                    key={product.id}
                    onClick={() => {
                        props.onOpen();
                        value.clearProduct();
                        addProductHandler(product);
                    }}
                >
                    <img src={product.img} alt="product" className="order__product--img" />
                    <p className="order__product--name">{product.name}</p>
                    <div className="order__product--price">
                        <p className="product__price--sale">{product.salePrice}đ</p>
                        <p className="product__price--origin">{product.originPrice}đ</p>
                    </div>
                    <div className="btn__increase">+</div>
                </Link>
            ))}
        </>
    );
};

export default FreshFruitTeaProduct;
