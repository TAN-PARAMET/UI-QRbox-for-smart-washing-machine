
import './App.css';
import Header from './components/Header';
import Home from './views/Home';
import { Outlet, Link ,useNavigate} from "react-router-dom";
import { useState, useEffect } from 'react'
import Lottie from "lottie-react";




function App() {
  const navigate = useNavigate();
useEffect(() => {
  
  navigate('/home')
  return () => {
    
  }
}, [])



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
