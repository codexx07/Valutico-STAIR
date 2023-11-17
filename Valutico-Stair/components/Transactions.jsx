
import React, { useState, useEffect } from 'react';
import './Transactions.css';
import searchIcon from '../src/assets/Search.png';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


const PeerSelection = () => {
  const [activeTab, setActiveTab] = useState('trading');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    // Replace 'http://localhost:8000/api/your-endpoint' with the actual endpoint from where you're fetching data
    fetch('http://localhost:8000/api/your-endpoint')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []); // The empty array causes this effect to only run on mount

  const handleSearch = () => {
    console.log('Search initiated');
    // Implement your search logic here
  };

  return (
    <div className="peerSelection">
      {/* ...other components */}

      <div className="peerSelectionHeader">
        <h1>Transactions</h1>
        <div className="valuationInfo">
          <span>Valuation date: 10-10-2023</span>
          <br />
          <span>Currency in INR Crores</span>
        </div>
        <div className="searchArea">
          <div className="inputContainer">
            <input type="text" placeholder="Search here..." className="searchInput" />
            <button onClick={handleSearch} className="searchButton">
              <img src={searchIcon} alt="Search" className="searchIconImage" />
            </button>
          </div>
        </div>
        <div className="searchArea2">
          <button className="advancedSearch">Advanced Search</button>
          <button className="customTransactionButton">Add custom transaction</button>
        </div>

      </div>
        <div className="tableContainer">
         <table>
            <thead>
                <tr>
                <th>Date Announced</th>
                <th>Bidder</th>
                <th>Target</th>
                <th>Target Country</th>
                <th>Source</th>
                <th>Stake Acquired</th>
                <th>Deal Value</th>
                <th>EV/Sales</th>
                {/* Adjust the colSpan values according to the number of subheadings */}
                </tr>
            </thead>
            <tbody>
                {tableData.map(item => (
                <tr key={item.id}>
                    <td>{item.name}</td>
                    <td>{item.country}</td>
                    <td>{item.marketCap}</td>
                    {/* Output additional data as needed */}
                    <td>{item.evSales2021}</td>
                    <td>{item.evSales2022}</td>
                    <td>{item.evSales2023}</td>
                    <td>{item.evEbitda2021}</td>
                    <td>{item.evEbitda2022}</td>
                    <td>{item.evEbitda2023}</td>
                    <td>{item.evEbit2021}</td>
                    <td>{item.evEbit2022}</td>
                </tr>
                ))}
            </tbody>
            </table>

        </div>
      



      {/* <div className="fixedButtonContainer">
        <button className="businessPlanButton">Business Plan &gt;</button>
      </div> */}
      <div className="fixedButtonContainer1">
      <Link to="/BuisnessPlan">
      <button className="businessPlanButton1">Buisness Plan &gt;</button>
      </Link>
      </div>

    </div>
    
  );
};

export default PeerSelection;

