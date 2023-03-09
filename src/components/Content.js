import classNames from 'classnames/bind';
import styles from '../styles/Content.module.scss';
import Description from './Description';
import Logo from './Logo';
import ProjectItem from './ProjectItem';

const cx = classNames.bind(styles);

function Content() {
    return ( <div className={cx('container')}>
        <div className={cx('body')}>
            <Logo />
            <Description />
            <div className={cx('project_container')}>
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </div>
    </div> );
}

export default Content;