import hotProduct1 from '../../../../assets/img/HotProduct/Tra-sua-pho-mai-tuoi.png';
import hotProduct2 from '../../../../assets/img/HotProduct/Tra-Dao-Dau-Tay-Kem-Pho-Mai.png';
import hotProduct3 from '../../../../assets/img/HotProduct/sua-chua-man-hat-sen-.png';
import hotProduct4 from '../../../../assets/img/HotProduct/tra-man-hat-sen.png';
import hotProduct5 from '../../../../assets/img/HotProduct/O-Long-xoai-kem-coffee.jpg';
import hotProduct6 from '../../../../assets/img/HotProduct/Tra-dao-buoi-hong-tran-chau-baby.jpg';
import hotProduct7 from '../../../../assets/img/HotProduct/6ly_hong.png';
import hotProduct8 from '../../../../assets/img/HotProduct/6ly_vang.png';

import './HomeHotProduct.scss';
import Button from '../../../../UI/Button';
import IconButton from '../../../../UI/IconBottom';
import SectionTitle from '../../../../UI/SectionTitle';
import SectionTitleH2 from '../../../../UI/SectionTitleH2';
import SectionTitleH3 from '../../../../UI/SectionTitleH3';

const HomeHotProduct = () => {
    const HomeHotProductArr = [
        {
            img: hotProduct1,
            title: 'Trà sữa phô mai tươi',
            origin_price: '28,000đ',
            sale_price: '40,000đ',
        },
        {
            discount_tag: '39%',
            img: hotProduct2,
            title: 'Trà Đào Dâu Tây Kem Phô Mai',
            origin_price: '28,000đ',
            sale_price: '46,000đ',
        },
        {
            discount_tag: '42%',
            img: hotProduct3,
            title: 'Sữa Chua Mận Hạt Sen',
            origin_price: '28,000đ',
            sale_price: '48,000đ',
        },
        {
            discount_tag: '42%',
            img: hotProduct4,
            title: 'Trà Mận Hạt Sen',
            origin_price: '28,000đ',
            sale_price: '48,000đ',
        },
        {
            discount_tag: '43%',
            img: hotProduct5,
            title: 'Ô Long Xoài Kem Cà Phê',
            origin_price: '28,000đ',
            sale_price: '49,000đ',
        },
        {
            discount_tag: '26%',
            img: hotProduct6,
            title: 'Trà Đào Bưởi Hồng Trân Châu',
            origin_price: '28,000đ',
            sale_price: '38,000đ',
        },
        {
            img: hotProduct7,
            title: 'Instant Milk Tea – Strawberry – Set 6 Ly',
            origin_price: '165,000đ',
        },
        {
            img: hotProduct8,
            title: 'Instant Milk Tea – Original – Set 6 ly',
            origin_price: '160,000đ',
        },
    ];

    return (
        <div className="home__hot__products">
            {/* Section title components from UI folderm. This is a re-use component */}
            <SectionTitle>
                <SectionTitleH2>ToCoToCo Menu</SectionTitleH2>
                <SectionTitleH3>Sản phẩm nổi bật</SectionTitleH3>
                <IconButton />
            </SectionTitle>

            <div className="hot__product__content container">
                <div className="list__products">
                    {/* Render Hot Product items */}
                    {HomeHotProductArr.map((item) => (
                        <div className="product__card" key={item.img}>
                            <div className="product__card--tag">
                                <div className="new__tag">new</div>
                                {item.discount_tag && <div className="discount__tag">{item.discount_tag}</div>}
                            </div>
                            <div className="product__card--img--warp">
                                <img src={item.img} alt="Hot product" />
                            </div>
                            <div className="product__card--content">
                                <div className="product__title">{item.title}</div>
                                <div className="product__price">
                                    <div className="product__price--origin">{item.origin_price}</div>
                                    <div className="product__price--sale">{item.sale_price}</div>
                                </div>
                                <Button className="btn__order__product">Đặt hàng</Button>
                            </div>
                        </div>
                    ))}
                </div>

                <Button className="btn__view__all">Xem tất cả</Button>
            </div>
        </div>
    );
};

export default HomeHotProduct;
