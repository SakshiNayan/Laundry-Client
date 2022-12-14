import React from "react";
import "./body.css";
import {Link} from "react-router-dom";
import HeaderP2 from "./headerP2";
import SideBar from "./sidebar"
import FooterSecond from "./footerP2";

const Body = () =>{
     return(
        <>
        <HeaderP2/>
        <div className="content">
        <p className="orderno">Order | 0</p>
        <div className="create_search">
        <input type="search" className="search"/>
        <img className='magnifines' src="/images/search.png" alt=""/>
        </div>
        <div className="create_order">
            <p>No Order Available</p>
            <Link to ="/create-order"><button>Create</button></Link>
        </div>
        </div>
        <SideBar/>
        <FooterSecond/>
        </>
    )

}
export default Body;