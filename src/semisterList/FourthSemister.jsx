import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import JavaNav from '../navbarComponents/JavaNav'

export default function FourthSemister() {
  return (
    <div>
      <Navbar
        navListOne="Operating Systems"
        navListOneHref="operatingSystems"

        navListTwo="Numerical Methods" navListTwoHref="numericalMethods"

        navListThree="Software Engineering" navListThreeHref="softwareEngineering"

        navListFour="Scripting Language" navListFourHref="scriptingLanguage"

        navListFive="Database Management System" navListFiveHref="databaseManagementSystem"

      />

    </div>
  )
}
