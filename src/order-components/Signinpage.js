import React from 'react'
import { Link } from 'react-router-dom'
import Copyrightcomp from './Copyrightcomp'
import Footer from './Footer'
import Header from './Header'
import Refercomp from "./Refercomp"
import Signin from "./Signinpage"
import "./Signinpage.css"
const Signinpage = () => {
  return (
    <div id='Signin-page'>
          <Header/>
        <div id='Laundry-signin'>Laundry Service</div>
        <div id='Doorstep-signin'>Doorstep Wash & Dryclean Service</div>
        <div id='Account-signin'>Don't Have An Account?</div>
        <div id='vertical-div-signin'></div>
        <Link to="/create">
        <button id="button-signinpage">Register</button></Link>
        <Signin/>
        <Refercomp/>
        <Footer/>
        <Copyrightcomp/>
    </div>
  )
}

export default Signinpage