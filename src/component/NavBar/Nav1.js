import React, { useState } from 'react'
import logo from '../../Image/logo.svg'
import { FaTimes } from 'react-icons/fa';
import {FiMenu } from 'react-icons/fi';
import './Nav.css'
import {Link} from 'react-router-dom';

const Nav1 = () => {

  const [toggle, setToggle] = useState(false);

  const handleToggle =()=>{
    setToggle(!toggle);}


    
  return (
    
    <div className='nav-bar'>
         <nav className={toggle? 'navbar collaspe':'navbar'}>  
      <div className='logo'>
         <img src={logo} alt="logo" /></div>
        
         
<div>
          <ul className='links'>
            <li> <Link to="/">ABOUT US</Link> </li>
            <li>  <Link to="/stories">STORIES </Link></li>
            <li>  <Link to="/login">LOG IN </Link></li>
            <li>  <Link to="/signup">SIGN UP </Link></li>
            <li>  <Link to='/contact'>CONTACTS </Link></li>
          </ul>
          </div>
          <div className='toggle-icon' onClick={handleToggle}>
          {toggle? <FaTimes/> : <FiMenu/>}
          </div>

          </nav>

          <div className='nav2'>
            <ul className='links2'>
              <li>MARKET PLACE</li>
              <li>WHOLESALE CENTER</li>
              <li>SELLER CENTER</li>
              <li>SERVICES</li>
              <li>INTERNSHIPS</li>
              <li>EVENTS</li>
            </ul>
          </div>
      


    </div>
  )
}

export default Nav1