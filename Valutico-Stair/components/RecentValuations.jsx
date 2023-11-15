import React from 'react';
import './RecentValuations.css';
// Import the logos for each company
import itcLogo from '../src/assets/itc.png'; // You should have a logo image in the logos folder
import daburLogo from '../src/assets/dabur.png'; // You should have a logo image in the logos folder
import hulLogo from '../src/assets/hul.png'; // You should have a logo image in the logos folder

function RecentValuations() {
  // Replace with actual data and add logos
  const valuations = [
    { name: 'ITC Ltd', industry: 'FMCG', logo: itcLogo },
    { name: 'Dabur India Ltd', industry: 'FMCG', logo: daburLogo },
    { name: 'Hindustan Unilever Ltd', industry: 'FMCG', logo: hulLogo },
    // ... more valuations
  ];

  return (
    <div className="RecentValuations">
      <h2>Recent Valuations</h2>
      <div className="valuations-cards">
        {valuations.map(valuation => (
          <div key={valuation.name} className="valuation-card">
            <img src={valuation.logo} alt={`${valuation.name} logo`} />
            <h3>{valuation.name}</h3>
            <p>{valuation.industry}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentValuations;
