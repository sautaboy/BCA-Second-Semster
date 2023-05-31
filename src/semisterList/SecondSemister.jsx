import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import JavaNav from '../navbarComponents/JavaNav'
import Pending from '../extraComponents/Pending'

export default function SecondSemister() {
  return (
    <div>
      <Navbar
        navListOne="C Programming"
        navListOneHref="cProgramming"

        navListTwo="Financial Account" navListTwoHref="financialAccount"

        navListThree="English II" navListThreeHref="englishII"

        navListFour="Mathmatics II" navListFourHref="mathmaticsII"

        navListFive="Microprocessor and Computer Architecture" navListFiveHref="microprocessorAndComputerArchitecture"

      />
<Pending/>

    </div>
  )
}
