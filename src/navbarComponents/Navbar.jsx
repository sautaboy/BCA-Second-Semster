import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {
    const [style, setStyle] = useState(

        {
            display: "none"
        }
    )

    const toggle =()=>
    {
        if(style.display === "none")
        {
            setStyle(
                {
                    display:"flex"
                }
            )
        }
        else
        {
            setStyle(
                {
                    display:"none"
                }
            )
        }
    }


    return (
        <>
            <div className='navbarHeader' style={style}>
                <div className="navLogo">
                    <NavLink to="/" className="desktopHome">Home</NavLink>
                </div>

                <div className="navList">
                    <NavLink to={"/" + props.navListOneHref}>{props.navListOne}</NavLink>

                    <NavLink to={"/" + props.navListTwoHref}>{props.navListTwo}</NavLink>

                    <NavLink to={"/" + props.navListThreeHref} >{props.navListThree}</NavLink>

                    <NavLink to={"/" + props.navListFourHref}>{props.navListFour}</NavLink>
                    <NavLink to={"/" + props.navListFiveHref}>{props.navListFive}</NavLink>
                </div>

                <div className="extraNavList">
                    <a href="https://sautaboy.netlify.app" target='_blank' className='desktopUser'>Creater</a>
                </div>
            </div>
            <div className="navHead" >
                <div className="leftHam">
                    <NavLink to="/">
                        {/* <i class="fa-solid fa-house fa-fade"></i> */}
                    </NavLink>

                    <NavLink to="/">
                        {/* left Ham */}
                        <i class="fa-solid fa-bars fa-fade " onClick={toggle}></i>
                    </NavLink>
                </div>


                <div className="rightHam" >
                    <a href="https://sautaboy.netlify.app" target='_blank'>
                        {/* <i class="fa-solid fa-user fa-beat-fade"></i> */}
                        
                    </a>

                    {/* right ham */}
                    <i class="fa-solid fa-bars fa-fade " >
                    </i>
                </div>
            </div >

        </>

    )
}
