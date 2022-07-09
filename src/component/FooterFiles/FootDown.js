import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FaInstagramSquare} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {FaLinkedin } from 'react-icons/fa'
import './Footer.css'
const FootDown = () => {
  return (
    <div className="footer-list">

      <div className='list-group'>
        <h4>Company</h4>
        <ul>
          <li>About us</li>
          <li>Term of use</li>
          <li>Privacy Policy</li>
          <li>Press & Media</li>
          
        </ul>
      </div>
      <div className='list-group'>
      <h4>Products</h4>
        <ul>
          <li>Marketplace</li>
          <li>Magazine</li>
          <li>Seller</li>
          <li>Wholesale</li>
          <li>Services</li>
          
        </ul>
      </div>
      <div className='list-group'>
      <h4>Careers</h4>
        <ul>
          <li></li>
          <li>Become a Campus Rep</li>
          <li>Become a Vasiti Influencer</li>
          <li>Become a Campus writer</li>
          <li>Become an Affiliate</li>
          
        </ul>
      </div>
      <div className='list-group'>
      <h4>Get in Touch</h4>
        <ul>
          <li>Contact us</li>
          <li>Partner with us</li>
          <li>Advertise with us</li>
          <li>Help/FAQs</li>
          
        </ul>
      </div>
     
      <div className='list-group'>
        <h3>Join our community </h3>
        <div className='icons'>
        <div className='icon'>
         {<FaFacebookF/>} </div>  

          <div className='icon'> {<FaInstagramSquare/>}</div> 
          <div className='icon'> 
          {<FaLinkedin/>} </div> 
          <div className='icon'> 
          {<FaTwitter/>}</div>  

        </div>
        <h5>Email Newsletter</h5>
      </div>
    </div>
  )
}

export default FootDown