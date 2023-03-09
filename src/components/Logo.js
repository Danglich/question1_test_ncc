import classNames from 'classnames/bind';
import logo from '../acssets/images/logo.jpg'
import styles from '../styles/Logo.module.scss';

const cx =  classNames.bind(styles);
function Logo() {
    return ( <div className={cx('container')}>
        <div className={cx('logo')} style={{backgroundImage : `url(${logo})`}} ></div>
    </div> );
}

export default Logo;