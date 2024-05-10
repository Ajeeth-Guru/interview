import React, { useState } from 'react'
import axios from'axios'
import { Link, Outlet } from 'react-router-dom'
export default function Sign() {
    const[name,setName]=useState('')
    const[mail,setMail]=useState('')
    const[gender,setGender]=useState('male')
    const[age,setAge]=useState('')
    const[password,setPassword]=useState('')
    const hanleSubmit=()=>{
        axios.post('http://localhost:3001/user',{name,mail,age,gender,password})
    }
  return (
    <div>
        <form onSubmit={hanleSubmit}>
        <label>Name:</label><br></br>
        <input type='text' onChange={(e)=>{setName(e.target.value)}}></input><br></br>
        <label>Mail Id:</label><br></br>
        <input type='mail' onChange={(e)=>{setMail(e.target.value)}}></input><br></br>
        <label>Age:</label><br></br>
        <input type='number' onChange={(e)=>{setAge(e.target.value)}}></input><br></br>
        <label>Gender:</label><br></br>
        <select value={gender} onChange={(e)=>{setGender(e.target.value)}}>
            <option value='Male'>Male</option>
            <option value='Female'>Female</option>
            <option value='Others'>Others</option>
        </select><br></br>
        <label>password:</label><br></br>
        <input type='password' onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
        <button type='submit'>OK</button>
        </form>
        <Link to='/login'>Login</Link>
    </div>
  )
}
