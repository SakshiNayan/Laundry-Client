import React from "react";
import { useNavigate } from "react-router-dom";
import "./headerP2.css"
const HeaderP2 = ()=>{
    const Navigate=useNavigate()
    const Authtoken=localStorage.getItem("authorization");
    const userName = localStorage.getItem("Username");
    
    const logoutHandler = () =>{
        localStorage.setItem("authorization", "")
        localStorage.setItem("Username", "")
        Navigate("/Signin");
    }
    return(
        <>
        <header id="header">
            <div className="heading"><h2>LAUNDRY</h2></div>
          
            <div id="rigth-head">
            <div className="list1">
            <p className="pricing">Pricing</p>
            </div>
            
            <div className="list2">
                <p className="career">Career</p>
            </div>
            <div className="dropdown">
                <button className="dropbtn">
                        <div className="Imgcontain">
                        <div><img id="Logo" src="/images/icon.jpg" alt=""/></div>
                        
                        <div id="userName">{userName}</div>
                        </div>
                </button>
                <div className="dropdown-content" onClick={()=>{logoutHandler()}}>
                    LOG OUT
            </div>
            </div>

            </div>
            
        </header>
        </>
    )
}
export default HeaderP2;