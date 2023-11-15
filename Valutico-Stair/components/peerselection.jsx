import React from 'react';
import './PeerSelection.css';
import searchIcon from '../src/assets/Search.png'; // Update this path to the actual location of your image file

const PeerSelection = () => {
  // Define your search handler here
  const handleSearch = () => {
    console.log('Search initiated');
    // Implement your search logic here
  };

  return (
    <div className="peerSelection">
      <div className="peerSelectionHeader">
        <h1>Peer Selection</h1>
        <div className="valuationInfo">
          <span>Valuation date: 10-10-2023</span>
          <br />
          <span>Currency in INR Crores</span>
        </div>
        <div className="searchArea">
          <div className="inputContainer">
            <input type="text" placeholder="Quick add peers" className="searchInput" />
            <button onClick={handleSearch} className="searchButton">
              <img src={searchIcon} alt="Search" className="searchIconImage" />
            </button>
          </div>
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
