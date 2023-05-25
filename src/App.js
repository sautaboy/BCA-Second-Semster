import React from 'react'
import './App.css'
import Navbar from './navbarComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JavaNav from './navbarComponents/JavaNav'
import DsaNav from './navbarComponents/DsaNav'
import WebTechnologyNav from './navbarComponents/WebTechnologyNav'
import SadNav from './navbarComponents/SadNav'

// All The WebTechnology components are herr

import WbTechnologyContent from './contentComponents/webTechnologyContent/ChessBoard'    //actuall the component nam eis ChessBoard.jsx but i rename it later so the component name is showin the WebTechnologyContent ,, this is bug is react
import TableChart from './contentComponents/webTechnologyContent/TableChart'


// All the JAVA components are here 
import Class from './contentComponents/JavaContent/Class'
import Object from './contentComponents/JavaContent/Object'
import Constructor from './contentComponents/JavaContent/Constructor'
import Polymorphism from './contentComponents/JavaContent/Polymorphism'
import Inheritence from './contentComponents/JavaContent/Inheritence'
import Exercise from './contentComponents/JavaContent/Exercise'
import HomeNav from './navbarComponents/HomeNav'




export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<HomeNav />} />
          <Route path='/java' element={<JavaNav />} />
          <Route path='/dsa' element={<DsaNav />} />
          <Route path='/webTechnology' element={<WebTechnologyNav />} />
          <Route path='/sad' element={<SadNav />} />

          {/* Webtechnoloy Link Pipeline is here */}
          <Route path='/chessBoard' element={< WbTechnologyContent />} />
          <Route path='/tableChart' element={<TableChart />} />


          {/* Java Link Pipeline is here  */}
          <Route path='/class' element={<Class />} />
          <Route path='/object' element={<Object />} />
          <Route path='/constructor' element={<Constructor />} />
          <Route path='/polymorphism' element={<Polymorphism />} />
          <Route path='/inheritence' element={<Inheritence />} />
          <Route path='/javaExercise' element={<Exercise />} />






        </Routes>
      </BrowserRouter>
    </div >
  )
}
