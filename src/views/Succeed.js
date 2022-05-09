import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Lottie from 'lottie-react';
import animationData from "../lotties/correct.json";




function Succeed() {

  

  


  return (
    
    <div style={{ marginTop:'-30px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
      <Lottie  animationData={animationData}   style={{width:'325px', marginBottom:'-50px',  }}  />
    

    
    <b className='linear' style={{ fontSize:'80px',  }}>ทำรายการสำเร็จ</b>
    <p style={{ fontSize:'30px', marginTop:'-15px', }}>ขอบคุณที่ใช่บริการของพวกเรา</p>

    
      
  
    </div>
  )
}

export default Succeed