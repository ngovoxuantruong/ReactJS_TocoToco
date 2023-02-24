import classes from './SectionTitle.module.scss';

const SectionTitle = (props) => {
    return <div className={classes['section__title']}>{props.children}</div>;
};

export default SectionTitle;
