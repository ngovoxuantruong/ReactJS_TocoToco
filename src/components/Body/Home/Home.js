import HomeAboutUs from './HomeAboutUs/HomeAboutUs';
import HomeFranchise from './HomeFranchise/HomeFranchise';
import HomeHotProduct from './HomeHotProduct/HomeHotProduct';
import HomeNewsPromotion from './HomeNewsPromotion/HomeNewsPromotion';
import HomeSlider from './HomeSlider/HomeSlider';

const Home = () => {
    return (
        <div>
            <HomeSlider />
            <HomeHotProduct />
            <HomeAboutUs />
            <HomeFranchise />
            <HomeNewsPromotion />
        </div>
    );
};

export default Home;
