import { useState } from 'react';

import { FaAngleDown } from 'react-icons/fa';
import { FaAngleLeft } from 'react-icons/fa';
import './WrapProduct.scss';

const WrapProduct = (props) => {
    // Set hide / show category product by onClick event
    const [isHide, setisHide] = useState(false);

    const showCategoryHandler = () => {
        setisHide(!isHide);
    };

    return (
        <>
            <div className="wrap__product" id={props.id}>
                <div className="category__name__wrap" onClick={showCategoryHandler}>
                    <p className="category__name--left">{props.categoryTitle}</p>
                    <p className="category__name--right">{isHide ? <FaAngleLeft /> : <FaAngleDown />}</p>
                </div>

                {/* Render list of category product */}
                <div className={`list__order__product ${isHide ? 'list__order__product--active' : null}`}>
                    {props.children}
                </div>
            </div>
        </>
    );
};

export default WrapProduct;
