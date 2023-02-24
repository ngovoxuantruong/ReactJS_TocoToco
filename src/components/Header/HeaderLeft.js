import './HeaderLeft.scss';
import logo from '../../assets/logo/logo.png';
import { AiOutlineDown } from 'react-icons/ai';

const HeaderLeft = () => {
    return (
        <div className="left">
            <a href="" className="logo">
                <img src={logo} alt="Logo" className="logo__img" />
            </a>

            <div className="menu">
                <div className="menu__primary">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <a href="#!" className="menu__item--current">
                                Trang chủ
                            </a>
                        </li>
                        <li className="menu__item">
                            <a href="#!">
                                Giới thiệu <AiOutlineDown className="menu__icon" />
                            </a>
                            <ul className="sub__menu">
                                <li className="sub__menu--item">
                                    <a href="#!">Lịch sử và sứ mệnh</a>
                                </li>

                                <li className="sub__menu--item">
                                    <a href="#!">Thành tựu đạt được</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <a href="#!">
                                Sản phẩm <AiOutlineDown className="menu__icon" />
                            </a>
                            <ul className="sub__menu">
                                <li className="sub__menu--item">
                                    <a href="#!">Instant milktea</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <a href="#!">
                                Tin tức <AiOutlineDown className="menu__icon" />
                            </a>
                            <ul className="sub__menu">
                                <li className="sub__menu--item">
                                    <a href="#!">Tin tức khuyến mãi</a>
                                </li>

                                <li className="sub__menu--item">
                                    <a href="#!">Câu chuyện thương hiệu</a>
                                </li>

                                <li className="sub__menu--item">
                                    <a href="#!">Sự kiện</a>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <a href="#!">Cửa hàng</a>
                        </li>
                        <li className="menu__item">
                            <a href="#!">Tuyển dụng</a>
                        </li>
                        <li className="menu__item">
                            <a href="#!">Nhượng quyền</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default HeaderLeft;
