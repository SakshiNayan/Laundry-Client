import React from "react";
//import {Link} from "react-router-dom"
import "./headerP2.css"
const HeaderP2 = ()=>{
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
            {/* <Link to="./logout.js"><div className="list3">
                <img id="Logo" src="/images/icon.jpg" alt=""/>
                <div>
                    <p>User Name</p>
                </div>
            </div></Link> */}
            {/* <button className="userButton">
                <div className="list3">
                    <img id="Logo" src="/images/icon.jpg" alt=""/>
                    <div>
                        <p>User Name</p>
                    </div>
                </div>
            </button>
            <div class="dropdown-content">
                <a href="#">LOG OUT</a>
                
            </div> */}
            <div className="dropdown">
                {/* <button className="dropbtn">Dropdown</button> */}
                <button className="dropbtn">
                        <div className="Imgcontain">
                        <span><img id="Logo" src="/images/icon.jpg" alt=""/></span>
                        
                        <span> User Name</span>
                        </div>
                </button>
                <div className="dropdown-content">
                <a href="/Signin">LOG OUT</a>
                
            </div>
            </div>

            </div>
            
        </header>
        </>
    )
}
export default HeaderP2;