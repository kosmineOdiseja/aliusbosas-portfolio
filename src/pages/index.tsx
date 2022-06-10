import * as React from "react"
import '../assets/styles/global.css'
import Hero from '../components/heroSection/Hero'
import Footer from '../components/shared/footer/Footer'
import ParticlesComponent from "../components/shared/ParticlesComponent"
import Seo from '../components/Seo'
import Navbar from "../components/shared/navbar/Navbar"
import ApieMane from '../components/about/apieMane'
import Skills from '../components/skills/Skills'

const IndexPage = () => {
  return (
    <>
    {/* <Layout /> */}
    {/* <SideBar /> */}
    <Seo title="Home" /> 
    {/* <Navbar /> */}
    <Hero /> 
    <ParticlesComponent />
    <ApieMane />
    <Skills />
    <Footer />
    </>
  )
}

export default IndexPage