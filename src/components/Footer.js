import classNames from "classnames/bind";
import styles from '../styles/Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return ( <div className={cx('footer_container')}>
        <p className={cx('footer_copyright')}>Copyright © 2021</p>
    </div> );
}

export default Footer;