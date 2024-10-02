import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import {Route, Routes} from "react-router-dom"
import Redeem from '../components/Redeem'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/redeem" element={<Redeem/>}/>
      </Routes>
    </div>
  )
}

export default Routing