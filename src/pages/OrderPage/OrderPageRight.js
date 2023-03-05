import glassTea from '../../assets/icon/icon-glass-tea.png';
import './OrderPageRight.scss';

const OrderPageRight = () => {
    return (
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
                            <p className="cart__item--customize">
                                Thêm Trân Châu Sương Mai,Thêm Trân Châu Baby,Thêm Trân Châu Hoàng Kim,30% đá,70% đường,
                            </p>
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
    );
};

export default OrderPageRight;
