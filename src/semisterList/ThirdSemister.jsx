import React from 'react'
import Navbar from '../navbarComponents/Navbar'
import JavaNav from '../navbarComponents/JavaNav'

export default function ThirdSemister() {
  return (
    <div>
      <Navbar
        navListOne="Data Structure And Alogorithm"
        navListOneHref="dataStructureAndAlogorithm"

        navListTwo="Probility and Statistics" navListTwoHref="probilityAndStatistics"

        navListThree="System Analysis and Design" navListThreeHref="systemAnalysisAndDesign"

        navListFour="OOp in Java" navListFourHref="oopInJava"

        navListFive="Web Technology" navListFiveHref="webTechnology"
      />
      
      <JavaNav />
    </div>
  )
}
