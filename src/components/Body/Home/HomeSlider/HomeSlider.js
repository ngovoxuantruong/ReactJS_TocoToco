// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Navigation } from 'swiper';

import './HomeSlider.scss';

import sliderBanner1 from '../../../../assets/img/Slider/Slide_banner-1-1.jpg';
import sliderBanner2 from '../../../../assets/img/Slider/Slide_banner-2.jpg';
import sliderBanner3 from '../../../../assets/img/Slider/Slide_banner-3.jpg';

const sliderBannerArr = [sliderBanner1, sliderBanner2, sliderBanner3];

const HomeSlider = () => {
    return (
        <>
            <Swiper
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                navigation={true}
                modules={[Autoplay, Navigation]}
                className="mySwiper"
                loop={true}
            >
                {/* Render Slider banner item */}
                {sliderBannerArr.map((item) => (
                    <SwiperSlide key={item}>
                        <div className="slider__item">
                            <div className="slider__bg"></div>
                            <img src={item} alt="#!" className="slider__img" />
                            <div className="slider__mouseScrollDown">
                                <a href="#!" className="order__now">
                                    Đặt hàng ngay
                                </a>
                                <div className="scroll__icon"></div>
                                <div className="button__scroll">Cuộn xuống</div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default HomeSlider;
