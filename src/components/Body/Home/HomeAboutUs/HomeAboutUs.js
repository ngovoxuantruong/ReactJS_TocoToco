import './HomeAboutUs.scss';
import bannerAboutUs from '../../../../assets/banner/banner_about_us.png';
import Button from '../../../../UI/Button';
import IconButton from '../../../../UI/IconBottom';
import SectionTitle from '../../../../UI/SectionTitle';
import SectionTitleH2 from '../../../../UI/SectionTitleH2';
import SectionTitleH3 from '../../../../UI/SectionTitleH3';

const HomeAboutUs = () => {
    return (
        <div className="home__about__us container">
            <div className="img__banner__about__us">
                <img src={bannerAboutUs} alt="About us banner" />
            </div>
            <div className="home__about__us--content">
                {/* Section title components from UI folderm. This is a re-use component */}
                <SectionTitle>
                    <SectionTitleH2>ToCoToCo Story</SectionTitleH2>
                    <SectionTitleH3>Về chúng tôi</SectionTitleH3>
                    <IconButton />
                </SectionTitle>

                <div className="description">
                    Bên cạnh niềm tự hào về những ly trà sữa ngon – sạch – tươi, chúng tôi luôn tự tin mang đến khách
                    hàng những trải nghiệm tốt nhất về dịch vụ và không gian.
                </div>
                <Button className="btn__view__all">Xem thêm</Button>
            </div>
        </div>
    );
};

export default HomeAboutUs;
