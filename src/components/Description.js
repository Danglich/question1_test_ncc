import classNames from 'classnames/bind';
import styles from '../styles/Description.module.scss';

const cx = classNames.bind(styles);

function Description() {
    return ( <div className={cx("container")}>
        <h1 className={cx('title')}>Lorem ipsum dolor sit asmet?</h1>
        <p className={cx('description')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
    </div> );
}

export default Description;