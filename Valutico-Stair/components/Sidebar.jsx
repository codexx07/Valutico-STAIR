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
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


function Sidebar() {
  return (
    <>
    <div className="sidebar">
      <Link to="/home">
      <button className="sidebar-button">
        <img src={addIcon} alt="Add Files" />
      </button>
      </Link>
      <Link to="/BuisnessPlan">
      <button className="sidebar-button">
        <img src={homeIcon} alt="Home" />
      </button>
      </Link>
      <Link to="/Transactions">
      <button className="sidebar-button">
        <img src={reportIcon} alt="Reports" />
      </button>
      </Link>
      <Link to= "/ValuationPage">
      <button className="sidebar-button">
        <img src={searchIcon} alt="Search" />
      </button>
      </Link>
      <button className="sidebar-button">
        <img src={userIcon} alt="User Profile" />
      </button>
      <Link to="/QualitativeAssessment">
      <button className="sidebar-button">
        <img src={exportIcon} alt="Export Data" />
      </button>
      </Link>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <button className="sidebar-button">
        <img src={pasteIcon} alt="Paste Data" />
      </button>
      <Link to="/peer-selection">
        <button className="sidebar-button">
          <img src={peer} alt="Peer Selection" />
        </button>
      </Link>
    </div>
    </>
  );
}

export default Sidebar;
