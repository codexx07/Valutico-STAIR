import React, { useState } from 'react';
import './AssessmentChart.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


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
    'Reliance On Key Persons':50,
    'Reliance On Key Customers':50,
    'Reliance On Distribution Partners':50,
    'Customer Lock in':50,
    'Input Cost Risk':50,
    'Reliance On Distribution Partners':50,
    'Product Quality':50,
    'Innovativeness':50,
    'Intellectual Property Protection':50,
    'Risk of Technological Disruption':50,
    'Capital Intensity':50,
    'Leverage':50,
    'Foreign Exchange/Currency Risk':50
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
  const marketSliders = ['Market Size', 'Market Growth', 'Market Share','Competition', 'Exposure To Business Cycle', 'Exposure To Political Legal Factors'];
  const managementSliders = ['Management Quality','Reliance On Key Persons'];
  const salessliders =['Reliance On Key Customers','Reliance On Distribution Partners', 'Customer Lock In'];
  const purchasingSliders =['Input Cost Risk', 'Reliance On Distribution Partners'];
  const productSliders =['Product Quality', 'Innovativeness','Intellectual Property Protection','Rsik Of Technological Disruption'];
  const FinancialSliders = ['Capital intensity','Leverage','Foreign Exchange/Currency Risk'];

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
      <div className="section-heading">Sales</div>
      {salessliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      <div className="section-heading">Purchasing</div>
      {purchasingSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      <div className="section-heading">Product</div>
      {productSliders.map((criteria) => (
        <AssessmentSlider
          key={criteria}
          label={criteria}
          value={values[criteria]}
          onChange={handleSliderChange}
        />
      ))}
      <div className="section-heading">Financial</div>
      {FinancialSliders.map((criteria) => (
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
        <Link to="/BuisnessPlan">
        <button className="businessPlanButton">Business Plan &gt;</button>
        </Link>
      </div>
    </div>
  );
};

export default AssessmentChart;
