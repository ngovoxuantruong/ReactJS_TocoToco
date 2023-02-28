import BackDrop from './BackDrop';
import ReactDOM from 'react-dom';
import AddProduct from '../components/AddProduct/AddProduct';

const PopupAddProduct = (props) => {
    const backdropRoot = document.getElementById('backdrop');
    const modalRoot = document.getElementById('modal-root');

    return (
        <div>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, backdropRoot)}
            {ReactDOM.createPortal(<AddProduct onClose={props.onClose} />, modalRoot)}
        </div>
    );
};

export default PopupAddProduct;
