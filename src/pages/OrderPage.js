import { useState } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import './OrderPage.scss';
import { FaChevronUp } from 'react-icons/fa';
import logo from '../assets/logo/logo.png';

import PopupAddProduct from '../UI/PopupAddProduct';
import OrderPageLeft from './OrderPage/OrderPageLeft';
import OrderPageRight from './OrderPage/OrderPageRight';
import OrderPageCenter from './OrderPage/OrderPageCenter';

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
                    <OrderPageLeft />

                    <OrderPageCenter onOpen={openAddProductPopupHandler} />

                    <OrderPageRight />
                </div>
            </div>

            <HashLink smooth to={'order/#hotproduct'} id="scrollToTop">
                <FaChevronUp />
            </HashLink>
        </>
    );
};

export default OrderPage;
