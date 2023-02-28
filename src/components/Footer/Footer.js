import './Footer.scss';
import footerLogo from '../../assets/logo/ft_logo.png';
import googleStore from '../../assets/icon/Googleplay.png';
import appleStore from '../../assets/icon/Appstore.png';
import boCongThuong from '../../assets/icon/bo_cong_thuong_grande.png';
import { FaMapMarker } from 'react-icons/fa';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaGooglePlusG } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer>
            <div className="footer__wrap container">
                <div className="footer__main">
                    <img src={footerLogo} alt="Footer logo" className="footer__logo" />
                    <div className="footer__1">
                        <div className="footer__title">Công ty CP TM & Dv Taco Việt Nam</div>
                        <div className="footer__info">
                            <FaMapMarker className="footer__icon" />
                            Tầng 2 tòa nhà T10, Times City Vĩnh Tuy, Hai Bà Trưng, Hà Nội.
                        </div>
                        <div className="footer__info">
                            <FaPhone className="footer__icon" />
                            034.344.1421
                        </div>
                        <div className="footer__info">
                            <AiOutlineMail className="footer__icon" />
                            ngovoxuantruong8@gmail.com
                        </div>
                        <div className="footer__info">Số ĐKKD: 9999999. Ngày cấp: 16/03/2017.</div>
                        <div className="footer__info">Nơi cấp: Sở kế hoạch và Đầu tư Thành phố</div>
                        <div className="footer__info social">
                            <a href="#!">
                                <FaFacebookSquare className="footer__icon" />
                            </a>
                            <a href="#!">
                                <FaInstagram className="footer__icon" />
                            </a>
                            <a href="#!">
                                <FaYoutube className="footer__icon" />
                            </a>
                            <a href="#!">
                                <FaTwitter className="footer__icon" />
                            </a>
                            <a href="#!">
                                <FaGooglePlusG className="footer__icon" />
                            </a>
                        </div>
                        <div className="footer__info download__app">
                            <a href="#!" target="_blank">
                                <img src={googleStore} alt="Google store img" />
                            </a>
                            <a href="#!" target="_blank">
                                <img src={appleStore} alt="Apple store img" />
                            </a>
                            <a href="#!" target="_blank">
                                <img src={boCongThuong} alt="Bo Cong Thuong img" />
                            </a>
                        </div>
                    </div>

                    <div className="footer__2">
                        <div className="footer__title">Về chúng tôi</div>
                        <div className="footer__content">
                            <ul className="menu__footer__aboutUs">
                                <li className="menu__footer--item">
                                    <a href="#!">Giới thiệu về TocoToco</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Nhượng quyền</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Tin tức khuyến mãi</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Cửa hàng</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Quy định chung</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">TT liên hệ & ĐKKD</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="footer__2">
                        <div className="footer__title">Chính sách</div>
                        <div className="footer__content">
                            <ul className="menu__footer__aboutUs">
                                <li className="menu__footer--item">
                                    <a href="#!">Chính sách thành viên</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Hình thức thanh toán</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Vận chuyển giao nhận</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Đổi trả và hoàn tiền</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Bảo vệ thông tin cá nhân</a>
                                </li>
                                <li className="menu__footer--item">
                                    <a href="#!">Bảo trì, bảo hành</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer__bottom">
                    <div className="footer__left">ToCoToCo - Thương hiệu trà sữa tiên phong sử dụng nguồn nông sản</div>

                    <div className="footer__right">Copyrights © 2019 by ToCoToCoTea. All rights reserved.</div>
                </div>
            </div>
            <div className="footer__cover"></div>
        </footer>
    );
};

export default Footer;
