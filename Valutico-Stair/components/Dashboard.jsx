import React from 'react';
import './Dashboard.css';

function Dashboard() {
  // Replace with actual data
  const dashboardItems = [
    { name: 'Hindustan Unilever Ltd', change: '0.24%' },
    { name: 'Britannia Industries Ltd', change: '0.21%' }
  ];

  return (
    <div className="Dashboard">
      <h2 style={{ color: '#fff', fontFamily: '"Inter-Bold", sans-serif', fontSize: '20px' }}>Dashboard</h2>
      {dashboardItems.map(item => (
        <div key={item.name} className="dashboard-item">
          <span>{item.name}</span>
          <span className="change">{item.change}</span>
          {/* Add arrow icon */}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
