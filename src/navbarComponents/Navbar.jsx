import React from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
    return (
        <div className='navbarHeader'>
            <div className="navLogo">
                <NavLink to="/">Home</NavLink>
            </div>
            <div className="navList">
                <NavLink to={"/" + props.navListOneHref}>{props.navListOne}</NavLink>

                <NavLink to={"/" + props.navListTwoHref}>{props.navListTwo}</NavLink>

                <NavLink to={"/" + props.navListThreeHref} >{props.navListThree}</NavLink>

                <NavLink to={"/" + props.navListFourHref}>{props.navListFour}</NavLink>
                <NavLink to={"/" + props.navListFiveHref}>{props.navListFive}</NavLink>
            </div>
            <div className="extraNavList">
                <a href="https://sautaboy.netlify.app" target='_blank'>Creater</a>
            </div>
        </div>

    )
}
