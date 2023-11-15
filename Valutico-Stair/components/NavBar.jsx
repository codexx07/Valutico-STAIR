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
        <span className="Support-text">Add Files...</span>
        <br></br>
      <button className="navbar-item" onClick={() => handleClick('compare')}>
        <img src="../src/assets/Compare.png" alt="Compare" />
      </button>
        <span className="Support-text">Compare Files...</span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      {/* ... other navbar items */}
      <button className="navbar-item" onClick={() => handleClick('help')}>
        <img src="../src/assets/Help.png" alt="Help" />
      </button>
        <span className="Support-text">Help</span>
        <br></br>
      <button className="navbar-item" onClick={() => handleClick('info')}>
        <img src="../src/assets/Info.png" alt="Info" />
      </button>
        <span className="Support-text">Info</span>
        <br></br>
      <button className="navbar-item" onClick={() => handleClick('profile')}>
        <img src="../src/assets/Customer.png" alt="Profile" />
      </button>
        <span className="Support-text">Profile</span>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      <button className="navbar-item" onClick={() => handleClick('profile')}>
      <img src="../src/assets/Chat.png" alt="Profile" />
      </button>
      <span className="Support-text">Chat</span>
    </div>
  );
}

export default NavBar;
