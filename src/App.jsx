import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className='bg-[#FFF6E6]'>
      <Navbar />
      <Home/>
      <Menu/>
      <About/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
