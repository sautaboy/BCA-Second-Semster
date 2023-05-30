import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import JavaNav from '../navbarComponents/JavaNav'


export default function FirstSemister() {
  return (
    <div>
      <Navbar
        navListOne="Computer Fundamental and Applications"
        navListOneHref="/thirdSemister"

        navListTwo="Society and Technology" navListTwoHref="/thirdSemister"

        navListThree="English I" navListThreeHref="/thirdSemister"

        navListFour="Mathmatics I " navListFourHref="/thirdSemister"

        navListFive="Digital Logic" navListFiveHref="/thirdSemister"


      />


    </div>
  )
}
