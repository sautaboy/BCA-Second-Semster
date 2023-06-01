import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
export default function Navbar(props) {





    const [showLeftHam, setShowLeftHam] = useState(
        {
            display: 'none',
        }
    )

    const toggleLeft = () => {

        if (showLeftHam.display === "none") {
            setShowLeftHam(
                {
                    display: "flex"
                }
            )
        }
        else {
            setShowLeftHam(
                {
                    display: "none"
                }
            )
        }
    }


    // right ham for showing semister list


    const [showRightHam, setShowRightHam] = useState(

        {
            display: "none"
        }
    )

    const toggleRight = () => {
        if (showRightHam.display === "flex") {
            setShowRightHam(
                {
                    display: "none"
                }
            )
        }
        else {
            setShowRightHam(
                {
                    display: "flex"
                }
            )
        }
    }








    return (
        <>
            <div className='navbarHeader' style={showLeftHam} >
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
                    <a href="https://sautaboy.netlify.app" target='_blank' rel="noreferrer" className='desktopUser'>Creater</a>
                </div>
            </div>
            <div className="navHead" >
                <div className="leftHam">
                    <NavLink to="/">
                        <i className="fa-solid fa-house"></i>
                    </NavLink>

                    <NavLink>
                        {/* left Ham */}
                        <i className="fa-solid fa-bars" onClick={toggleLeft}></i>
                    </NavLink>
                </div>


                <div className="rightHam" >
                    <a href="https://sautaboy.netlify.app" target='_blank' rel="noreferrer">
                        <i className="fa-solid fa-user "></i>
                    </a>

                    {/* right ham */}
                    <i className="fa-solid fa-bars " onClick={toggleRight} >
                    </i>
                </div>
            </div >
            <div className="questionSection desktopSemister" style={showRightHam} >
                <ul>
                    <NavLink to="/firstSemister">First Semister</NavLink>
                    <NavLink to="/secondSemister">Second Semister</NavLink>
                    <NavLink to="/thirdSemister"> Third Semister</NavLink>
                    <NavLink to="/fourthSemister"> Fourth Semister</NavLink>
                    <NavLink to="/fifthSemister"> Fifth Semister</NavLink>
                    <NavLink to="/sixthSemister"> Sixth Semister</NavLink>
                    <NavLink to="/seventhSemister"> Seventh Semister</NavLink>
                    <NavLink to="/eightSemister"> Eight Semister</NavLink>

                </ul>
            </div>

            <div className='navbarHeader' >
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
                    <a href="https://sautaboy.netlify.app" target='_blank' rel="noreferrer" className='desktopUser'>Creater</a>
                </div>
            </div>




        </>

    )
}
