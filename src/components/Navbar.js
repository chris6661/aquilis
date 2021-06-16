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
            
            <a href = "/#">Home</a>
            <a href = "/#">About Us</a>
            <a href = "/#">Testimonials</a>
            <a href = "/#">Services</a>
            <a href = "/#">Sell</a>
            <a href = "/#">Business Solutions</a>
            <a href = "/#">Locations</a>
            <a href = "/#">Book Online</a>


            {/* <li className="nav-item active">
              <Link  to = "/" className="nav-link" href="/#">Home <span className="sr-only">(current)</span></Link>
            </li>

            <li className="nav-item">
              <Link to = "/about"  className="nav-link" >About Me</Link>
            </li>
{/*             
            <li className="nav-item">
              <Link to = "/skills"  className="nav-link" href="#">What I Do</Link>
            </li>

            <li className="nav-item">
              <Link to  = "experience" className="nav-link" href="#">Experience</Link>
            </li> */}

            {/* <li className="nav-item">
              <Link  to = "portfolio"  className="nav-link" href="/#">Portfolio</Link>
            </li>
                                   
            <li className="nav-item">
              <Link to  = "resume" className="nav-link" href="#">Resume</Link>
            </li>

            <li className="nav-item">
              <Link  to = "contact"  className="nav-link" href="/#">Contact Me</Link>
            </li> */} 

          </ul>
          
        </div>
        </div>
      </nav>
      </div>
      
    )
}

export default Navbar;


//can put picture or some logo where navbar was line 6, path it right