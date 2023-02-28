import { Link, NavLink } from 'react-router-dom';
import './HeaderLeft.scss';
import logo from '../../assets/logo/logo.png';
import { AiOutlineDown } from 'react-icons/ai';

const HeaderLeft = () => {
    return (
        <div className="left">
            <Link to={''} className="logo">
                <img src={logo} alt="Logo" className="logo__img" />
            </Link>

            <div className="menu">
                <div className="menu__primary">
                    <ul className="menu__list">
                        <li className="menu__item">
                            <NavLink
                                to={'/'}
                                className={({ isActive }) => (isActive ? 'menu__item--current' : undefined)}
                                end
                            >
                                Trang chủ
                            </NavLink>
                        </li>
                        <li className="menu__item">
                            <NavLink
                                to={'history'}
                                className={({ isActive }) => (isActive ? 'menu__item--current' : undefined)}
                            >
                                Giới thiệu <AiOutlineDown className="menu__icon" />
                            </NavLink>
                            <ul className="sub__menu">
                                <li className="sub__menu--item">
                                    <NavLink to={'history'}>Lịch sử và sứ mệnh</NavLink>
                                </li>

                                <li className="sub__menu--item">
                                    <NavLink to={'achievement'}>Thành tựu đạt được</NavLink>
                                </li>
                            </ul>
                        </li>
                        <li className="menu__item">
                            <NavLink to={'order'}>
                                Sản phẩm <AiOutlineDown className="menu__icon" />
                            </NavLink>
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
