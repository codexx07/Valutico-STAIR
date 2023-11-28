import React, { useState, useEffect } from 'react';
import './ValuationPage.css';
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

  const [isEqV, setIsEqV] = useState(true); // State to track if EqV is selected

  const handleToggle = () => {
    setIsEqV(!isEqV); // Toggle the state between EqV and EV
  };

  return (
    <div className="ValuationPage">
      {/* ...other components */}

      <div className="ValuationPageHeader">
        <h1>Valuation</h1>
        <div className="ValuationPageInfo">
          <span>Valuation date: 10-10-2023</span>
          <br />
          <span>Currency in INR Crores</span>
        </div>
        <div className="searchArea">
        <div className = "inputContainer">
          <button className="advancedSearch1">Advanced Search</button>
        </div>
        <div className ="searchArea2">
            <button className="advancedSearch2">Add custom transaction</button><br></br>
            {/* <label className="toggle-label-left">
                EqV</label> */}
              <div className="toggle-switch">
              <input
                  type="checkbox"
                  id="eqv-ev-toggle"
                  checked={isEqV}
                  onChange={handleToggle}
                  className="toggle-checkbox"
              />
              <label className="toggle-slider" htmlFor="eqv-ev-toggle"></label>
              </div>
              {/* <label className="toggle-label-left">
                EV
            </label> */}
            </div>
        </div>
        </div>

        <div className="tableContainer">
      <h1>Overview - ITC Ltd</h1>
      <table>
        <thead>
          <tr>
            <th className="dk">Valuation methods</th>
            <th className="dk">Valuation range</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan="2" className="table-heading">Entity Approaches</td>
          </tr>
          <tr>
            <td className="dk">DCF WACC - simplified</td>
            <td className="dk">280 to 290</td>
          </tr>
          <tr>
            <td className="dk">DCF WACC</td>
            <td className="dk">283 to 286</td>
          </tr>
          <tr>
            <td className="dk">DCF APV</td>
            <td className="dk">285.03</td>
          </tr>
          <tr>
            <td colSpan="2" className="table-heading">Equity Approaches</td>
          </tr>
          <tr>
            <td className="dk">Capitalized Earnings - Net Income</td>
            <td className="dk">3,435 to 4,244</td>
          </tr>
          <tr>
            <td className="dk">Flow-to-Equity - simplified</td>
            <td className="dk">4,921 to 5,993</td>
          </tr>
          <tr>
            <td className="dk">DDM</td>
            <td className="dk">3,777 to 4,453</td>
          </tr>
        </tbody>
      </table>
    </div>
      





    </div>
    
  );
};

export default PeerSelection;

