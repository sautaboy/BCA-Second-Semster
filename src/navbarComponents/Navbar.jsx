import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className='navbarHeader'>
            <div className="navLogo">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="navList">
                <NavLink to="/webTechnology">WEB TECHNOLOGY</NavLink>
                <NavLink to="/java">JAVA</NavLink>
                <NavLink to="/dsa">DSA</NavLink>
                <NavLink to="/sad">SAD</NavLink>
            </div>
            <div className="extraNavList">
                <a href="">Menu</a>
                <a href="">Questions</a>
                <a href="https://sautaboy.netlify.app" target='_blank'>Creater</a>
            </div>
        </div>

    )
}
