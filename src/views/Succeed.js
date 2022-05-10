import React from 'react'
import { Outlet, Link } from "react-router-dom";
import Lottie from 'lottie-react';
import correct from "../lotties/correct.json";




function Succeed() {

  

  


  return (
    
    <div style={{ marginTop:'-30px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
      <Lottie    style={{width:'250px', marginBottom:'-10px',  }}  />
    

    
    <b className='linear' style={{ fontSize:'80px',  }}>ทำรายการสำเร็จ</b>
    <p style={{ fontSize:'30px', marginTop:'-15px', }}>ขอบคุณที่ใช่บริการของพวกเรา</p>
    <div className='background' style={{ margin: '20px auto', width: '400px', height: '70px', borderRadius: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <b style={{ margin: 'auto', color: 'white', fontSize: '20px', }}>จะไปหน้าแจ้งเตือนในอีก 5 วินาที</b>
          </div >

    
      
  
    </div>
  )
}

export default Succeed