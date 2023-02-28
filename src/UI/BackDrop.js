import './BackDrop.scss';

const BackDrop = (props) => {
    return <div className="backdrop" onClick={props.onClose}></div>;
};

export default BackDrop;
