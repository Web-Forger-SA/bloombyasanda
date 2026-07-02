// import { useState } from 'react'
import Navbar from './sections/navbar/navbar'
import Hero from './sections/hero/hero'
import './App.css'
import Process from './sections/process/process'
import FeaturedProducts from './sections/featured-products/featured-products'
import About from './sections/about/about'
import Resellers from './sections/resellers/reselleres'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <FeaturedProducts />
      <About />
      <Resellers />
    </>
  )
}

export default App
