import React from 'react';
import './PeerSelection.css';
// Import the search icon image
import searchIcon from '../src/assets/Search.png'; // Update the path to your image

const PeerSelection = () => {
  // Handle tab switch logic
  // Define any other necessary state and handlers here

  return (
    <div className="peerSelection">
      <div className="peerSelectionHeader">
        <h1>Peer Selection</h1>
        <div className="valuationInfo">
          <span>Valuation date: 10-10-2023</span>
          <br></br>
          <br></br>
          <span>Currency in INR Crores</span>
        </div>
        <div className="searchArea">
          <input type="text" placeholder="Quick add peers" className="searchInput"/>
          <button className="searchButton">
            <img src={searchIcon} alt="Search" />
          </button>
          <button className="advancedSearch">Advanced Search</button>
        </div>
      </div>
      <div className="tabMenu">
        <button className="tabButton">Trading</button>
        <button className="tabButton">Benchmarking</button>
        <button className="tabButton">Beta</button>
      </div>
      {/* Include the table and other content components here */}
    </div>
  );
};

export default PeerSelection;
