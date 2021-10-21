import React from 'react'
import { SocialIcon } from 'react-social-icons';
import logo from '../images/aquilis_logo_1.PNG'; 

const Header = () => {
    return (
        <div className="header">
            <div className="hero">

                <img src= {logo} alt="aquilis logo" />

            </div>

            <div className="contact-info">
                Call Now: 412.931.2400 | 412.896.1540
            </div>

            <div className="media-buttons">

            <SocialIcon network ="twitter" style={{ height: 35, width: 35 }}/>
            <SocialIcon network ="linkedin" style={{ height: 35, width:35 }} />
            <SocialIcon network ="google" style = {{ height: 35, width: 35 }} />
            <SocialIcon network ="facebook" style = {{ height: 35, width: 35 }}/>

            </div>
        </div>
    )
}

export default Header
