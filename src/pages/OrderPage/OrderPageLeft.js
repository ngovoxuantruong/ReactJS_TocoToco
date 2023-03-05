import { useContext } from 'react';
import { HashLink } from 'react-router-hash-link';
import ProductContext from '../../context/ProductContext';

import './OrderPageLeft.scss';

const OrderPageLeft = () => {
    const { productDataArr } = useContext(ProductContext);

    // Get total product amount
    const HotProductAmount = productDataArr.HotProductArr;
    const MilkTeaAmount = productDataArr.MilkTeaArr;
    const FreshFruitTeaAmount = productDataArr.FreshFruitTeaArr;
    const MacchiatoAmount = productDataArr.MacchiatoArr;
    const SuaChuaAmount = productDataArr.SuaChuaArr;

    const getHotProductAmount = HotProductAmount.reduce((total, currentValue) => total + currentValue.amount, 0);
    const getMilkTeaAmount = MilkTeaAmount.reduce((total, currentValue) => total + currentValue.amount, 0);
    const getFreshFruitTeaAmount = FreshFruitTeaAmount.reduce((total, currentValue) => total + currentValue.amount, 0);
    const getMacchiatoAmount = MacchiatoAmount.reduce((total, currentValue) => total + currentValue.amount, 0);
    const getSuaChuaAmount = SuaChuaAmount.reduce((total, currentValue) => total + currentValue.amount, 0);

    return (
        <div className="order__sidebar sidebar__left">
            <div className="category">
                <div className="category__title">Danh mục</div>
                <div className="category__list">
                    <div className="category__item">
                        <HashLink smooth to={'order/#hotproduct'} className="category__name">
                            Món nổi bật
                        </HashLink>
                        <div className="category__amount">{getHotProductAmount}</div>
                    </div>

                    <div className="category__item">
                        <HashLink smooth to={'order/#milktea'} className="category__name">
                            Trà sữa
                        </HashLink>
                        <div className="category__amount">{getMilkTeaAmount}</div>
                    </div>

                    <div className="category__item">
                        <HashLink smooth to={'order/#freshfruit'} className="category__name">
                            Fresh Fruit Tea
                        </HashLink>
                        <div className="category__amount">{getFreshFruitTeaAmount}</div>
                    </div>

                    <div className="category__item">
                        <HashLink smooth to={'order/#macchiato'} className="category__name">
                            Macchiato Cream Cheese
                        </HashLink>
                        <div className="category__amount">{getMacchiatoAmount}</div>
                    </div>

                    <div className="category__item">
                        <HashLink smooth to={'order/#suachua'} className="category__name">
                            Sữa chua dẻo
                        </HashLink>
                        <div className="category__amount">{getSuaChuaAmount}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OrderPageLeft;
