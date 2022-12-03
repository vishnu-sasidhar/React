import React from "react";
import logo from '../assets/images/logo1.svg'
import Container from 'react-bootstrap/Container';
import { Link } from "react-router-dom";

function Navbar(){
    return(
    <nav id="nav_bar">
        <Container>
            <Link to="/" class="logo">
              <img src={logo} alt="" />
            </Link>
           <div class="group_div">
              <div class="right-nav">
                 <ul class="nav-links">
                     <li>
                        <Link to="/about">About Us</Link>
                     </li>
                      <li>
                        <Link to="/contact">Contact Us</Link>
                      </li>
                 </ul>
                 <Link to="/login" class="login">Log in</Link>
             </div>
 
                <div class="burger">
                    <div class="line1"></div>
                    <div class="line2"></div>
                    <div class="line3"></div>
                </div>
            </div>
        </Container>
    </nav>
    )
}

export default Navbar