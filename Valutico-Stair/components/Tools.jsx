import React from 'react';
import './Tools.css';

function Tools() {
  // Replace with actual data
  const tools = [
    { name: 'Private Markets', description: 'Create new private company valuation' },
    { name: 'Public Markets', description: 'Create new public company valuation' }
  ];

  const handleToolClick = (toolName) => {
    console.log(`Clicked on tool: ${toolName}`);
    // Add navigation or other click handling logic here
  };

  return (
    <div className="Tools">
      <h2>Tools</h2>
      <div className="tools-cards">
        {tools.map((tool) => (
          <button key={tool.name} className="tool-card" onClick={() => handleToolClick(tool.name)}>
            <h3>{tool.name}</h3>
            <p>{tool.description}</p>
            {/* Add card icon if you have one */}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Tools;
