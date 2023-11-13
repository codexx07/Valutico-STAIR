import React from 'react';
import './RecentValuations.css';

function RecentValuations() {
  // Replace with actual data
  const valuations = [
    { name: 'ITC Ltd', industry: 'FMCG' },
    { name: 'Dabur India Ltd', industry: 'FMCG' },
    // ... more valuations
  ];

  return (
    <div className="RecentValuations">
      <h2>Recent Valuations</h2>
      <div className="valuations-cards">
        {valuations.map(valuation => (
          <div key={valuation.name} className="valuation-card">
            <h3>{valuation.name}</h3>
            <p>{valuation.industry}</p>
            {/* Add card icon */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecentValuations;
