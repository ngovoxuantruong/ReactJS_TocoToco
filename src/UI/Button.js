import classes from './Button.module.scss';

const Button = (props) => {
    return <div className={`${classes.btn} ${props.className}`}>{props.children}</div>;
};

export default Button;
