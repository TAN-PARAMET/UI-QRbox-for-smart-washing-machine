
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import { Outlet, Link } from "react-router-dom";
import Lottie from "lottie-react";




function App() {
  return (
    <div>
      <div className="App">
        <Header />
        <Link to="/home"></Link> 
        <Outlet />
        
      </div>
    </div>
  );
}

export default App;
