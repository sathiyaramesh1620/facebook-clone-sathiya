import React from 'react'
import './topbar.css'
import SearchIcon from '@mui/icons-material/Search';
import ChatIcon from '@mui/icons-material/Chat';
import PersonIcon from '@mui/icons-material/Person';
import NotificationsIcon from '@mui/icons-material/Notifications';


const Topbar = () => {
  return (
    <div className='topbarContainer'>
      <div className="topbarLeft">
        <span className="logo">SocialConvo</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
          <SearchIcon className="searchIcon"/>
          <input 
            placeholder='Search for friends, post or video' 
            className='searchInput' 
          />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
          <span className="topbarLink">Homepage</span>
          <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
          <div className="topbarIconItem">
            <PersonIcon />
            <div className="topbarIconBadge">6</div>
          </div>
          <div className="topbarIconItem">
            <ChatIcon />
            <div className="topbarIconBadge">10</div>
          </div>
          <div className="topbarIconItem">
            <NotificationsIcon />
            <div className="topbarIconBadge">15</div>
          </div>
        </div>
        <img src="/assets/topbar/topbarImg.jpg" alt="profilephoto" className='topbarImg' />
      </div>
    </div>
  )
}

export default Topbar