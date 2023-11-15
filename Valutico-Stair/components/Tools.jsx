// Tools.js
import React, { useState } from 'react';
import './Tools.css';
import ToolPrompt from './ToolPrompt'; // Import the ToolPrompt component

// Import your images here
import PrivateMarketsImage from '../src/assets/Rectangle 9.png'; // Replace with your actual image paths
import PublicMarketsImage from '../src/assets/Rectangle 10.png';

function Tools() {
  // Tool data without images
  const tools = [
    { name: 'Private Markets', description: 'Create new private company valuation', image: PrivateMarketsImage },
    { name: 'Public Markets', description: 'Create new public company valuation', image: PublicMarketsImage }
    // Add more tools as necessary
  ];

  const [activeTool, setActiveTool] = useState(null);

  const handleToolClick = (toolName) => {
    console.log(`Clicked on tool: ${toolName}`);
    // Implement your click handling logic here

    // Open the prompt for the clicked tool
    setActiveTool(toolName);
  };

  const handlePromptClose = () => {
    // Close the prompt
    setActiveTool(null);
  };

  const handleFormSubmit = (formData) => {
    // Handle form submission here
    console.log(`Submitted data for tool: ${activeTool}`);
    console.log(`Name: ${formData.name}, Age: ${formData.age}, Gender: ${formData.gender}`);
    // Implement your logic to submit the data or perform other actions
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
        <div className="tool-prompt-overlay">
          <ToolPrompt toolName={activeTool} onClose={handlePromptClose} onSubmit={handleFormSubmit} />
        </div>
      )}
    </div>
  );
}

export default Tools;
