import React from 'react'
import Testimonial from '../../Image/woman-shoppingbag-card 1.png'
import './User.css'

const Users1 = () => {
 
    return (
      <div  className="Amazes-con">
  
        <div className="textss">
          <h1>
          Victoria's Experience<br></br><span>VENDOR</span>
          </h1>
          <p>
I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! I had the best experience shopping with vasiti. Usability of the website was great, very good customer service, an all round great experience. I would definately be coming back! </p> <h6 className='holla' > share your own story!</h6>


        </div>
  
        <div className="Amazes-img">
          <div className="circle"></div>
          <div> <img src={Testimonial} alt='image'/></div>
        </div>
  
      </div>
  )
}

export default Users1