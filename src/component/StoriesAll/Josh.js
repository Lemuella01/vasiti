import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Gils.css'



const Josh = () => {
  const [users, setUsers]=useState([])

  useEffect(() =>{
    const url = 'https://randomuser.me/api/?results=3'
    axios.get(url).then((response) =>{
      setUsers(response.data.results)
       }).catch((error) =>{console.log(error)})
  }, [])



  return (
    <div className='users' style={{position:'relative'}}>
  

    {users.map((itrs)=> ( <div style={{}} key={itrs.email}>
      <img src={itrs.picture.medium} alt=''   style={{width: '150px', height: '150px', borderRadius: '50%', }}/>
     
      <div className='userss'>
      <h1 style={{ fontSize: '15px',  marginTop:'13px', fontFamily: 'Montserrat, sans-serif'}}>{itrs.name.first} {itrs.name.last}</h1></div>
      <div>
        <p style={{  fontSize: '13px', fontWeight: '600', marginTop:'10px'}}> {itrs.location.city} <span style={{ fontSize: '9px', color:'blue',    backgroundColor:'rgb(219, 227, 248)', padding:' 3px',borderRadius:'3px', marginLeft:'20px', fontWeight:'bold', letterSpacing:'1px' }}>CUSTOMER</span></p>
                 
        <p style={{width: '240px', fontSize:'13px', marginTop:'10px' ,fontFamily: 'Montserrat, sans-serif'}}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.</p></div>
          
            </div>))}
          

    </div>
  )
}

export default Josh