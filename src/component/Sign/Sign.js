import React, { useState } from 'react' 
import { useNavigate } from "react-router-dom"
import './Sign.css'
import Validate from './Validate';
import Useform from './Useform';


const Sign = ({ submitForm})=>{
 const {handleChange, handleSubmit, values, errors} = Useform(
  submitForm,
  Validate
 );

 const{IsSubmmited, setIsSubmmited} =useState(false);
 
 function submitForm(){
   setIsSubmmited(true);
 }

  return (
    <div className=' contain1'>

      <div className='appswrapper'>
        <div className='titless'>Sign Up
        </div>
        <form className='formwrap'>
          <div className='name'>
            <label className='label'> Full Name</label>
              <input className='inputs' 
               type='text'
               name='name' 
               value={values.name} 
               onChange={handleChange}
                 />
                 {errors.name && <p className='error'>{errors.name}</p>}
            </div>

          <div className='email'>
            <label className='label'> Email</label>
              <input className='inputs' 
              type='email'  
              name='email' 
              value={values.email}
              onChange={handleChange}
              />
             {errors.email && <p className='error'>{errors.email}</p>}
          </div>

          <div className='password'>
            <label className='label'>Password</label>
              <input className='inputs' 
              type='Password'  
              name='password' 
              values={values.password}
              onChange={handleChange} />
            {errors.password && <p className='error'>{errors.password}</p>}

          </div>
          <div >
            <button className='submit' onClick={ handleSubmit}>
              Sign up
            </button></div>


        </form>


      </div>
      </div>
  )
}

export default Sign