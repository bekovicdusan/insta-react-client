import classes from './profile-img.module.css';

const ProfileImg = (props) => {
  
  return (
    <img className={classes['profile-img']} src={props.profileImg} alt='profile img' style={{ width: props.size + 'px', height: props.size + 'px' }}/>
  )
}

export default ProfileImg;