import React, { Fragment } from 'react'
import { MdClear } from "react-icons/md";
import './CSS/Login.css'

function Login({handleShow,handleLogin}) {
  return (
    <Fragment>
        <div className='card'>
        <div className='clear'><MdClear onClick={handleLogin}/></div>
        <h2>Welcome User!</h2>
            <form className='btn'>
                <input type="text" placeholder='Username' className='l1' />
                <br />
                <br />
                <input type="password" placeholder='Password'className='l1' />
                <button type='submit' className='l2'>Login</button>
            </form>
        </div>
    </Fragment>
  )
}

export default Login