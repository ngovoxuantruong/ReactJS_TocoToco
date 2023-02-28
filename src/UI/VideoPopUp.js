import ReactDOM from 'react-dom';
import classes from './VideoPopUp.module.scss';
import BackDrop from './BackDrop';

const Modal = (props) => {
    return <iframe className={classes.videoPopup} src={props.src}></iframe>;
};

const backdropRoot = document.getElementById('backdrop');
const modalRoot = document.getElementById('modal-root');

const VideoPopUp = (props) => {
    return (
        <div>
            {ReactDOM.createPortal(<BackDrop onClose={props.onClose} />, backdropRoot)}
            {ReactDOM.createPortal(<Modal src={props.src} />, modalRoot)}
        </div>
    );
};

export default VideoPopUp;
