import { useParams } from 'react-router-dom';

import './AddProduct.scss';
import { IoClose } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
import ProductContext from '../../context/ProductContext';

const AddProduct = (props) => {
    const [productData, setProductData] = useState([]);

    // get product data through context
    const ctx = useContext(ProductContext);

    const productId = useParams();

    // Filter by checking, if productID ( through params ) === product ID in context Data, i will filter it and get the final data
    const getProductData = () => {
        if (productId.productId) {
            const data = ctx.filter((item) => item.id === productId.productId);
            setProductData(data);
        }
    };

    useEffect(() => {
        getProductData();
    }, []);

    // Check Instant milk, if click on product Instant milk, we hide customize sugar, ice, topping
    /*   const includesInstantMilk = (productData[0].name = productData[0].name.includes('Instant')); */

    return (
        <div className="popup popup__add__product">
            {/* Render product Info by filter the array from context */}
            {productData.map((productInfo) => (
                <div className="popup__content" key={productInfo.id}>
                    <div className="popup__product">
                        <div className="product__infomation">
                            <div className="product__infomation--left">
                                <img src={productInfo.img} alt="Product" className="product__infomation--img" />
                            </div>

                            <div className="product__infomation--right">
                                <p className="product__infomation--name">{productInfo.name}</p>
                                <div className="product__infomation--price">
                                    <p className="product__price--sale">{productInfo.salePrice}</p>
                                    {productInfo.originPrice && (
                                        <p className="product__price--origin">{productInfo.originPrice}</p>
                                    )}
                                </div>
                                <p className="product__infomation--info">Chưa có thông tin</p>
                                <div className="wrap__quantity">
                                    <div className="change__amount__quantity">
                                        <div className="change__quantity decrease">-</div>
                                        <p className="amount">1</p>
                                        <div className="change__quantity increase">+</div>
                                    </div>

                                    <div className="btn__price__product">+ {productInfo.salePrice}</div>
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
