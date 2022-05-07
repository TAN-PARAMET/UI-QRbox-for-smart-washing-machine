import React from 'react'
import logo from '../assets/img/logo.png'
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <div style={{display: 'flex', justifyContent:'flex-start', alignItems:'center',columnGap:'10px', marginTop:'45px', marginLeft:'70px',   }}>
            <img src={logo} style={{width: '50px' }} />
            <b style={{ fontSize:'15px', color:'#745D97', }}>ชายชาตรี</b>
        </div>
    )
}

export default Header