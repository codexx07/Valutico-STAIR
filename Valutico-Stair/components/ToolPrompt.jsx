// ToolPrompt.js
import React, { useState } from 'react';

function ToolPrompt({ toolName, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFormSubmit = () => {
    onSubmit(formData);
    onClose();
  };

  return (
    <div className="tool-prompt">
      <h3>Enter Details for {toolName}</h3>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={formData.name}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="age"
        placeholder="Age"
        value={formData.age}
        onChange={handleFormChange}
      />
      <input
        type="text"
        name="gender"
        placeholder="Gender"
        value={formData.gender}
        onChange={handleFormChange}
      />
      <button onClick={handleFormSubmit}>Submit</button>
    </div>
  );
}

export default ToolPrompt;
