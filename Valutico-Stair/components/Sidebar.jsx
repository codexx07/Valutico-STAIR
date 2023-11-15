import React from 'react';
import './Sidebar.css';
// Import your icons here
import addIcon from '../src/assets/Home.png'; // Replace with your actual icon paths
import homeIcon from '../src/assets/BR.png';
import reportIcon from '../src/assets/Coin in Hand.png';
import searchIcon from '../src/assets/Order Completed.png';
import userIcon from '../src/assets/Export.png';
import exportIcon from '../src/assets/Increase.png';
import pasteIcon from '../src/assets/Paste.png';
import peer from '../src/assets/User Groups.png';

function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <button className="sidebar-button">
        <img src={addIcon} alt="Add Files" />
      </button>
      <button className="sidebar-button">
        <img src={homeIcon} alt="Home" />
      </button>
      <button className="sidebar-button">
        <img src={reportIcon} alt="Reports" />
      </button>
      <button className="sidebar-button">
        <img src={searchIcon} alt="Search" />
      </button>
      <button className="sidebar-button">
        <img src={userIcon} alt="User Profile" />
      </button>
      <button className="sidebar-button">
        <img src={exportIcon} alt="Export Data" />
      </button>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="sidebar-button">
        <img src={pasteIcon} alt="Export Data" />
      </button>
      <button className="sidebar-button">
      <img src={peer} alt="Paste Data" />
      </button>
    </div>
    </>
  );
}

export default Sidebar;
