import React from 'react';
import "./Sidebar.css";
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import { Avatar, IconButton } from "@material-ui/core";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        
        <Avatar src="https://media-exp1.licdn.com/dms/image/C4E03AQHyjO2ULGrgYQ/profile-displayphoto-shrink_400_400/0/1605250333227?e=1617235200&v=beta&t=xw78_oAZVoEyJYrYDkYozOx7dKgiDULqBmVhP4HMOeQ"/>

        <div className="sidebar__headerRight">
          <IconButton>
          <DonutLargeIcon />
          </IconButton>
          <IconButton>
          <ChatIcon />
          </IconButton>
          <IconButton>
          <MoreVertIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
