import { useEffect, useState } from 'react';
import './HomeNewsPromotion.scss';
import { AiOutlinePlayCircle } from 'react-icons/ai';

import cardImg1 from '../../../../assets/card/Hinh-thumb-2-scaled.jpg';
import cardImg2 from '../../../../assets/card/SPM_CHOCO_zalo-1.png';
import cardImgAmericanLoveToco from '../../../../assets/card/tocotoco-thi-truong-my.png';
import videoBG1 from '../../../../assets/videoImg/video_bg.png';
import videoBG2 from '../../../../assets/videoImg/TACO_THƯƠNG-HIỆU-TIÊU-BIỂU-CHÂU-Á-THÁI-BÌNH-DƯƠNG-2021.jpg';
import videoBG3 from '../../../../assets/videoImg/Clip_NML_cửa-hàng_B-C.jpg';

import Button from '../../../../UI/Button';
import IconButton from '../../../../UI/IconBottom';
import SectionTitle from '../../../../UI/SectionTitle';
import SectionTitleH2 from '../../../../UI/SectionTitleH2';
import SectionTitleH3 from '../../../../UI/SectionTitleH3';
import VideoPopUp from '../../../../UI/VideoPopUp';

const HomeNewsPromotion = () => {
    const sectionContentLeft = [
        {
            img: cardImg1,
            title: `ToCoToCo “cháy” cùng hàng trăm học sinh Amsterdam và Chuyên Ngoại Ngữ trong chương trình
        Camp Aletheia`,
            description: `Tiếp nối các chương trình hướng đến cộng đồng và tài trợ sân chơi bổ ích cho các bạn học
        sinh sinh viên, ToCoToCo tự hào khi đồng hành cùng […]`,
            button: 'Xem thêm',
        },
        {
            img: cardImg2,
            title: `Cùng ToCoToCo nhân đôi sự ngọt ngào mùa lễ hội`,
        },
        {
            img: cardImg2,
            title: `Tâm huyết nâng tầm giá trị nông sản Việt của ToCoToCo`,
        },
        {
            img: cardImg2,
            title: `VỊ GIÒN TAN – GIÁNG SINH RỘN RÀNG CÙNG CHOCO NGŨ CỐC KEM CAFÉ VÀ HỒNG TRÀ NGŨ CỐC KEM
            CAFÉ`,
        },
        {
            img: cardImgAmericanLoveToco,
            title: `Vì sao khách hàng tại thị trường Mỹ ưa thích vị đậm đà khác biệt của ToCoToCo?`,
        },
    ];

    // Open youtube video and close youtube video through state
    const [isShowYoutube1, setIsShowYoutube1] = useState(false);
    const [isShowYoutube2, setIsShowYoutube2] = useState(false);
    const [isShowYoutube3, setIsShowYoutube3] = useState(false);
    const [closeModal, setCloseModal] = useState(false);

    const showYoutubeHandler1 = () => {
        setIsShowYoutube1(!isShowYoutube1);
        setCloseModal(!closeModal);
        document.documentElement.classList.add('overflow-hidden');
    };

    const showYoutubeHandler2 = () => {
        setIsShowYoutube2(!isShowYoutube2);
        setCloseModal(!closeModal);
        document.documentElement.classList.add('overflow-hidden');
    };

    const showYoutubeHandler3 = () => {
        setIsShowYoutube3(!isShowYoutube3);
        setCloseModal(!closeModal);
        document.documentElement.classList.add('overflow-hidden');
    };

    const closeVideoHandler = () => {
        setIsShowYoutube1(!isShowYoutube1);
    };
    // Condition to remove html overflow class
    !closeModal && document.documentElement.classList.remove('overflow-hidden');

    return (
        <div className="home__news__promotion container">
            <SectionTitle>
                <SectionTitleH2>Tin Tức và Khuyến Mãi</SectionTitleH2>
                <SectionTitleH3>Khám phá Tocotoco nhận ngay khuyến mãi</SectionTitleH3>
                <IconButton></IconButton>
            </SectionTitle>

            <div className="section__content container marginTop-medium">
                <div className="section__content--left">
                    {/* Render card news throught map method */}
                    {sectionContentLeft.map((item) => (
                        <a href="#!" className="card__news" key={item.title}>
                            <div className="wrap__card__img">
                                <img src={item.img} alt="Card Image" className="card__img" />
                            </div>
                            <div className="card__info">
                                <div className="card__info--title">{item.title}</div>
                                {item.description && <div className="card__info--description">{item.description}</div>}
                                {item.button && <Button>{item.button}</Button>}
                            </div>
                        </a>
                    ))}
                </div>

                <div className="section__content--right">
                    <div className="home__videos">
                        <div className="video video1" onClick={showYoutubeHandler1}>
                            <div className="wrap__video__img">
                                <AiOutlinePlayCircle className="home__btn__play" />
                                <img src={videoBG1} alt="Video background" />
                                {isShowYoutube1 && (
                                    <VideoPopUp
                                        onClose={closeVideoHandler}
                                        src="https://www.youtube.com/embed/8eHi2B2tQBs"
                                    ></VideoPopUp>
                                )}
                            </div>
                            <div className="video__title">
                                CON ĐƯỜNG KHỞI NGHIỆP CỦA NGƯỜI SÁNG LẬP THƯƠNG HIỆU TRÀ SỮA VIỆT NAM - TOCOTOCO
                            </div>
                        </div>

                        <div className="video video2" onClick={showYoutubeHandler2}>
                            <div className="wrap__video__img">
                                <AiOutlinePlayCircle className="home__btn__play" />
                                <img src={videoBG2} alt="Video background" />
                                {isShowYoutube2 && (
                                    <VideoPopUp src="https://www.youtube.com/embed/63jXIH-MmLw"></VideoPopUp>
                                )}
                            </div>
                            <div className="video__title">
                                ToCoToCo đạt top 10 thương hiệu Châu Á Thái Bình Dương 2021
                            </div>
                        </div>

                        <div className="video video2" onClick={showYoutubeHandler3}>
                            <div className="wrap__video__img">
                                <AiOutlinePlayCircle className="home__btn__play" />
                                <img src={videoBG3} alt="Video background" />
                                {isShowYoutube3 && (
                                    <VideoPopUp src="https://www.youtube.com/embed/z5qGFD1_YGA"></VideoPopUp>
                                )}
                            </div>
                            <div className="video__title">
                                ToCoToCo thay đổi quan niệm về nguyên liệu cho ngành trà sữa Việt
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeNewsPromotion;
