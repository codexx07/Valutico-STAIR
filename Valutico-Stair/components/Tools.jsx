import React from 'react';
import './Tools.css';

function Tools() {
  // Replace with actual data
  const tools = [
    { name: 'Private Markets', description: 'Create new private company valuation' },
    { name: 'Public Markets', description: 'Create new public company valuation' }
  ];

  return (
    <div className="Tools">
      <h2>Tools</h2>
      <div className="tools-cards">
        {tools.map(tool => (
          <div key={tool.name} className="tool-card">
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            {/* Add card icon */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tools;
