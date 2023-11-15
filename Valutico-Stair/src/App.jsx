import React from 'react';
import './App.css';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Dashboard from '../components/Dashboard';
import Tools from '../components/Tools';
import RecentValuations from '../components/RecentValuations';
import Sidebar from '../components/Sidebar';
import AssessmentChart from '../components/AssessmentChart';

// function App() {
//   return (
//     <div className="app">
//       <h1> Home </h1>
//       <div className="App">
//         {/* <Sidebar /> */}
//         <NavBar/>
//         <Sidebar />
//         <div className="content">
//           <SearchBar />
//           <Dashboard />
//           <Tools />
//           <RecentValuations />
          
//         </div>
//       </div>
//     </div>
//   );
// }


function App() {
  return (
    <div className="app">
    {/* <h1> Home </h1> */}
    <div className="App">
      {/* <Sidebar /> */}
      <NavBar/>
      <Sidebar />
      <div className="content">
        <AssessmentChart />
        {/* <SearchBar />
        <Dashboard />
        <Tools />
        <RecentValuations /> */}
        
      </div>
    </div>
  </div>
  )
}

export default App;
