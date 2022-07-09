import React from 'react'
import phone from '../../Image/subscribe-banner 1.png'
import './Footer.css'

const FooterUp = () => {
  return (
   
      <div  className="footers">

<div className="Footer-img">
   
   <div> <img src={phone} alt='image'/></div>
 </div>

  
        <div className="Footer">
          <h1>
          Be a  member <br/>
          of our community 🎉
          </h1>
          <p>
          We'd make sure you're always first to know what's happening on Vasiti—thus, the world. </p>
          
          <div className="box">
            <input className='box2' type='text' placeholder='enter your email address'  style={{color: 'white'}}/>
            <button type='submit'>SUBSCRIBE</button>
          </div>


        </div>

       
      </div>
  )
}

export default FooterUp