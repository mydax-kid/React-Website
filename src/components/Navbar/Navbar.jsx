import { Link, useLocation } from 'react-router-dom'
import {useState, useEffect, /*useRef*/} from 'react'
import React from 'react'

import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";


import './Navbar.css'


const Navbar= () => {

  const [click, setClick]= useState(false);
  const [mobile, setMobile]= useState(false);  
  
  //const menuToggle = useRef(null);
  const { pathname } = useLocation();

  const handleClick= () => {
    setClick(!click);
  }

  window.addEventListener('resize', () => {
    if (window.innerWidth <= 600){
      setMobile(true)
    }
    else{
      setMobile(false)
      setClick(false)
    }
  })

  // useEffect(() => {
  //   initialRender ? initialRender = false : menuToggle.current.style.display = 'none';
  // }, [pathname]);
  
  useEffect(() => {
    if (click) {
      document.body.style.position = 'fixed';
    } else {
      document.body.style.position = 'static';
    }
  }, [click])

  useEffect(() => {
    setClick(false);
  }, [pathname])

  
  return(
    <>
      <nav className='nav'>
        <div className= 'nav-container'>
          <h2><Link className='logo' to='/'>XELEOS..</Link></h2>
          
         { mobile && 
         <div onClick={handleClick} >          
           { click ? <GrClose className= 'fa-solid'/> : <GiHamburgerMenu className= 'fa-solid'/> }
         </div> }

          <ul className= {click ? 'nav-menu-active' : 'nav-menu'} >
            <li>
              <Link to= '/' >Home</Link>
            </li>
            <li>
              <Link to= '/Services' >Services</Link>
            </li>
            <li>
              <Link to= '/Products' >Products</Link>
            </li>
            <li className= 'sign-up'>
              <Link className= 'sign-up' to= '/Signup' >SIGN UP</Link>
            </li>
          </ul>
          
        </div>
      </nav>
    </>
  )
}

export default Navbar;
