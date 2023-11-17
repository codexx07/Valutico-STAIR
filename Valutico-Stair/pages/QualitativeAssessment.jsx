import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import Dashboard from '../components/Dashboard';
import Tools from '../components/Tools';
import RecentValuations from '../components/RecentValuations';
import Sidebar from '../components/Sidebar';
import AssessmentChart from '../components/AssessmentChart';
import Peerselection from '../components/peerselection';
import '../src/App.css';
import BuisnessPlan from '../components/BuisnessValuation';


export default function(){
    return(
    <div className="app">
    {/* <h1> Home </h1> */}
    <div className="App">
      {/* <Sidebar /> */}
      <NavBar/>
      <Sidebar />
      <div className="content">
        <AssessmentChart />
  
        
      </div>
    </div>
  </div>
    )
}