import React from 'react';
import './NavBar.css';

// Import your icons or images here
// import AddFilesIcon from '../assets/add-files-icon.svg';
// import CompareIcon from '../assets/compare-icon.svg';
// ... other imports

function NavBar() {
  const handleClick = (action) => {
    console.log(`Action: ${action}`);
    // You can add logic to handle each action here
  };

  return (
    <div className="navbar">
      <div className="logo">
        <img src="../src/assets/Ellipse 1.svg" alt="Logo" />
      </div>
      <button className="navbar-item" onClick={() => handleClick('add-files')}>
        <img src="../src/assets/Plus Math.png" alt="Add Files" />
      </button>
      <div className="Support-text">
        <span>Add Files...</span>
      </div>
      <button className="navbar-item" onClick={() => handleClick('compare')}>
        <img src="../src/assets/Compare.png" alt="Compare" />
      </button>
      <div className="Support-text">
        <span>Compare Files...</span>
      </div>
      {/* ... other navbar items */}
      <button className="navbar-item" onClick={() => handleClick('help')}>
        <img src="../src/assets/Help.png" alt="Help" />
      </button>
      <div className="Support-text">
        <span>Help</span>
      </div>
      <button className="navbar-item" onClick={() => handleClick('info')}>
        <img src="../src/assets/Info.png" alt="Info" />
      </button>
      <div className="Support-text">
        <span>Info</span>
      </div>
      <button className="navbar-item" onClick={() => handleClick('profile')}>
        <img src="../src/assets/Chat.png" alt="Profile" />
      </button>
      <div className="Support-text">
        <span>Profile</span>
      </div>
      {/* ... other navbar items */}
    </div>
  );
}

export default NavBar;
