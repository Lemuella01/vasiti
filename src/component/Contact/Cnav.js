import React from 'react'
import {FaPhoneVolume}   from 'react-icons/fa';
import {MdEmail}   from 'react-icons/md';
import {GrLocation}   from 'react-icons/gr';
import './Contact.css'

const Cnav = () => {
  return (
    <div className='contact'>
      <div className='heading'>
        <h1>CONTACT</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis </p>
      </div>

      <div className="bax">
        <div className="location">
          <h4>{<GrLocation/>}</h4>
          <h3>our Address</h3>
          <p>no 23 ikeja city mall alausa Lagos.</p>
        </div>
        <div className="mails">
          <h4>{<MdEmail/>}</h4>
          <h3>Email Us</h3>
          <p>contact@example.com</p>
        </div>
        <div className="phone">
          <h4>{<FaPhoneVolume/>}</h4>
          <h3>Call us</h3>
          <p>+234908455555</p>
        </div>
      </div>
    </div>
  )
}

export default Cnav