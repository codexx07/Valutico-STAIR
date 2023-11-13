import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Dashboard from '../components/Dashboard';
import Tools from '../components/Tools';
import RecentValuations from '../components/RecentValuations';

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="content">
        <SearchBar />
        <Dashboard />
        <Tools />
        <RecentValuations />
      </div>
    </div>
  );
}

export default App;
