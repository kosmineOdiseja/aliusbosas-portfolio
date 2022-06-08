import React from 'react'
import Seo from '../components/Seo'
import Navbar from '../components/shared/navbar/Navbar'
import ParticlesComponent from '../components/shared/ParticlesComponent'
import Projects from '../components/projects/Projects'
import Skills from '../components/skill/Skills'

const projects = () => {

  return (
    <>
      <Seo title='projects' />
      <Navbar />
      <Skills />
      <Projects />
      <ParticlesComponent />
    </>
  )
}

export default projects