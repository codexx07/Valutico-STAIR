import React, { useState } from 'react';
import './AssessmentChart.css'; // Make sure this CSS file has the styles provided earlier

// Individual slider component
const AssessmentSlider = ({ label, value, onChange }) => (
  <div className="slider-container">
    <span className="slider-label">{label}</span>
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      className="slider"
      onChange={(e) => onChange(label, e.target.value)}
    />
    <div className="slider-value">{value}%</div>
  </div>
);

// The main component for the qualitative assessment
const AssessmentChart = () => {
  // State for each of the assessment criteria
  const [values, setValues] = useState({
    'Company Size': 50,
    'Positioning': 50,
    'Market Size': 50,
    'Market Growth': 50,
    'Market Share': 50,
    'Competition': 50,
    'Exposure To Business Cycle': 50,
    'Exposure To Political Legal Factors': 50,
    'Management Quality': 50,
  });

  // Handler to update the state when a slider value changes
  const handleSliderChange = (criteria, newValue) => {
    setValues({ ...values, [criteria]: parseInt(newValue, 10) });
  };

  // Create separate arrays of sliders for different groups of criteria
  const generalSliders = ['Company Size', 'Positioning'];
  const marketSliders = ['Market Size', 'Market Growth', 'Market Share'];
  const managementSliders = ['Competition', 'Exposure To Business Cycle', 'Exposure To Political Legal Factors', 'Management Quality'];

  return (
    <div className="assessment-chart">
      <div className="chart-header">
        <h2>Qualitative Assessment</h2>
      </div>
      <div className="chart-subheader">
        <span>Value</span>
        <span>Weight</span>
      </div>
      {/* Group 1: General */}
      <div className="section-heading">General</div>
      {generalSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      {/* Group 2: Market */}
      <div className="section-heading">Market</div>
      {marketSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      {/* Group 3: Management */}
      <div className="section-heading">Management</div>
      {managementSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
    </div>
  );
};

export default AssessmentChart;
