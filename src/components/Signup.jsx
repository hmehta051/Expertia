import React, { Fragment, useState } from 'react'
import { MdClear } from "react-icons/md";
import './CSS/Signup.css'
import Login from './Login';

function Signup({handleShow}) {
    const [login,setLogin]=useState(false)
    const handleLogin=()=>{
        setLogin(!login)
    }
  return (
    <Fragment>
        {
            login&& <Login handleLogin={handleLogin}/>
        }
        
        {
            !login &&<div className='card'>
            <div className='clear'><MdClear onClick={handleShow}/></div>
            <div className='great'>Great!</div>
            <br />
            <div className='what12'>
                <div>What are</div>
                <div>you looking for?</div>
            </div>
            <div className='btn'>
                <button className='btn1'>To Hire</button>
                <br />
                <button className='btn1 btn2'>To Apply</button>
                <div className='x15' onClick={handleLogin}>I already have an account</div>
            </div>
        </div>
        }
    </Fragment>
  )
}

export default Signup