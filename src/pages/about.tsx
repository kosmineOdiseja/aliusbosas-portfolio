import React from 'react'
import ApieMane from '../components/about/apieMane'
import ParticlesComponent from '../components/shared/ParticlesComponent'
import Seo from '../components/Seo'
import Skills from '../components/skills/Skills'
import Navbar from '../components/shared/navbar/Navbar'
import Footer from '../components/shared/footer/Footer'

const about = () => {
  return (
    <>
      <Seo title='about' />
      <Navbar />
      <ApieMane />
      <Skills />
      <ParticlesComponent />
      <Footer />
    </>
  )
}

export default about