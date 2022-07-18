import React, { useState } from 'react'
import Sign from './Sign'
import SignSuccess from './SignSuccess'
import { useNavigate } from 'react-router-dom'


const SignUps = () => {
  // const{IsSubmmited, setIsSubmmited} =useState(false);
  // const navigate =  useNavigate()
  
  // function submitForm(){
  //   setIsSubmmited(true);
  // }
  
  return (
    <>
    <div>
      <Sign />
   </div>
   </>
  );
}

export default SignUps