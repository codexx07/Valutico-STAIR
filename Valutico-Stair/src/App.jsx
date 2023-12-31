import HomePage from '../pages/HomePage'
import PeerSelection from '../pages/PeerSelection'
import QualitativeAssessment from '../pages/QualitativeAssessment'
import BuisnessPlan from '../pages/BuisnessPlan'
import Transaction from '../pages/Transaction'
import ValuationPage from '../pages/ValuationPage'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import React from 'react';

export default function App() {
  return (
    <div>
    <Router>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/peer-selection" element={<PeerSelection />} />
          <Route path="/BuisnessPlan" element={<BuisnessPlan />} />
          <Route path="/QualitativeAssessment" element={<QualitativeAssessment />} />
          <Route path="/Transactions" element={<Transaction />} />
          <Route path="/ValuationPage" element={<ValuationPage />} />
        </Routes>
    </Router>
    </div>
  );
}



