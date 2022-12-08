import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

import classes from './footer.module.css';

const Footer = () => {
  return (
    <>
      <nav className={classes['footer-wrapper']}>
        <ul className={classes['footer-links']}>
          <li><Link className={classes.link} to='/'><FontAwesomeIcon className={classes.icon} icon={solid('house')} /></Link></li>
          <li><Link className={classes.link} to='/search'><FontAwesomeIcon className={classes.icon} icon={solid('compass')} /></Link></li>
          <li><Link className={classes.link} to='/new-post'><FontAwesomeIcon className={classes.icon} icon={solid('images')} /></Link></li>
          <li><Link className={classes.link} to='/notification'><FontAwesomeIcon className={classes.icon} icon={solid('bell')} /></Link></li>
          <li><Link className={classes.link} to='/profile/:username'><FontAwesomeIcon className={classes.icon} icon={solid('user')} /></Link></li>
        </ul>
      </nav>
    </>
  )
};

export default Footer;