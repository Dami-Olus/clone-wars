import React from 'react'; 
import "./Header.css";
import SearchIcon from '@material-ui/icons/Search';
import HeaderOption from './HeaderOption';
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";

function Header() {
  return (
    <div className='header'>
      

    <div class="header__left">
      <img src="https://www.flaticon.com/svg/static/icons/svg/174/174857.svg" alt=""/>

      <div className="header__search">
      <SearchIcon />
      <input type="text"/>
      </div>

    </div>



<div className="header__right">
   <HeaderOption Icon={HomeIcon} title="Home"/>
   <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
   <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
   <HeaderOption Icon={ChatIcon} title="Messaging" />
   <HeaderOption Icon={NotificationsIcon} title="Notifications" />
   <HeaderOption avatar="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_100_100/0/1605250333227?e=1623283200&v=beta&t=vWOc7TU1GfF3-Oo19N3XWzG6V-gt3oX2mR3bTCSV_C8" title="me" />
</div> 

    </div>
  );
}

export default Header;
