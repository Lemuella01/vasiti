import React from 'react'
import Testimonial from '../../Image/Testimonial image 1.png'
import './Stories.css'
const Amaze = () => {
  return (
    <div  className="Amaze-con">

      <div className="text">
        <h1>
          Amazing <br></br><span>Experience from our Wonderful Customers</span>
        </h1>
        <p>Here is what customer and Vendors are saying about us, you can share your stories with us too.</p>
      </div>

      <div className="Amaze-img">
        <div className="round"></div>
        <div> <img src={Testimonial} alt='image'/></div>
      </div>

    </div>
  )
}

export default Amaze