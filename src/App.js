import React from 'react'
import './App.css'
import Navbar from './navbarComponents/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import JavaNav from './navbarComponents/JavaNav'
import DsaNav from './navbarComponents/DsaNav'
import WebTechnologyNav from './navbarComponents/WebTechnologyNav'
import SadNav from './navbarComponents/SadNav'
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
        </Routes>
      </BrowserRouter>
    </div >
  )
}
