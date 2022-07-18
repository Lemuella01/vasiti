import React from 'react' 
import lemy from '../../Image/lemy3.jpeg'
import  './About.css'
import Typewriter from "typewriter-effect"; 

const Abou = () => {
  return (
    <div  className="landing">
      <div className="landin-text">
      <h1 className='words'>
        <Typewriter 
          onInit={(Typewriter) =>{
            Typewriter
            .typeString  ("Wellcome to VASITI the number1 e-Commerce plug.")
            .pauseFor(2000)
            .deleteAll()
            .typeString ("We hope you will enjoy shopping with us.").start()
            }}
            />
      </h1>
        <p>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        <div>
          <button className='purchase'>Purchase</button>
        </div>

      </div>
      <div className="landin-img">
        <div className="row"></div>
        <img src={lemy} alt="Image" />
      </div>

    </div>
  )
}

export default Abou