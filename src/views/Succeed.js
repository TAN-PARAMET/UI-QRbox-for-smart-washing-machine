import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Lottie from 'lottie-react';
import animationData from "../lotties/correct.json";




function Succeed() {

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

  


  return (
    
    <div style={{ marginTop:'-30px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
      <Lottie  animationData={animationData}   style={{width:'300px',  }} />
    

    
    <b className='linear' style={{ fontSize:'100px',  }}>ทำรายการสำเร็จ</b>
    <p style={{ fontSize:'30px', }}>กรุณายืนรอ 5 วินาทีหรือกดปุ่มชำระเงินเพื่อใช้บริการ</p>

    
      
  
    </div>
  )
}

export default Succeed