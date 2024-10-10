import React from 'react'
import Home from '../components/Home'
import About from '../components/About'
import {Route, Routes} from "react-router-dom"
import Redeem from '../components/Redeem'
import Login from '../components/Login'
import Signup from '../components/Signup'
import Place from '../components/Place'
import Places from '../components/Places'

const Routing = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/redeem" element={<Redeem/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/:places" element={<Places/>}/>
        <Route path="/:place" element={<Place/>}/>
      </Routes>
    </div>
  )
}

export default Routing