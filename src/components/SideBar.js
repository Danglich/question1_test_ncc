import classNames from 'classnames/bind';
import styles from '../styles/SideBar.module.scss';
import SideBarItem from './SideBarItem';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';

const cx = classNames.bind(styles);

function SideBar() {

    const [isShowMenu , setIsShowMenu] = useState(false);

    const handleShowMenu = () => {
        setIsShowMenu(!isShowMenu);
    }



    const sideBarItems = ['Home', 'Services', 'News', 'Blog', 'Contact'];
    return ( 
    
        <div>
            {!isShowMenu && <MenuIcon className={cx('menu-icon')} onClick={handleShowMenu}/> }
            <div className={cx('container', isShowMenu ? 'show_menu': '')}>
            
            <ul className={cx('list_item')}>
                {sideBarItems.map(sideBarItem => (
                    <li key={sideBarItem}><SideBarItem sideBarItem={sideBarItem} /></ li>
                ))}
            </ul>

            {isShowMenu && <CloseIcon className={cx('close_icon')} onClick={handleShowMenu}/>}
            
            </div>
        </div>
     );
}

export default SideBar;