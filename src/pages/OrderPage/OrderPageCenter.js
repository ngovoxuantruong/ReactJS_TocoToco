import './OrderPageCenter.scss';

import HotProduct from '../../components/Product/HotProduct';
import MilkTeaProduct from '../../components/Product/MilkTeaProduct';
import FreshFruitTeaProduct from '../../components/Product/FreshFruitTeaProduct';
import MacchiatoProduct from '../../components/Product/MacchiatoProduct';
import SuaChuaProduct from '../../components/Product/SuaChuaProduct';
import WrapProduct from '../../UI/WrapProduct';

const OrderPageCenter = (props) => {
    return (
        <div className="order__center">
            <WrapProduct categoryTitle={'Món nổi bật'} id={'hotproduct'}>
                <HotProduct onOpen={props.onOpen} />
            </WrapProduct>

            <WrapProduct categoryTitle={'Trà sữa'} id={'milktea'}>
                <MilkTeaProduct onOpen={props.onOpen} />
            </WrapProduct>

            <WrapProduct categoryTitle={'Fresh Fruit Tea'} id={'freshfruit'}>
                <FreshFruitTeaProduct onOpen={props.onOpen} />
            </WrapProduct>

            <WrapProduct categoryTitle={'Macchiato Cream Cheese'} id={'macchiato'}>
                <MacchiatoProduct onOpen={props.onOpen} />
            </WrapProduct>

            <WrapProduct categoryTitle={'Sữa chua dẻo'} id={'suachua'}>
                <SuaChuaProduct onOpen={props.onOpen} />
            </WrapProduct>
        </div>
    );
};

export default OrderPageCenter;
