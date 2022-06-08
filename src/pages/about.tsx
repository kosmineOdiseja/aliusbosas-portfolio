import React from 'react'
import ApieMane from '../components/about/apieMane'
import ParticlesComponent from '../components/shared/ParticlesComponent'
import Seo from '../components/Seo'
import Skills from '../components/skills/Skills'

const about = () => {
  return (
    <>
      <Seo title='about' />
      <ApieMane />
      <Skills />
      <ParticlesComponent />
    </>
  )
}

export default about