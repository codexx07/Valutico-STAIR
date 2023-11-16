import React, { useState, useEffect } from 'react';
import './BuisnessValuation.css';
import UploadIcon from '../src/assets/Upload.png';
import DownloadIcon from '../src/assets/Download.png';

const BuisnessPlan = () => {
  const [activeTab, setActiveTab] = useState('financialprojections');
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

  const NavigationBar = () => {
    const [activeSection, setActiveSection] = useState('Sales');
  
    const sections = ['Sales', 'EBITDA', 'EBIT', 'Net Income', 'Capex', 'Other', 'Overview'];
  
    return (
      <div className="navigationContainer">
        {sections.map(section => (
          <button
            key={section}
            className={`navButton ${activeSection === section ? 'active' : ''}`}
            onClick={() => setActiveSection(section)}
          >
            {section}
          </button>
        ))}
      </div>
    );
  };

  return (
    <div className="businessValuation">
      <div className="businessValuationHeader">
        <h1>Business Plan</h1>
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
          <button className="timeFrameButton">Time Frame</button>
        </div>
      </div>
      <div className="tabMenu">
        <button onClick={() => setActiveTab('financialprojections')} className={`tabButton ${activeTab === 'financialprojections' ? 'active' : ''}`}>Financial Projections</button>
        <button onClick={() => setActiveTab('validations')} className={`tabButton ${activeTab === 'validations' ? 'active' : ''}`}>Validations</button>
        <button onClick={() => setActiveTab('benchmarking')} className={`tabButton ${activeTab === 'benchmarking' ? 'active' : ''}`}>Benchmarking</button>
        <button onClick={() => setActiveTab('ev-eq')} className={`tabButton ${activeTab === 'ev-eq' ? 'active' : ''}`}>EV-EQV Bridge</button>

      </div>
      {activeTab === 'financialprojections' && (
        <div className="tableContainer">
         <table>
          <thead>
            <tr>
              <th rowSpan="2"></th>
              <th colSpan="3">Actual</th>
              <th colSpan="3">Futuristic</th>
              <th rowSpan="2">Growth Graph</th>
            </tr>
            <tr>
              <th>2021</th>
              <th>2022</th>
              <th>2023</th>
              <th>2024</th>
              <th>2025</th>
              <th>2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales</td>
              {/* Data cells for sales */}
            </tr>
            <tr>
              <td>% Sales growth</td>
              {/* Data cells for % sales growth */}
            </tr>
            <tr>
              <td>EBITDA</td>
              {/* Data cells for EBITDA */}
            </tr>
            <tr>
              <td>Depreciation & Amortisation</td>
              {/* Data cells for Depreciation & Amortisation */}
            </tr>
            <tr>
              <td>EBIT</td>
              {/* Data cells for EBIT */}
            </tr>
            <tr>
              <td>Net Income</td>
              {/* Data cells for Net Income */}
            </tr>
            <tr>
              <td>Capex</td>
              {/* Data cells for Capex */}
            </tr>
            <tr>
              <td>Accounts Receivable</td>
              {/* Data cells for Accounts Receivable */}
            </tr>
            <tr>
              <td>Inventories</td>
              {/* Data cells for Inventories */}
            </tr>
            {/* Continue mapping over your data as needed */}
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

{activeTab === 'validations' && (
        <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th rowSpan="2"> Growth </th>
              <th colSpan="3">Actual</th>
              <th colSpan="3">Futuristic</th>
              <th rowSpan="2">Growth Graph</th>
            </tr>
            <tr>
              <th>2021</th>
              <th>2022</th>
              <th>2023</th>
              <th>2024</th>
              <th>2025</th>
              <th>2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Sales Growth</td>
              {/* Data cells for sales */}
            </tr>
            <tr>
              <td>EBITDA growth</td>
              {/* Data cells for % sales growth */}
            </tr>
            <tr>
              <td>EBIT growth</td>
              {/* Data cells for EBITDA */}
            </tr>
            <tr>
              <td>EBIT Growth</td>
              {/* Data cells for Depreciation & Amortisation */}
            </tr>
            <tr>
              <td>Net Income growth</td>
              {/* Data cells for EBIT */}
            </tr>
            </tbody>
            </table>
            <table>
          <thead>
            <tr>
              <th rowSpan="2"> Margins </th>
              <th colSpan="3">Actual</th>
              <th colSpan="3">Futuristic</th>
              <th rowSpan="2">Growth Graph</th>
            </tr>
            <tr>
              <th>2021</th>
              <th>2022</th>
              <th>2023</th>
              <th>2024</th>
              <th>2025</th>
              <th>2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EBITDA margin</td>
              {/* Data cells for sales */}
            </tr>
            <tr>
              <td>EBIT margin</td>
              {/* Data cells for % sales growth */}
            </tr>
            <tr>
              <td>Net Income margin</td>
            </tr>
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
            <table>
          <thead>
            <tr>
              <th rowSpan="2"> Investements </th>
              <th colSpan="3">Actual</th>
              <th colSpan="3">Futuristic</th>
              <th rowSpan="2">Growth Graph</th>
            </tr>
            <tr>
              <th>2021</th>
              <th>2022</th>
              <th>2023</th>
              <th>2024</th>
              <th>2025</th>
              <th>2026</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>EBITDA margin</td>
              {/* Data cells for sales */}
            </tr>
            <tr>
              <td>EBIT margin</td>
              {/* Data cells for % sales growth */}
            </tr>
            <tr>
              <td>Net Income margin</td>
            </tr>
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

{activeTab === 'ev-eq' && (
        <div className="tableContainer">
        <table>
          <thead>
            <tr>
              <th rowSpan="2">  </th>
              <th colSpan="3">2023</th>
              <th colSpan="3">Overwrite</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Debt</td>
              {/* Data cells for sales */}
            </tr>
            <tr>
              <td>Pensions</td>
              {/* Data cells for % sales growth */}
            </tr>
            <tr>
              <td>Non Controlling Interest</td>
              {/* Data cells for EBITDA */}
            </tr>
            <tr>
              <td>Cash</td>
              {/* Data cells for Depreciation & Amortisation */}
            </tr>
            <tr>
              <td>Minimum Cash</td>
              {/* Data cells for EBIT */}
            </tr>
            <tr>
              <td><button className="button"> Add Custom Factor</button></td>
            </tr>
            <tr>
              <td>Net Depth Adjustments</td>
            </tr>
            </tbody>
            </table>
            

        </div>
      )}




    </div>
    
  );
};

export default BuisnessPlan;