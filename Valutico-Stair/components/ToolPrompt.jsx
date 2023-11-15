// ToolPrompt.jsx
import React from 'react';
import './ToolPrompts.css';

function ToolPrompt({ toolName, onClose, onSubmit, styleType }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = {
      companyName: event.target.elements.companyName.value,
      valuationDate: event.target.elements.valuationDate.value,
      keepUpdated: event.target.elements.keepUpdated.checked,
    };
    onSubmit(formData);
    onClose();
  };

  const promptClass = styleType === 'private' ? 'tool-prompt-private' : 'tool-prompt-public';

  const handleClick = () => {
    SecondPage(); // Trigger the function when button is clicked
  };

  return (
    <div className="tool-prompt-overlay">
      <div className={`tool-prompt ${promptClass}`}>
        <div className="tool-prompt-header">
          <h3>Create {toolName} company valuation</h3>
          <button className="close-button" onClick={onClose}>X</button>
        </div>
        <form onSubmit={handleSubmit} className="tool-prompt-form">
          <label>
            Listed Company Name
            <input type="text" name="companyName" required />
          </label>
          <label>
            Valuation Date
            <input type="date" name="valuationDate" required />
          </label>
          <label className="keep-updated-label">
            Keep Updated
            <input type="checkbox" name="keepUpdated" />
          </label>
          <button type="submit" className="create-button" onClick={handleClick}>Create</button>
        </form>
      </div>
    </div>
  );
}

export default ToolPrompt;
