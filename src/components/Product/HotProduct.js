import { Link } from 'react-router-dom';
import { HotProductArr } from '../../utils/ProductData';

const HotProduct = (props) => {
    return (
        <>
            {HotProductArr.map((product) => (
                <Link to={`${product.id}`} className="order__product" key={product.id} onClick={props.onOpen}>
                    <img src={product.img} alt="product" className="order__product--img" />
                    <p className="order__product--name">{product.name}</p>
                    <div className="order__product--price">
                        <p className="product__price--sale">{product.salePrice}</p>
                        <p className="product__price--origin">{product.originPrice}</p>
                    </div>
                    <div className="btn__increase">+</div>
                </Link>
            ))}
        </>
    );
};

export default HotProduct;
