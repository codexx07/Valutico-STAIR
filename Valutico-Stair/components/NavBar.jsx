import React from 'react';
import './NavBar.css';

// Import icons if you have them as SVGs or components
// import Logo from './path-to-your-logo.svg';
// import AddIcon from './path-to-add-icon.svg';
// ...

const NavBar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        {/* Replace "Logo" with your actual logo component or <img> tag */}
        {/* <Logo /> */}
        STAIR
      </div>
      <div className="menu">
        {/* Replace these with actual icons/components and add onClick handlers as needed */}
        <div className="menu-item">
          {/* <AddIcon /> */}
          Add Files...
        </div>
        <div className="menu-item">
          {/* <CompareIcon /> */}
          Compare...
        </div>
        {/* ...other menu items */}
        <div className="menu-item">Help</div>
        <div className="menu-item">Info</div>
        <div className="menu-item">Profile</div>
      </div>
    </div>
  );
};

export default NavBar;
