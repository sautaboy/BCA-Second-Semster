import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import WebTechnologyNav from '../navbarComponents/WebTechnologyNav'
import JavaNav from '../navbarComponents/JavaNav'

export default function FifthSemister() {
    return (
        <div>
            <Navbar
                navListOne="MIS and e-Business"
                navListOneHref="misEbusiness"

                navListTwo="DotNet Technology" navListTwoHref="dotNet Technology"

                navListThree="Computer Networking" navListThreeHref="computerNetworking"

                navListFour="Introduction to Management" navListFourHref="intrductionManagement"
                navListFive="Computer Graphic And Animation" navListFiveHref="computerGraphicAndAnimation"

            />
        </div>
    )
}
