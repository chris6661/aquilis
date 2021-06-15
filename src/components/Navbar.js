import React from 'react'
import { Nav } from 'react-bootstrap'; 
const Navbar = () => {
    return (
        <div>
            <Nav>
                <NavLink to = "/">
                    <h1>logo</h1>
                </NavLink>
                <Bars />
                <NavMenu>
                    <NavLink to = "/about">
                        About
                    </NavLink>

                    <NavLink to "/services">
                        Services
                    </NavLink>

                    <NavLink to "/testimonials">
                        Testimonials
                    </NavLink>

                </NavMenu>


            </Nav>
        </div>
    )
}

export default Navbar
