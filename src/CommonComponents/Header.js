import React from 'react'
import '../static/css/style.css';

import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header id="header" className="fixed-top">
      <div className="container-lg d-flex align-items-center">

        <div className="logo me-auto">
          <h1><Link to="/">Communicate</Link></h1>
          {/*Uncomment below if you prefer to use an image logo 
          <Link to="index.html"><img src="static/img/logo.png" alt="" className="img-fluid"/></Link>*/}
        </div>
        {/* Start navbar */}
        <nav id="navbar" className="navbar">
          <ul>
            <li><Link className="nav-link scrollto active" to="/">Home</Link></li>
            <li><Link className="nav-link scrollto" to="/about">About</Link></li>
            <li><Link className="nav-link scrollto" to="/contactus">Contact US</Link></li>
            <li className="dropdown"><Link to="/"><span>Help</span> <i className="bi bi-chevron-down"></i></Link>
              <ul>
                <li><Link to="/">FAQ</Link></li>
                <li><Link to="/">Quick Start</Link></li>
                <li><Link to="/new/api">Contribute</Link></li>
              </ul>
          </li>
          <li><Link className="nav-link scrollto" to="/login"><h4><span className="badge rounded-pill bg-warning text-dark">Login</span></h4></Link></li>
          <li><Link className="nav-link scrollto" to="/usr/generator"><h4><span className="badge rounded-pill bg-warning text-dark">Try Now</span></h4></Link></li>
          <li><Link className="nav-link scrollto" to="/new/api"><h4><span className="badge rounded-pill bg-warning text-dark">Contribute</span></h4></Link></li>
          <li><Link className="nav-link scrollto" to="/fetch/api"><h4><span className="badge rounded-pill bg-warning text-dark">FetchApi</span></h4></Link></li>
          </ul>
          <i className="bi bi-list mobile-nav-toggle"></i>
        </nav>
        {/* End navbar */}
      </div>
      
    </header>
  </>
  );
}

export default Header;
