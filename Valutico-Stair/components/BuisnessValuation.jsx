import React, { useState, useEffect } from 'react';
import './BuisnessValuation.css';
import UploadIcon from '../src/assets/Upload.png';
import DownloadIcon from '../src/assets/Download.png';

const BuisnessPlan = () => {
  const [activeTab, setActiveTab] = useState('trading');
  const [tableData, setTableData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/your-endpoint')
      .then(response => response.json())
      .then(data => setTableData(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const handleSearch = () => {
    console.log('Search initiated');
    // Implement your search logic here
  };

  return (
    <div className="businessValuation">
      <div className="businessValuationHeader">
        <h1>Business Valuation</h1>
        <div className="valuationInfo">
          <span>Valuation date: 10-10-2023</span>
          <br />
          <span>Currency in INR Crores</span>
        </div>
        <div className="scenarioControlArea">
          <button className="scenarioButton">Scenario 1</button>
          <div className="iconsContainer">
            <img src={UploadIcon} alt="Upload" className="iconButton" />
            <img src={DownloadIcon} alt="Download" className="iconButton" />
          </div>
          <button className="scenarioButton">Scenario Manager</button>
          <button className="timeFrameButton">Time Frame</button>
        </div>
      </div>
      <div className="tabMenu">
        <button onClick={() => setActiveTab('trading')} className={`tabButton ${activeTab === 'trading' ? 'active' : ''}`}>Trading</button>
        <button onClick={() => setActiveTab('benchmarking')} className={`tabButton ${activeTab === 'benchmarking' ? 'active' : ''}`}>Benchmarking</button>
        <button onClick={() => setActiveTab('beta')} className={`tabButton ${activeTab === 'beta' ? 'active' : ''}`}>Beta</button>
      </div>
      {activeTab === 'trading' && (
        <div className="tableContainer">
         <table>
            <thead>
                <tr>
                <th rowSpan="2">Name</th>
                <th colSpan="2">Company Info</th>
                <th colSpan="3">EV/Sales</th>
                <th colSpan="3">EV/EBITDA</th>
                <th colSpan="2">EV/EBIT</th>
                {/* Adjust the colSpan values according to the number of subheadings */}
                </tr>
                <tr>
                {/* These are the subheadings under "Company Info" */}
                <th>Country</th>
                <th>Market Cap INR</th>
                
                {/* These are the subheadings under "EV/Sales" */}
                <th>2021</th>
                <th>2022</th>
                <th>2023</th>
                
                {/* Add subheadings for EV/EBITDA */}
                <th>2021</th>
                <th>2022</th>
                <th>2023</th>
                
                {/* Add subheadings for EV/EBIT */}
                <th>2021</th>
                <th>2022</th>
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
      )}

{activeTab === 'benchmarking' && (
        <div className="tableContainer">
         <table>
            <thead>
                <tr>
                <th rowSpan="2">Name</th>
                <th colSpan="2">Sales Growth CAGR<br></br><br></br> 2019-2021</th>
                <th colSpan="3">Sales Growth CAGR<br></br><br></br>2022-2024</th>
                <th colSpan="3">Avg. EBIT Margin<br></br><br></br> 2022-2024</th>
                <th colSpan="2">Avg. Capex as % of Sale<br></br><br></br> 2022-2024</th>
                {/* Adjust the colSpan values according to the number of subheadings */}
                </tr>
                <tr>

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
      )}


      <div className="fixedButtonContainer">
        <button className="businessPlanButton">Business Plan &gt;</button>
      </div>
      <div className="fixedButtonContainer1">
      <button className="businessPlanButton1">Qualitative Assessment &gt;</button>
      </div>

    </div>
    
  );
};

export default BuisnessPlan;