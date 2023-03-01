import { useState } from 'react';

import './OrderPage.scss';
import logo from '../assets/logo/logo.png';
import glassTea from '../assets/icon/icon-glass-tea.png';

import HotProduct from '../components/Product/HotProduct';
import PopupAddProduct from '../UI/PopupAddProduct';
import WrapProduct from '../UI/WrapProduct';

import { Link } from 'react-router-dom';

const OrderPage = (props) => {
    const [closeModal, setCloseModal] = useState(false);
    const [isShowProductPopup, setIsShowProductPopup] = useState(false);

    const closeAddProductPopupHandler = () => {
        setIsShowProductPopup(!isShowProductPopup);
        setCloseModal(!closeModal);
    };

    const openAddProductPopupHandler = () => {
        setIsShowProductPopup(!isShowProductPopup);
        setCloseModal(!closeModal);
    };

    closeModal && document.documentElement.classList.add('overflow-hidden');

    // Condition to remove html overflow class
    !closeModal && document.documentElement.classList.remove('overflow-hidden');

    return (
        <>
            {isShowProductPopup && <PopupAddProduct onClose={closeAddProductPopupHandler} />}
            <div className="order__header">
                <Link to={'/'}>
                    <img src={logo} alt="logo" className="order__logo" />
                </Link>
                <div className="order__search">
                    <input type="text" placeholder="Tìm kiếm sản phẩm..." className="order__search__input" />
                </div>
                <div className="right">
                    <div className="login__btn">Đăng nhập</div>
                </div>
            </div>

            <div className="page__order">
                <div className="order__content">
                    <div className="order__sidebar sidebar__left">
                        <div className="category">
                            <div className="category__title">Danh mục</div>
                            <div className="category__list">
                                <div className="category__item">
                                    <div className="category__name">Món nổi bật</div>
                                    <div className="category__amount">24</div>
                                </div>

                                <div className="category__item">
                                    <div className="category__name">Trà sữa</div>
                                    <div className="category__amount">24</div>
                                </div>

                                <div className="category__item">
                                    <div className="category__name">Fresh Fruit Tea</div>
                                    <div className="category__amount">24</div>
                                </div>

                                <div className="category__item">
                                    <div className="category__name">Macchiato Cream Cheese</div>
                                    <div className="category__amount">24</div>
                                </div>

                                <div className="category__item">
                                    <div className="category__name">Sữa chua dẻo</div>
                                    <div className="category__amount">24</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="order__center">
                        <WrapProduct>
                            <HotProduct onOpen={openAddProductPopupHandler} />
                        </WrapProduct>
                    </div>

                    <div className="order__sidebar sidebar__right">
                        <div className="cart__group__top">
                            <div className="cart__title">
                                <div className="cart__title--left">Giỏ hàng của tôi</div>

                                <div className="cart__title--right">Xoá tất cả</div>
                            </div>

                            <div className="cart__list">
                                <div className="cart__item">
                                    <div className="cart__item--left">
                                        <p className="cart__item--name">Trà Đào Dâu Tây Kem Phô Mai(M)</p>
                                        <p className="cart__item--customize">30% đá,70% đường</p>
                                        <p className="cart__item--total">28,000đ x 1 = 28,000đ</p>
                                    </div>

                                    <div className="cart__item--right">
                                        <div className="change__quantity decrease">-</div>
                                        <p className="amount">1</p>
                                        <div className="change__quantity increase">+</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="cart__group__bottom">
                            <div className="cart__total__amount">
                                <img src={glassTea} alt="Glass tea" className="img__toco" />
                                <span className="total__amount--text1">x</span>
                                <span className="total__amount--text2">1</span>
                                <span className="total__amount--text3">=</span>
                                <span className="total__amount--text4">28,000</span>
                            </div>
                            <div className="cart__pay">
                                <div className="btn__cart">Thanh toán</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderPage;
