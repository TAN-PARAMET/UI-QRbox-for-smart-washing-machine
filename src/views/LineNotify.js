import React from 'react'
import { Outlet, Link } from "react-router-dom";

function LINE_Notify() {
    return (
        <div style={{display:'flex', flexDirection:'row',  justifyContent:'center', alignItems:'center', marginTop:'100px', gap:'40px',}}>
        <div className='background shadow' style={{padding:'10px', width: '300px', height:'500px', borderRadius:'30px', display:'flex',justifyContent:'center',  alignItems:'center',}}>
        <img src='https://www.it24hrs.com/wp-content/uploads/2017/04/add-line-with-upload-qr-code-photo-04.jpg' style={{width: '250px', }} />
        </div>
        <div className='shadow' style={{ background:'white', width: '500px', height:'500px', borderRadius:'30px',display:'flex', flexDirection:'column', alignItems:'flex-start', paddingLeft:'30px', paddingTop:'30px',  }}>
            <h1 className='linear' style={{margin:'0px',}} >LINE Notify</h1>
            <b style={{ width:'370px', textAlign: 'left', marginBottom:'-10px', marginTop:'10px',}}>การใช้งานระบบแจ้งเตือน</b>
            <p style={{width:'370px', textAlign: 'left', marginBottom:'-10px',}}>1.แอดไลน์ผ่านQR</p>
            <p style={{width:'370px', textAlign: 'left',}}>2.รอรับข้อความการแจ้งเตือน</p>
            <b  style={{margin:'0px',}} >ราคา 30 บาท</b>

            <div style={{display:'flex',flexDirection:'column', alignItems:'center', justifyContent:'center', marginTop:'40px',}} >
            <div className='background' style={{margin:'20px auto', width:'400px',height:'70px',borderRadius:'100px', display:'flex', justifyContent:'center', alignItems:'center',}}>
            <b style={{margin:'auto', color:'white',fontSize:'20px', }}>เหลือเวลาอีก 20 วินาที</b>
            </div >
            <Link to="/home"><button className='background' style={{ margin:"auto", width:'400px',height:'70px', border:'none', borderRadius:'100px', cursor:'pointer', }}>
               <b style={{ fontSize:'22.5px', margin:'0px', color:'#FFFFFF',fontFamily:'Prompt', }}>ไม่รับการแจ้งเตือน</b>
              </button></Link> 
               <Outlet />
            </div>
        </div>
        </div>
    )
}

export default LINE_Notify