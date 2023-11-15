import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Dashboard from '../components/Dashboard';
import Tools from '../components/Tools';
import RecentValuations from '../components/RecentValuations';

function App() {
  return (
    <div className="app">
      <h1> Home </h1>
      <div className="App">
        {/* <Sidebar /> */}
        <NavBar />
        <div className="content">
          <SearchBar />
          <Dashboard />
          <Tools />
          <RecentValuations />
          {/* <Sidebar /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
