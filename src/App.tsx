// import { useState } from 'react'
import Navbar from './sections/navbar/navbar'
import Hero from './sections/hero/hero'
import './App.css'
import Process from './sections/process/process'
import FeaturedProducts from './sections/featured-products/featured-products'

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <Process />
      <FeaturedProducts />
    </>
  )
}

export default App
