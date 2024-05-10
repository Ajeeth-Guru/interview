import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Login() {
  const[mail,setMail]=useState('')
  const[password,setPassword]=useState('')
  const[list,setList]=useState([])
  const[error,setError]=useState('')
  useEffect(()=>{
    axios.get('http://localhost:3001/user')
    .then(res=>{setList(res.data)})
    .catch(err=>{console.log(err)})
  })
  const handleLogin=(e)=>{
    e.preventDefault()
    const user=list.find(x=>x.mail===mail)
    if(user){
      if(user.password===password){
        setError('Login success')
      }
      else{
        setError("password incorrect")
      }
    }else{
      setError('incorrect mail')
    }
  }
  
  return (
    <div>
        <form onSubmit={handleLogin}>
          <label>Mail Id:</label><br></br>
          <input type='mail' onChange={(e)=>{setMail(e.target.value)}}></input><br></br>
          <label>password:</label><br></br>
          <input type='password' onChange={(e)=>{setPassword(e.target.value)}}></input><br></br>
          <button type='submit'>OK</button>
        </form>
        {error}
    </div>
  )
}
