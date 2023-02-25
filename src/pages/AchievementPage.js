import achieventmentImg from '../assets/img/Achievement/achievementImg.webp';

const HistoryPage = () => {
    return (
        <>
            <div className="page__top__banner">Giới thiệu</div>

            <div className="page__content container">
                <p className="page__title">Thành tựu đạt được</p>
            </div>

            <div className="page__wrap__img">
                <img src={achieventmentImg} alt="Achievement image" className="page__img" />
            </div>
        </>
    );
};

export default HistoryPage;
