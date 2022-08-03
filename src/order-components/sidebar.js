import React from "react";
import "./sidebar.css"

const SideBar =()=>{
    return(
        <>
        <div className="sidebar">
            <div className="home"><a href="/"><img src="/images/home.png" alt=""/></a></div>
            <div className="plus"><a href="/"><img src="/images/plus.png" alt=""/></a></div>
            <div id="content"><a href="/"><img src="/images/content.png" alt=""/></a></div>

        </div>
        </>
    )
}
export default SideBar;