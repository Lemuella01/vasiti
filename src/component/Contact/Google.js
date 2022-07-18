import React from 'react'
import './Contact.css'


const Google = () => {
  return (
    <div className="iframe">
  <iframe title='lasop' src="https://maps.google.com/maps?q=lasop&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>

      <div className="frame2">
        <div className='yourname'>
          <input type="text" placeholder='Your Name'/>
          <input type="text" placeholder="Your Email" />
        </div>
        <div className='subject'>
   
          <input type="text" placeholder="Subject" />
        </div>
        <div>
  <textarea placeholder='message'/>
 </div>
      </div>
    </div>
  )
}

export default Google