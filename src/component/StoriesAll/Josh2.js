import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Gils.css'

const Josh2 = () => {
  const [users, setUsers]=useState([])

  useEffect(() =>{
    const url = 'https://randomuser.me/api/?results=3'
    axios.get(url).then((response) =>{
      setUsers(response.data.results)
       }).catch((error) =>{console.log(error)})
  }, [])



  return (
    <div className='users' style={{ position:'relative'}}>

      {users.map((itrs)=> ( <div style={{}} key={itrs.email}>
        <img src={itrs.picture.medium} alt=''   style={{width: '150px', height: '150px', borderRadius: '50%', }}/>
             
        <div className=''>
        <h1 style={{ fontSize: '15px',  marginTop:'10px', fontFamily: 'Montserrat, sans-serif'}}>{itrs.name.first} {itrs.name.last}</h1>  </div>

        <div >
        <p style={{  fontSize: '13px', fontWeight: '600', marginTop:'10px'}}> {itrs.location.city} <span style={{ fontSize: '9px', color:'green', backgroundColor:'rgb(192, 255, 190)', padding:' 3px',borderRadius:'3px', marginLeft:'20px', fontWeight:'bold', letterSpacing:'1px' }}>VENDOR</span></p>
                 
                <p style={{width: '240px', fontSize:'13px', marginTop:'10px', fontFamily: 'Montserrat, sans-serif'}}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deserunt ut voluptate aute id deserunt nisi. Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse enim.</p> </div>
          
            </div>))}

            </div>



  )
}

export default Josh2