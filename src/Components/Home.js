import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
    const navigate=useNavigate()
  return (
    <div>
        <div className='d-flex bac'>
        <h1>The easiest way to<br></br> meet new peoples</h1><br></br>
        <p>Explore your neighbourhood and find a game in no time.</p>
        <img src='https://img.freepik.com/free-photo/athlete-playing-sport-with-hand-drawn-doodles_23-2150036347.jpg?t=st=1715322947~exp=1715326547~hmac=5790c551a3dca9fc5287beb29fab5c27a7d59689e7ad8e2bb7c168ec126d468d&w=740'></img>
        </div>
        <h1 onClick={()=>{navigate('/sign')}}>MORE DETAILS</h1>
    </div>
  )
}
