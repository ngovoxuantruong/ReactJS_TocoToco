import './HeaderRight.scss';
import { HiSearch } from 'react-icons/hi';

const HeaderRight = () => {
    return (
        <div className="right">
            <i className="search">
                <HiSearch />
            </i>
        </div>
    );
};

export default HeaderRight;
