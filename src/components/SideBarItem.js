import classNames from 'classnames/bind';
import styles from '../styles/SideBarItem.module.scss';

const cx = classNames.bind(styles);
function SideBarItem({sideBarItem}) {
    return ( <a href='/' className={cx('container', sideBarItem ==='Home' ? 'active' : '')}>
        {sideBarItem}
    </a> );
}

export default SideBarItem;