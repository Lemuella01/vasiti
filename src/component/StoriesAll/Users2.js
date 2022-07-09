import axios from 'axios'
import React, {useState, useEffect } from 'react'
import './Gils.css'
const Users2 = () => {
  const [people, setPeople]=useState([])


useEffect(()=>{
  const url='https://randomuser.me/api/?results=6'
  axios.get(url).then((response) => {
    setPeople(response.data.results);
  }).catch((error)=>{console.log(error)})
}, [])

  return (
    <div className='users2' style={{}}>
        
    {people.map((itrs)=> ( <div style={{} } key={itrs.email}>
            <img src={itrs.picture.medium} alt=""  style={{width: '150px', height: '150px', borderRadius: '50%', marginBottom:'20px'}}/>

            <h1 style={{ fontSize: '15px',   fontFamily: 'Montserrat, sans-serif'}}>{itrs.name.first} {itrs.name.last}</h1>

            <h5  style={{fontSize: '9px', color:'green', backgroundColor:'rgb(192, 255, 190)', padding:' 3px 5px', height:'20px', width: "60px", borderRadius:'3px', fontWeight:'bold', letterSpacing:'1px', marginTop:'20px'}}>VENDOR</h5>
            <p style={{width: '240px', fontSize:'13px', marginTop:'10px', fontFamily: 'Montserrat, sans-serif', width: '240px'}}>Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim. Elit aute irure tempor cupidatat incididunt sint deser
unt ut voluptate aute id deserunt nisi.
Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.

</p>
           
        </div>))}
</div>

  )
}

export default Users2