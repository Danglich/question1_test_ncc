import classNames from 'classnames/bind';
import styles from '../styles/ProjectItem.module.scss';
import projectImage from '../acssets/images/project.jpg'

const cx = classNames.bind(styles);

function ProjectItem() {
    return ( <div className={cx('container')}>
        <h1 className={cx('title')}>Lorem ipsum dolor sit amet</h1>
        <div className={cx('content')}>
            <div className={cx('image')} style={{backgroundImage: `url(${projectImage})`}} ></div>
            <p className={cx('text')}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique consequat placerat. Vestibulum auctor pellentesque sem, eu posuere erat hendrerit quis. Maecenas vel consequat turpis. Nam facilisis, ligula in mattis sodales, augue justo tristique nulla, sed lacinia ante eros ut mi. Morbi vitae diam augue. Aliquam vel mauris a nibh auctor commodo. Praesent et nisi eu justo eleifend convallis. Quisque suscipit maximus vestibulum. Phasellus congue mollis orci, sit amet luctus augue tristique eu. Donec vulputate odio neque, sed semper turpis pellentesque a.</p>
        </div>
    </div> );
}

export default ProjectItem;