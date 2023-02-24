import { useEffect, useState } from 'react';
import './Header.scss';
import HeaderLeft from './HeaderLeft';
import HeaderRight from './HeaderRight';

const Header = () => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = () => {
        const position = window.pageYOffset;
        setScrollPosition(position);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header id="header__wrap" className={scrollPosition < 100 ? null : 'scroll__header'}>
            <div id="header" className="container">
                <HeaderLeft />
                <HeaderRight />
            </div>
        </header>
    );
};

export default Header;
