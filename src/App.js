import React from 'react'
import './App.css'
import Navbar from './navbarComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JavaNav from './navbarComponents/JavaNav'
import DsaNav from './navbarComponents/DsaNav'
import WebTechnologyNav from './navbarComponents/WebTechnologyNav'
import SadNav from './navbarComponents/SadNav'




// importing Semister List
import FirstSemister from './semisterList/FirstSemister'
import SecondSemister from './semisterList/SecondSemister'
import ThirdSemister from './semisterList/ThirdSemister'
import FourthSemister from './semisterList/FourthSemister'
import FifthSemister from './semisterList/FifthSemister'
import SixthSemister from './semisterList/SixthSemister'
import SeventhSemister from './semisterList/SeventhSemister'
import EightSemister from './semisterList/EightSemister'
import Home2 from './contentComponents/homeContent/Home2'
import ProbilityAndStatics from './navbarComponents/ProbilityAndStatics'



export default function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Navbar /> */}
        <Routes>
          <Route path='/home' element={<Home2 />} />
          <Route path='/' element={<Home2 />} />
          <Route path='/java' element={<JavaNav />} />
          <Route path='/dsa' element={<DsaNav />} />
          <Route path='/webTechnology' element={<WebTechnologyNav />} />
          <Route path='/sad' element={<SadNav />} />

          {/* Semister List */}
          <Route path='/firstSemister' element={<FirstSemister />} />
          <Route path='/secondSemister' element={<SecondSemister />} />
          <Route path='/thirdSemister' element={<ThirdSemister />} />
          <Route path='/fourthSemister' element={<FourthSemister />} />
          <Route path='/fifthSemister' element={<FifthSemister />} />
          <Route path='/sixthSemister' element={<SixthSemister />} />
          <Route path='/seventhSemister' element={<SeventhSemister />} />
          <Route path='/eightSemister' element={<EightSemister />} />


          {/* Second Semister Subject */}
          <Route path='/dataStructureAndAlogorithm' element={< DsaNav />} />
          <Route path='/probilityAndStatistics' element={<ProbilityAndStatics />} />
          <Route path='/systemAnalysisAndDesign' element={<SadNav />} />
          <Route path='/oopInJava' element={<JavaNav />} />
          <Route path='/webTechnology' element={<WebTechnologyNav />} />




        </Routes>
      </BrowserRouter>
    </div >
  )
}
