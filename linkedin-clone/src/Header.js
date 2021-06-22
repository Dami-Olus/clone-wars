import React from 'react'; 
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { logout } from './features/userSlice';

function Header() {
  const dispatch = useDispatch()
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };

  return (
    <div className='header'>
      

    <div class="header__left">
      <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

      <div className="header__search">
      <SearchIcon />
      <input placeholder="search" type="text"/>
      </div>

    </div>



<div className="header__right">
   <HeaderOption Icon={HomeIcon} title="Home"/>
   <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
   <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
   <HeaderOption Icon={ChatIcon} title="Messaging" />
   <HeaderOption Icon={NotificationsIcon} title="Notifications" />
   <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_100_100/0/1605250333227?e=1629936000&v=beta&t=F2KbLn-mPRZS7JYzlSTo9k_Lm0acDn7Zld2mHmiR00U" title="me" onClick={logoutOfApp} />
   
</div> 

    </div>
  );
}

export default Header;
