import franchiseBanner from '../../../../assets/banner/img_home_franchise.png';
import './HomeFranchise.scss';

import SectionTitle from '../../../../UI/SectionTitle';
import SectionTitleH2 from '../../../../UI/SectionTitleH2';
import SectionTitleH3 from '../../../../UI/SectionTitleH3';
import IconBottom from '../../../../UI/IconBottom';
import Button from '../../../../UI/Button';

const HomeFranchise = () => {
    return (
        <div className="home__franchise container">
            <div className="home__franchise--left">
                {/* Section title components from UI folderm. This is a re-use component */}
                <SectionTitle>
                    <SectionTitleH2>ToCoToCo Franchise</SectionTitleH2>
                    <SectionTitleH3>Nhượng quyền</SectionTitleH3>
                    <IconBottom></IconBottom>
                </SectionTitle>

                <div className="franchise__description">
                    Gia nhập đế chế 300 TRIỆU USD. Nếu bạn bắt đầu kinh doanh khởi nghiệp ẩm thực, hoặc muốn đầu tư vào
                    lĩnh vực này, thương hiệu TocoToco chắc chắn sẽ là một lựa chọn đáng cân nhắc cho bạn.
                </div>

                <Button>Xem thêm</Button>
            </div>

            <div className="home__franchise--right">
                <img src={franchiseBanner} alt="Franchise Banner" className="img__banner__franchise" />
            </div>
        </div>
    );
};

export default HomeFranchise;
