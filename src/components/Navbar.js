import React from 'react'
//REACTFONT awesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faBars } from "@fortawesome/free-solid-svg-icons"; 
import {Link} from 'react-router-dom';



const Navbar = () => {
    return (
      <div className="nav-main">
          <nav className="navbar navbar-expand-lg bg-dark">
            <div className='container'>
              <a className="navbar" href="/#"> </a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <FontAwesomeIcon icon={faBars} style={{ color: '#fff'}}/>        
                </button>
          
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav m-auto">

                  <li className="nav-item active">
                    <Link  to = "/" className="nav-link" href="/#">Home <span className="sr-only">(current)</span></Link>
                  </li>

                  <li className="nav-item">
                    <Link to = "/about"  className="nav-link" >About Us</Link>
                  </li>


                  <li className="nav-item">
                      <Link to = "/testimonials" className="nav-link">Testimonials</Link>
                  </li>
                  
                  <li className="nav-item">
                      <Link to = "/services" className="nav-link">Services</Link>
                  </li>
                      
                  <li className="nav-item">
                      <Link to = "/sell" className="nav-link">Sales</Link>
                  </li>
                      
                  {/* <li className="nav-item">
                      <Link to = "/business" className="nav-link">Business Solutions</Link>
                  </li> */}
                  
                  <li className="nav-item">
                      <Link to = "/locations" className="nav-link">Locations</Link>
                  </li>
                  
                  <li className="nav-item">
                      <Link to = "/book" className="nav-link">Book Online</Link>
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