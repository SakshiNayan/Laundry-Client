import React, { useState }from 'react'
import "./Register.css"
import axios from 'axios';
import { useNavigate } from 'react-router-dom'

const Register = () => {
  const [termsandcondition,settermsandcondition]=useState("terms-false")
  const [data,setdata]=useState({})
  const [numberValidation,setnumberValidation]=useState("number-validity-true")
  const [emailerror,setemailerror]=useState("emailexist-false")
  const [numbererror,setnumbererror]=useState("numberexist-false")

  const navigate=useNavigate()
  const handleRegister=(e)=>{
    e.preventDefault()
    if((data.Phone+"").length===10){
  axios.post("http://localhost:3001/Register",data)
      .then(()=>{navigate("/Signin")})
    .catch((err)=>{
    if(err.response.data==="EmailExist"){
  setemailerror("emailexist-true")
  setTimeout(()=>{
    setemailerror("emailexist-false")
  },10000)

    }
    if(err.response.data==="PhoneExist"){
      setnumbererror("numberexist-true")
      setemailerror("emailexist-false")
      setTimeout(()=>{
        setnumbererror("numberexist-false")
      },10000)
    
  }
  })
}
}
  const handleFormData=(e,id)=>{
setdata({...data,[id]:e.target.value})
if(id==="Phone"){
  let stringnum=data.Phone+""
  if(stringnum.length!==9){
    setnumberValidation("number-validity-false")
  }else{
    setnumberValidation("number-validity-true")
  }
}
  }
  const checkInputs=()=>{
    let c=0
    for(let key in data){
    let value=data[key]
if(value.length){
  c++
}
    }
    return c
  }

  const getbuttonClass=()=>{
    if(termsandcondition==="terms-false"){
      settermsandcondition("terms-true")
      return 
    }
    settermsandcondition("terms-false")
    return 
  }
  return (
    <div id='Register-comp'>
       <div id='Heading-register'>
        register
      </div>
      <form >
        <div className='grid'>
        <div className='grid-cell'>
  <label className="Label-register"  htmlFor="Name-register">Name</label>
<input  type="text" required id="Name-register" onChange={(e)=>handleFormData(e,"Name")} />
<div className='blue-line-register'></div>
</div>
<div className='grid-cell'>
<label className="Label-register"  htmlFor="Email-register">Email</label>
<input  type="email" required id="Email-register" onChange={(e)=>handleFormData(e,"Email")}/>
<p className={emailerror}>Email already exist</p>
<div className='blue-line-register'></div>
</div>
<div className='grid-cell'>
<label className="Label-register" htmlFor="Phone-register">Phone</label>
<input  type="number" required id="Phone-register" onChange={(e)=>handleFormData(e,"Phone")}/>
<div className='blue-line-register'></div>
<p className={numberValidation}>Please enter a valid number</p>
<p className={numbererror}>Number already exist</p>
</div>
<div className='grid-cell'>
<label className="Label-register" htmlFor="Password-register">Password</label>
<input  type="password" required id="Password-register" onChange={(e)=>handleFormData(e,"Password")}/>
<div className='blue-line-register'></div>
</div>
<div className='grid-cell'>
<label className="Label-register" htmlFor="State-register">State</label>
<select   required id="State-register" onChange={(e)=>handleFormData(e,"State")}>
  <option value=""></option>
<option value="Andhra-Pradesh">Andhra-Pradesh</option>
  <option value="Kerala">Kerala</option>
  <option value="TamilNadu">Tamilnadu</option>
  <option value="Karnataka">Karnataka</option>
</select>
<div className='blue-line-register'></div>
</div>
<div className='grid-cell'>
<label className="Label-register" htmlFor="District-register">District</label>
<select  required id="District-register" onChange={(e)=>handleFormData(e,"District")}>
<option value=""></option>
  <option value="West-Godawari">West-Godawari</option>
<option value="Malappuram">Malappuram</option>
<option value="Kozhikode">Kozhikode</option>
<option value="Ernamkulam">Ernamkulam</option>
<option value="Palakkad">Palakkad</option>
<option value="Thrissur">Thrissur</option>
<option value="Kannur">Kannur</option>
<option value="Wayanad">Wayanad</option>
<option value="idukki">idukki</option>
</select>
<div className='blue-line-register'></div>
</div>
<div className='grid-cell'>
<label className="Label-register" htmlFor="Address-register">Address</label>
<input  type="text" required id="Address-register" onChange={(e)=>handleFormData(e,"Address")}/>
<div className='blue-line-register'></div>
</div>
<div className='grid-cell'>
<label className="Label-register" htmlFor="Pincode-register">Pincode</label>
<input  type="number" required id="Pincode-register" onChange={(e)=>handleFormData(e,"Pincode")}/>
<div className='blue-line-register'></div>
</div>
</div>
<input type="checkbox" id='checkbox-register' required onChange={()=>getbuttonClass()}/>
<p id='Terms-register'>I agree to Terms & Condition receiving marketing and promotional materials</p>
<button type='submit'  className='terms-true'>Register</button><button className={termsandcondition} onClick={checkInputs()!==8?null:(e)=>handleRegister(e)}>Register</button>
</form>
    </div>
  )
}

export default Register