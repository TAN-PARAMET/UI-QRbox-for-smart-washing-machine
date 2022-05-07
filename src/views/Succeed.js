import React from 'react'
import { Outlet, Link } from "react-router-dom";



function Succeed() {
  return (
    
    <div style={{ marginTop:'50px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center;', }}>
    
    <b className='linear' style={{ fontSize:'100px',  }}>ทำรายการสำเร็จ</b>
    <p style={{ fontSize:'30px', }}>กรุณายืนรอ 5 วินาทีหรือกดปุ่มชำระเงินเพื่อใช้บริการ</p>

    
      
  
    </div>
  )
}

export default Succeed