import React from 'react'
import Navbar from "./components/Navbar";
import Hero from './components/Hero'
import Sponsors from "./components/Sponsors";
import Mission from "./components/Mission";
import Vision from './components/Vision'
import VisionOne from './components/VisionOne'
import VisionTwo from "./components/VisionTwo";
import Globe from "./components/Globe";
import Team from "./components/Team";
import Update from "./components/Update";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Sponsors />
      <Mission />
      <Vision />
      <VisionOne />
      <VisionTwo />
      <Globe />
      <Team />
      <Update />
      <Footer />
    </>
  )
}

export default App