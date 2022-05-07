import React, { useState, useEffect } from 'react'
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
function Payment() {
  const [count, setcount] = useState(120)
  const Navigate = useNavigate();
  const [urlqrcode, seturlqrcode] = useState(null)
  const [status, setstatus] = useState(null)



  //  do one time
  useEffect(() => {


    setTimeout(() => {
      getqr();
    }, 50);
    setTimeout(() => {

      PingStatus();
    }, 3000);

  }, [])


  // loop 

  useEffect(() => {


    if (count > -1) {
      setTimeout(() => {
        setcount(count - 1)
      }, 1000);
    }



    if (count <= -1) {
      Pingstop();
      Navigate('/home')


    }


    if (status === "pending") {
      PingStatus();
    }

    else if (status === "successful") {

      Navigate('/Succeed')



    }

    else if (status === "failed") {

      Navigate('/failed')

    }

    else if (status === "undefined") {

      Navigate('/home')

    }

    // else {Navigate('/home')}

  }, [count])




  const getqr = () => {
    axios.get('http://127.0.0.1:1880/getqr')
      .then((Response) => {
        seturlqrcode(Response.data)
        console.log(Response.data)
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
  }

  const PingStatus = () => {
    axios.get('http://127.0.0.1:1880/status')
      .then((Response) => {
        setstatus(Response.data)
        console.log(Response.data)
      })

    

  }

  const Pingstop = () => {
    axios.post('http://127.0.0.1:1880/test', {
      'ping': 'cancel',
    })

  }




  return (
    <div style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginTop: '50px', gap: '40px', }}>
      <div className='background shadow' style={{ padding: '10px', width: '300px', height: '500px', borderRadius: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
        <img src={urlqrcode} style={{ width: '250px', }} />
      </div>
      <div className='shadow' style={{ background: 'white', width: '500px', height: '500px', borderRadius: '30px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start', paddingLeft: '30px', paddingTop: '30px', }}>
        <h1 className='linear' style={{ margin: '0px', }} >บริการซักผ้า</h1>
        <p style={{ width: '370px', textAlign: "left", }}>ปลอดภัยจากโควิทด้วยการลดการสำผัสเชื้อจากบริการสุดทันสมัยของเรา</p>
        <b style={{ margin: '0px', }} >ราคา 30 บาท</b>

        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', marginTop: '40px', }} >
          <div className='background' style={{ margin: '20px auto', width: '400px', height: '70px', borderRadius: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
            <b style={{ margin: 'auto', color: 'white', fontSize: '20px', }}>เหลือเวลาอีก {count} วินาที</b>
          </div >
          <Link to="/home"><button onClick={() => { Pingstop(); }}
            className='background' style={{ margin: "auto", width: '400px', height: '70px', border: 'none', borderRadius: '100px', cursor: 'pointer', }}>
            <b style={{ fontSize: '22.5px', margin: '0px', color: '#FFFFFF', fontFamily: 'Prompt', }}>ยกเลิกการชำระเงิน</b>
          </button></Link>

        </div>
      </div>
    </div>
  )
}

export default Payment