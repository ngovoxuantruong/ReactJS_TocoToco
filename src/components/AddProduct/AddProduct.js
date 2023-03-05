import './AddProduct.scss';
import { IoClose } from 'react-icons/io5';
import { useContext } from 'react';
import ProductContext from '../../context/ProductContext';

const AddProduct = (props) => {
    const { value } = useContext(ProductContext);

    // Get productInfo then handle feature in ProductProvider ( using useReducer )
    const addProductHandler = (productInfo) => {
        value.addProduct(productInfo);
    };

    const removeProductHandler = (productInfo) => {
        value.removeProduct(productInfo);
    };

    const numberOfProductAmounts = value.product.reduce((total, currentNumb) => (total += currentNumb.amount), -1);

    return (
        <div className="popup popup__add__product">
            {/* Render product Info by filter the array from context */}
            {value.product.map((productInfo) => (
                <div className="popup__content" key={productInfo.id}>
                    <div className="popup__product">
                        <div className="product__infomation">
                            <div className="product__infomation--left">
                                <img src={productInfo.img} alt="Product" className="product__infomation--img" />
                            </div>

                            <div className="product__infomation--right">
                                <p className="product__infomation--name">{productInfo.name}</p>
                                <div className="product__infomation--price">
                                    <p className="product__price--sale">{productInfo.salePrice}đ</p>
                                    {productInfo.originPrice && (
                                        <p className="product__price--origin">{productInfo.originPrice}đ</p>
                                    )}
                                </div>
                                <p className="product__infomation--info">Chưa có thông tin</p>
                                <div className="wrap__quantity">
                                    <div className="change__amount__quantity">
                                        <div
                                            className="change__quantity decrease"
                                            onClick={removeProductHandler.bind(null, productInfo)}
                                        >
                                            -
                                        </div>
                                        <p className="amount">{numberOfProductAmounts}</p>
                                        <div
                                            className="change__quantity increase"
                                            onClick={addProductHandler.bind(null, productInfo)}
                                        >
                                            +
                                        </div>
                                    </div>

                                    <div className="btn__price__product">
                                        + {productInfo.amount === 1 ? productInfo.salePrice : value.totalAmount}đ
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="product__customize custom__scrollbar">
                            <div className="customize type">
                                <p className="customize__title">Chọn loại</p>
                                <div className="customize__content">
                                    <label className="container__radio">
                                        <input type="radio" value="cold" name="type" defaultChecked /> Lạnh
                                        <span className="checkmark__radio"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="customize size">
                                <p className="customize__title">Chọn size</p>
                                <div className="customize__content">
                                    <label className="container__radio">
                                        <input type="radio" value="sizeM" name="size" defaultChecked /> Size M
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="sizeS" name="size" /> Size S
                                        <span className="checkmark__radio"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="customize sugar">
                                <p className="customize__title">Chọn đường</p>
                                <div className="customize__content">
                                    <label className="container__radio">
                                        <input type="radio" value="100%sugar" name="sugar" defaultChecked />
                                        100% đường
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="70%sugar" name="sugar" />
                                        70% đường
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="50%sugar" name="sugar" />
                                        50% đường
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="30%sugar" name="sugar" />
                                        30% đường
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="nosugar" name="sugar" />
                                        Không đường
                                        <span className="checkmark__radio"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="customize ice">
                                <p className="customize__title">Chọn đá</p>
                                <div className="customize__content">
                                    <label className="container__radio">
                                        <input type="radio" value="100%ice" name="ice" defaultChecked /> 100% đá
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="70%ice" name="ice" /> 70% đá
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="50%ice" name="ice" /> 50% đá
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="30%ice" name="ice" /> 30% đá
                                        <span className="checkmark__radio"></span>
                                    </label>

                                    <label className="container__radio">
                                        <input type="radio" value="noice" name="ice" /> Không đá
                                        <span className="checkmark__radio"></span>
                                    </label>
                                </div>
                            </div>

                            <div className="customize topping">
                                <p className="customize__title">Chọn topping</p>
                                <div className="customize__content">
                                    <div className="topping__wrap">
                                        <label className="container__checkbox">
                                            <input type="checkbox" value="30%ice" name="ice" /> Thêm Trân Châu Sương Mai
                                            <span className="checkmark__checkbox"></span>
                                        </label>
                                        <p className="topping__price">+ 6,000đ</p>
                                    </div>

                                    <div className="topping__wrap">
                                        <label className="container__checkbox">
                                            <input type="checkbox" value="30%ice" name="ice" /> Thêm Trân Châu Sương Mai
                                            <span className="checkmark__checkbox"></span>
                                        </label>
                                        <p className="topping__price">+ 6,000đ</p>
                                    </div>

                                    <div className="topping__wrap">
                                        <label className="container__checkbox">
                                            <input type="checkbox" value="30%ice" name="ice" /> Thêm Trân Châu Sương Mai
                                            <span className="checkmark__checkbox"></span>
                                        </label>
                                        <p className="topping__price">+ 6,000đ</p>
                                    </div>

                                    <div className="topping__wrap">
                                        <label className="container__checkbox">
                                            <input type="checkbox" value="30%ice" name="ice" /> Thêm Trân Châu Sương Mai
                                            <span className="checkmark__checkbox"></span>
                                        </label>
                                        <p className="topping__price">+ 6,000đ</p>
                                    </div>

                                    <div className="topping__wrap">
                                        <label className="container__checkbox">
                                            <input type="checkbox" value="30%ice" name="ice" /> Thêm Trân Châu Sương Mai
                                            <span className="checkmark__checkbox"></span>
                                        </label>
                                        <p className="topping__price">+ 6,000đ</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}

            <div className="close__btn" onClick={props.onClose}>
                <IoClose className="close__btn--icon" />
            </div>
        </div>
    );
};

export default AddProduct;
