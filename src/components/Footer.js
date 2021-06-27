import React from 'react'
import { SocialIcon } from 'react-social-icons';

const Footer = () => {
    return (
        <footer>

            <div className="footer">
            © 2015 Aquilis LLC. ™ | 2315 Babcock Blvd. | Pittsburgh, PA 15237 | 412-931-2400

            <div className="footer-socials">

            <SocialIcon network ="twitter" style={{ height: 35, width: 35 }}/>
            <SocialIcon network ="linkedin" style={{ height: 35, width:35 }} />
            <SocialIcon network ="google" style = {{ height: 35, width: 35 }} />
            <SocialIcon network ="facebook" style = {{ height: 35, width: 35 }}/>

            </div>
            </div>
            </footer>
    )
}

export default Footer;
