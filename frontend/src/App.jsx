import { useState } from 'react'
import './App.css'
import Navbar from './sections/navbar.jsx'
import Hero from './sections/Hero.jsx'

function App() {
 

  return (
    <main className='max-w-7xl mx-auto'>
      <Navbar />
      <Hero />
    </main>
  )
}

export default App