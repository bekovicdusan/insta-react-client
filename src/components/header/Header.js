import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import classes from './header.module.css';
import ProfileImg from '../profile-img/ProfileImg';

const Header = () => {
  return (
    <div className={classes['header-wrapper']}>
      <header className={classes.header}>
        <div className={classes['search-div']}>
          <FontAwesomeIcon className={classes.icon} icon={solid('magnifying-glass')} />
          <input className={classes.input} type='text' placeholder='Search'/>
        </div>
        <Link to='/'>
          <h1 className={classes.headline}>PinkyPink</h1>
        </Link>
        <ProfileImg 
          profileImg={'https://w7.pngwing.com/pngs/754/2/png-transparent-samsung-galaxy-a8-a8-user-login-telephone-avatar-pawn-blue-angle-sphere-thumbnail.png'}
          size={32} 
        />
      </header>
    </div>
  )
};

export default Header;
