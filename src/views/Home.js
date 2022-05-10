import { useState, useEffect } from 'react'
import { Outlet, Link, useNavigate } from "react-router-dom";
import axios from 'axios'


function Home() {
    const [count, setCount] = useState(10);
    const [isCounting, setIsCounting] = useState(false)
    const navigate = useNavigate();
    useEffect(() => {
        if (count && isCounting > 0) {
            setTimeout(() => {
                countDown();
            }, 1000);
        }
        if (count <= 0) {
            // เรียก API
            postQR();
            navigate('/payment')
        }
        return () => clearTimeout();
    }, [isCounting, count])

    const countDown = () => {
        setCount(count - 1)
    }

    const postQR = () => {

        axios.post('http://127.0.0.1:1880/qr_code', {
            'amount': 2000,
            'currency': 'THB',
            'source[type]': 'promptpay',
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }




    return (
        <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', justifyContent: 'center', }}>
            <b className='linear' style={{ fontSize: '100px', }}>

                ชายชาตรียินดีให้บริการ</b>

            <p style={{ fontSize: '30px', }}>

                กรุณายืนรอ 5 วินาทีหรือกดปุ่มชำระเงินเพื่อใช้บริการ</p>

            <Link to="/payment">
                <button onClick={() => {
                    postQR()
                    setIsCounting(true)
                }} className='background' style={{ width: '300px', height: '70px', border: 'none', borderRadius: '100px', cursor: 'pointer', }}>
                    <h1 style={{ margin: '0px', color: '#FFFFFF', fontFamily: 'Prompt', }}>ชำระเงินผ่านQR</h1>
                </button>
            </Link>
            <div style={{ margin: '20px auto', width: '100px', height: '5px', background: 'black', }}></div>
            <div className='background' style={{ margin: '20px auto', width: '100px', height: '100px', borderRadius: '100px', display: 'flex', justifyContent: 'center', alignItems: 'center', }}>
                <h1 style={{ margin: 'auto', color: 'white', }}>
                    {count}
                </h1>
            </div>
        </div>
    )
}

export default Home