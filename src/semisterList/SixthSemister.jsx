import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import JavaNav from '../navbarComponents/JavaNav'
import Pending from '../extraComponents/Pending'


export default function SixthSemister() {
    return (
        <div>
            <Navbar
                navListOne="Mobile Programming"
                navListOneHref="mobileProgramming"

                navListTwo="Distributed System" navListTwoHref="distributedSystem"

                navListThree="Applied Economics" navListThreeHref="appliedEconomics"

                navListFour="Advance Java Programming" navListFourHref="advancedJavaProgramming"

                navListFive="Network Programming" navListFiveHref="networkProgramming"


            />
            <Pending/>


        </div>
    )
}
