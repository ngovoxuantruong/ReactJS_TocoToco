import classes from './IconBottom.module.scss';

const IconButton = (props) => {
    return <div className={classes['icon__bottom']}>{props.children}</div>;
};

export default IconButton;
