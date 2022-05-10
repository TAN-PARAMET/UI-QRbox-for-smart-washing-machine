import {useEffect,useState} from 'react'
import {  Link,useNavigate } from "react-router-dom";
import Lottie from 'lottie-react';
import failed from "../lotties/failed.json";




function Failed() {
const [count, setCount] = useState(5);
const navigate = useNavigate();

useEffect(() => {
  
  if(count > -1){
    setTimeout(() => {
      setCount(count-1)
    }, 1000);
  }

  if (count <= -1){
  navigate('/home')


  }
     
  return () => {
    
  }
}, [count])

  

  


  return (
    
    <div style={{ marginTop:'-30px', display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', }}>
      <Lottie  animationData={failed}   style={{width:'250px', marginBottom:'-10px',  }}  />
    

    
    <b className='linear' style={{ fontSize:'80px',  }}>ทำรายการไม่สำเร็จ</b>
    <p style={{ fontSize:'30px', marginTop:'-15px', }}>ระบบกำลังพาคุณกลับไปยังหน้าหลัก</p>
    <div className='background' style={{ margin: '20px auto', width: '400px', height: '70px', borderRadius: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <b style={{ margin: 'auto', color: 'white', fontSize: '20px', }}> กลับไปหน้าหลักในอีก {count} วินาที</b>
          </div >

    
      
  
    </div>
  )
}

export default Failed