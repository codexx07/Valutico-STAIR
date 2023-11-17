// Tools.js
import React, { useState } from 'react';
import './ToolPrompts.css';
import ToolPrompt from './ToolPrompt'; // Import the ToolPrompt component

// Import your images here
import PrivateMarketsImage from '../src/assets/Rectangle 9.png'; // Replace with your actual image paths
import PublicMarketsImage from '../src/assets/Rectangle 10.png';

function Tools() {
  const [activeTool, setActiveTool] = useState(null);

  // Your tools data with images
  const tools = [
    { name: 'Private Markets', description: 'Create new private company valuation', image: PrivateMarketsImage },
    { name: 'Public Markets', description: 'Create new public company valuation', image: PublicMarketsImage },
    // Add more tools as necessary
  ];

  const handleToolClick = (toolName) => {
    setActiveTool(toolName);
  };

  const handlePromptClose = () => {
    setActiveTool(null);
  };

  const handleFormSubmit = (formData) => {
    console.log('Form data:', formData);
    // Handle the form data, e.g., send to a backend or state management
    handlePromptClose(); // Close the modal after handling the submission
  };

  return (
    <div className="Tools">
      <h2>Tools</h2>
      <div className="tools-cards">
        {tools.map((tool, index) => (
          <div key={index} className="tool-card">
            <button className="tool-button" onClick={() => handleToolClick(tool.name)}>
              <div className="tool-icon">
                <img src={tool.image} alt={tool.name} />
              </div>
              <div className="tool-info">
                <h3>{tool.name}</h3>
                <p>{tool.description}</p>
              </div>
            </button>
          </div>
        ))}
      </div>
      {activeTool && (
        <ToolPrompt toolName={activeTool} onClose={handlePromptClose} onSubmit={handleFormSubmit} />
      )}
    </div>
  );
}

export default Tools;
