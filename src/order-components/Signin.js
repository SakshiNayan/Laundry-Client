import React, { useState } from 'react'
import "./Signin.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Signin = () => {
const [passwordvalidity,setpasswordvalidity]=useState(true)
const [emailvalidity,setemailvalidity]=useState(true)
const navigate=useNavigate()
const [data,setdata]=useState({
  "User":"",
  "Password":""
})

  const handlesubmit=(e)=>{
e.preventDefault()
if(data.Password.length && data.User.length){
axios.post("http://localhost:3001/userRegister/Signin",data).then((loginData)=>{
  localStorage.setItem("authorization",loginData.data.Authtoken) 
  // console.log(localStorage.getItem("authorization"))

  localStorage.setItem("Username", loginData.data.username)

navigate("/create")
})
.catch((err)=>{
  if(err.response.data==="Invalid password"){
    setpasswordvalidity(false)
    setTimeout(()=>{
      setpasswordvalidity(true)
    },10000)
  }
  if(err.response.data==="Invalid User"){
    setemailvalidity(false)
    setTimeout(()=>{
      setemailvalidity(true)
    },10000)
  }
})
}else{
if(data.Password.length===0){
  setpasswordvalidity(false)
  setTimeout(()=>{
    setpasswordvalidity(true)
  },10000)
}
if(data.User.length===0){
  setemailvalidity(false)
  setTimeout(()=>{
    setemailvalidity(true)
  },10000)
}
}
  }
  const handleinput=(e,id)=>{
setdata({...data,[id]:e.target.value})
  }
  return (
    <div id='Signin-comp'>
     <div id='Heading-signin'>Sign in</div>
     <form>
      <div className='signin-inputs-fields'>
      <div className='signin-inputs'>


      <label>Mobile/Email</label>

      <input required type="email/number" id="User" onChange={(e)=>handleinput(e,"User")}/>
      {emailvalidity && <div className='signin-blueline'></div>}
      {!emailvalidity && 
      <>
      <p style={{position:"absolute",left:"375px",top:"305px",color:"red"}}>Enter a valid Email/Number</p>
      <div className='signin-blueline' style={{backgroundColor:"red",position:"relative"}}></div></>}
      
      </div>
      <div className='signin-inputs'>
      <label id='Password-signin'>Password</label>


      <div className='pass'><input required type="password" id='Password-s' onChange={(e)=>handleinput(e,"Password")}/>
      <img src='images/padlock.svg' alt='padlock' style={{width: "20px", height: "20px"}} className="padlock"/></div>

      {passwordvalidity && <div className='signin-blueline'></div>}
      {!passwordvalidity &&
       <>
       <p style={{position:"absolute",left:"408px",top:"395px",color:"red"}}>Enter a valid Password</p>
       <div className='signin-blueline' style={{backgroundColor:"red",position:"relative"}}></div></>}
      
      </div>
      </div>
      <p className='Forgot-password'>Forgot Password?</p>
     <button onClick={(e)=>handlesubmit(e)} id="Button-signin">Sign In</button>
     <img id='Padlock' src='images/padlock.jpg'/>
     </form>
    
    

    </div>
  )
}

export default Signin