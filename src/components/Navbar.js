import React from 'react'
// import {Link} from 'react-router-dom';
//REACTFONT awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
const Navbar = () => {
    return (
      <div className="nav-main">
        <nav className="navbar navbar-expand-lg bg-dark fixed-top">
        <div className='container'>
        <a className="navbar" href="/#"> </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <FontAwesomeIcon icon={faBars} style={{ color: '#fff'}}/>        
        </button>
      
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto">
            
            <li className="nav-item active">
                <a href = "/#">Home</a>    
            </li>
             
            <li className="nav-item">
                <a href = "/#">About Us</a>
            </li>

            <li className="nav-item">
                <a href = "/#">Testimonials</a>
            </li>
            
            <li className="nav-item">
                <a href = "/#">Services</a>
            </li>
                
            <li className="nav-item">
                <a href = "/#">Sell</a>
            </li>
                
            <li className="nav-item">
                <a href = "/#">Business Solutions</a>
            </li>
            
            <li className="nav-item">
                <a href = "/#">Locations</a>
            </li>
            
            <li className="nav-item">
                <a href = "/#">Book Online</a>
            </li>
        
          </ul>
          
        </div>
        </div>
      </nav>
      </div>
      
    )
}

export default Navbar;


//can put picture or some logo where navbar was line 6, path it right