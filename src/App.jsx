import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import Teams from './pages/Teams'
import History from './pages/History'
import Directivos from './pages/Directivos'
import Contact from './pages/Contact' // <--- NUEVO

function App() {
  return (
    <div className="app-container">
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/equipos" element={<Teams />} />
        <Route path="/historia" element={<History />} />
        <Route path="/directivos" element={<Directivos />} />
        <Route path="/contacto" element={<Contact />} /> {/* <--- NUEVO */}
      </Routes>
      
      <Footer />
    </div>
  )
}

export default App