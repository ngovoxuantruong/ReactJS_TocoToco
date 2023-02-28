const HotProduct = (props) => {
    const hotProductArr = [
        {
            img: 'https://tocotocotea.com/wp-content/uploads/2023/01/Tra-sua-pho-mai-tuoi.png',
            name: 'Trà Sữa Phô Mai Tươi',
            originPrice: '40,000đ',
            salePrice: '28,000đ',
        },
        {
            img: 'https://tocotocotea.com/wp-content/uploads/2023/01/Tra-Dao-Dau-Tay-Kem-Pho-Mai.png',
            name: 'Trà Đào Dâu Tây Kem Phô Mai',
            originPrice: '40,000đ',
            salePrice: '28,000đ',
        },
        {
            img: 'https://tocotocotea.com/wp-content/uploads/2022/10/sua-chua-man-hat-sen-.png',
            name: 'Sữa Chua Mận Hạt Sen',
            originPrice: '40,000đ',
            salePrice: '28,000đ',
        },
        {
            img: 'https://tocotocotea.com/wp-content/uploads/2022/10/tra-man-hat-sen.png',
            name: 'Trà Mận Hạt Sen',
            originPrice: '40,000đ',
            salePrice: '28,000đ',
        },
        {
            img: 'https://tocotocotea.com/wp-content/uploads/2022/06/O-Long-xoai-kem-coffee.jpg',
            name: 'Ô Long Xoài Kem Cà Phê',
            originPrice: '40,000đ',
            salePrice: '28,000đ',
        },
        {
            img: 'https://tocotocotea.com/wp-content/uploads/2022/06/Tra-dao-buoi-hong-tran-chau-baby.jpg',
            name: 'Trà Đào Bưởi Hồng Trân  Châu Baby',
            originPrice: '40,000đ',
            salePrice: '28,000đ',
        },
    ];

    return (
        <>
            {hotProductArr.map((product) => (
                <div className="order__product" key={product.img} onClick={props.onOpen}>
                    <img src={product.img} alt="product" className="order__product--img" />
                    <p className="order__product--name">{product.name}</p>
                    <div className="order__product--price">
                        <p className="product__price--sale">{product.salePrice}</p>
                        <p className="product__price--origin">{product.originPrice}</p>
                    </div>
                    <div className="btn__increase">+</div>
                </div>
            ))}
        </>
    );
};

export default HotProduct;
