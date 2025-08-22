import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Contact from './components/Contact.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Specials from './components/Specials.jsx'
import About from './components/About.jsx'
import Menu from './components/Menu.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

function App() {

  return (
    <div className='bg-[#FFF6E6]'>
      <Navbar />
      <Home/>
      <Specials/>
      <About/>
      <Menu/>
      <Testimonials/>
      <Contact/>
      <Footer/>
    </div>
    
  )
}

export default App
