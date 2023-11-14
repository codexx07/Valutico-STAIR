import React from 'react';
import './Sidebar.css'; // Ensure you have a Sidebar.css file for styling

// Import your icons
import HomeIcon from '../assets/home-icon.svg'; // Replace with your actual icon paths
import AddIcon from '../assets/add-icon.svg';
// ... other icon imports

function Sidebar() {
  // You can replace these with your actual navigation logic
  const navigate = (path) => {
    console.log(`Navigate to: ${path}`);
  };

  return (
    <div className="sidebar">
      <img src={HomeIcon} alt="Home" className="icon" onClick={() => navigate('/home')} />
      <img src={AddIcon} alt="Add Files" className="icon" onClick={() => navigate('/add-files')} />
      {/* ... other icons */}
    </div>
  );
}

export default Sidebar;
