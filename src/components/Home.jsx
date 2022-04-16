import React, { Fragment, useState } from 'react'
import './CSS/Home.css'
import { BsFillCircleFill} from "react-icons/bs";
import { AiOutlinePlayCircle } from "react-icons/ai";
import Signup from './Signup';
import Login from './Login';

function Home() {
    const [show,setShow]=useState(false)
    const handleShow=()=>{
        setShow(!show)
    }
  return (
    <Fragment>
        <div className='header'>
            <div className='jj'>
                <BsFillCircleFill className='circle'/>
                <span className='exp'>Expertia</span>
            </div>
            <div className='header-right'>
                <span className='c1'>Solutions &nbsp; 
                    <select name="" id="" className='option'>
                        <option value=""></option>
                    </select>
                </span>
                <span className='c1'>About Us</span>
                <span className='c1'>Contact Us</span>
                <span className='c1 c2' onClick={handleShow}>SignUp</span>
            </div>
        </div>
        <div className='middle'>
            <div className='x1'>
                <div className='x11'>Let's Find that <br/>Best Candidate...</div>
                <br />
                <div className='x13'>
                <div >Source,screen,rank,candidates</div>
                <div >from multiple job boards,internal and external databases</div>
                <button className='x12'>Get Started</button>
                </div>
            </div>
            <div className='x2'>
                <div className='square'>
                <AiOutlinePlayCircle className="playbtn"/>
                </div>
            </div>
        </div>
        {
            show&& <Signup handleShow={handleShow}/>
        }
    </Fragment>
  )
}

export default Home