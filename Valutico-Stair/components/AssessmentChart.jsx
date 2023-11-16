import React, { useState } from 'react';
import './AssessmentChart.css';

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

  const handleSliderChange = (criteria, newValue) => {
    setValues({ ...values, [criteria]: parseInt(newValue, 10) });
  };

  const calculateAverage = () => {
    const total = Object.values(values).reduce((sum, current) => sum + current, 0);
    return (total / Object.keys(values).length).toFixed(2);
  };

  const averageValue = calculateAverage();

  const generalSliders = ['Company Size', 'Positioning'];
  const marketSliders = ['Market Size', 'Market Growth', 'Market Share'];
  const managementSliders = ['Competition', 'Exposure To Business Cycle', 'Exposure To Political Legal Factors', 'Management Quality'];

  return (
    <div className="assessment-chart">
      <div className="chart-header">
        <h2>Qualitative Assessment</h2>
      </div>
      <div className="chart-subheader">
        <span className="subheader-text">Value</span>
        <span className="subheader-text2">Weight</span>
      </div>
      <div className="section-heading">General</div>
      {generalSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      <div className="section-heading">Market</div>
      {marketSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      <div className="section-heading">Management</div>
      {managementSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      
      <div className="fixed-bar">
        <div className="fixed-bar-item">
          <span>Risk Factor: {averageValue}%</span>
        </div>
        <div className="fixed-bar-item">
          <span>Cost of Equity Premium: {averageValue}%</span>
        </div>
        <div className="fixed-bar-item">
          <span>Discount of Trading Multiples: {averageValue}%</span>
        </div>
      </div>
      <div className="buttonContainer">
        <button className="businessPlanButton">Business Plan &gt;</button>
      </div>
      <div className="buttonContainer">
        <button className="businessPlanButton1">Qualitative Assessment &gt;</button>
      </div>
    </div>
  );
};

export default AssessmentChart;
