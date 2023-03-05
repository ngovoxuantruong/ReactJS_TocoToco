import './AddProduct.scss';
import { IoClose } from 'react-icons/io5';
import { useContext, useEffect, useState } from 'react';
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

    // Add topping
    const toppingArr = [
        { name: 'Thêm Trân Châu Sương Mai', price: 6000 },
        { name: 'Thêm Trân Châu Baby', price: 5000 },
        { name: 'Thêm Trân Châu Hoàng Kim', price: 5000 },
        { name: 'Thêm Thạch Băng Tuyết', price: 5000 },
        { name: 'Thêm Macchiato', price: 7000 },
        { name: 'Thêm Rau Câu', price: 5000 },
        { name: 'Thêm Trân Châu Sợi', price: 5000 },
        { name: 'Thêm Đậu Đỏ', price: 6000 },
        { name: 'Thêm Pudding', price: 5000 },
        { name: 'Thêm Thạch Café', price: 5000 },
        { name: 'Topping Thạch Dứa', price: 5000 },
        { name: 'Thêm Hạt Sen', price: 9000 },
        { name: 'Thêm Thạch Dâu Tằm', price: 5000 },
        { name: 'Thêm Phô Mai Tươi', price: 7000 },
    ];

    // Get size, sugar, ice, topping value though radio and checkbox
    const [size, setSize] = useState('size M');
    const [sugar, setSugar] = useState('100% đuòng');
    const [ice, setIce] = useState('100% đá');
    const [topping, setTopping] = useState([]);

    const getSizHandler = (e) => {
        setSize(e.target.value);
    };

    const getSugarHandler = (e) => {
        setSugar(e.target.value);
    };

    const getIceHandler = (e) => {
        setIce(e.target.value);
    };

    const getToppingHandler = (e) => {
        setTopping((prev) => [...prev, e.target.value]);
    };

    const toppingValue = [size, sugar, ice, topping];

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

                                    <div
                                        className="btn__price__product"
                                        onClick={() => value.submitProduct(toppingValue)}
                                    >
                                        + {productInfo.amount === 1 ? productInfo.salePrice : value.totalAmount}đ
                                    </div>
                                </div>
                            </div>
                        </div>

                        {productInfo.name.includes('Instant Milk Tea') ? (
                            <p className="customize__title">Chọn loại</p>
                        ) : (
                            <div className="product__customize custom__scrollbar">
                                <div className="customize type">
                                    <p className="customize__title">Chọn loại</p>
                                    <div className="customize__content">
                                        <label className="container__radio">
                                            <input type="radio" value="Lạnh" name="type" defaultChecked /> Lạnh
                                            <span className="checkmark__radio"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="customize size">
                                    <p className="customize__title">Chọn size</p>
                                    <div className="customize__content">
                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="size M"
                                                name="size"
                                                defaultChecked
                                                onChange={getSizHandler}
                                            />{' '}
                                            Size M<span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input type="radio" value="size S" name="size" onChange={getSizHandler} />{' '}
                                            Size S<span className="checkmark__radio"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="customize sugar">
                                    <p className="customize__title">Chọn đường</p>
                                    <div className="customize__content">
                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="100% đường"
                                                name="sugar"
                                                defaultChecked
                                                onChange={getSugarHandler}
                                            />
                                            100% đường
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="70% đường"
                                                name="sugar"
                                                onChange={getSugarHandler}
                                            />
                                            70% đường
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="50% đường"
                                                name="sugar"
                                                onChange={getSugarHandler}
                                            />
                                            50% đường
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="30% đường"
                                                name="sugar"
                                                onChange={getSugarHandler}
                                            />
                                            30% đường
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="Không đường"
                                                name="sugar"
                                                onChange={getSugarHandler}
                                            />
                                            Không đường
                                            <span className="checkmark__radio"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="customize ice">
                                    <p className="customize__title">Chọn đá</p>
                                    <div className="customize__content">
                                        <label className="container__radio">
                                            <input
                                                type="radio"
                                                value="100% đá"
                                                name="ice"
                                                defaultChecked
                                                onChange={getIceHandler}
                                            />{' '}
                                            100% đá
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input type="radio" value="70% đá" name="ice" onChange={getIceHandler} />{' '}
                                            70% đá
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input type="radio" value="50% đá" name="ice" onChange={getIceHandler} />{' '}
                                            50% đá
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input type="radio" value="30% đá" name="ice" onChange={getIceHandler} />{' '}
                                            30% đá
                                            <span className="checkmark__radio"></span>
                                        </label>

                                        <label className="container__radio">
                                            <input type="radio" value="Không đá" name="ice" onChange={getIceHandler} />{' '}
                                            Không đá
                                            <span className="checkmark__radio"></span>
                                        </label>
                                    </div>
                                </div>

                                <div className="customize topping">
                                    <p className="customize__title">Chọn topping</p>
                                    <div className="customize__content">
                                        {toppingArr.map((item) => (
                                            <div className="topping__wrap" key={item.name}>
                                                <label className="container__checkbox">
                                                    <input
                                                        type="checkbox"
                                                        value="Thêm Trân Châu Sương Mai"
                                                        onChange={getToppingHandler}
                                                    />
                                                    {item.name}
                                                    <span className="checkmark__checkbox"></span>
                                                </label>
                                                <p className="topping__price">+ {item.price}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        )}
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
