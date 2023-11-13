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
      <h2>Dashboard</h2>
      {dashboardItems.map(item => (
        <div key={item.name} className="dashboard-item">
          <span>{item.name}</span>
          <span>{item.change}</span>
          {/* Add arrow icon */}
        </div>
      ))}
    </div>
  );
}

export default Dashboard;
