import * as React from "react"
import '../assets/styles/global.css'
import Hero from '../components/heroSection/Hero'
import Footer from '../components/shared/footer/Footer'
import ParticlesComponent from "../components/ParticlesComponent"
import Seo from '../components/Seo'
import Navbar from "../components/shared/navbar/Navbar"

const IndexPage = () => {
  return (
    <>
    {/* <Layout /> */}
    {/* <SideBar /> */}
    <Seo title="Home" /> 
    <Navbar />
    <Hero /> 
    <Footer /> 
    <ParticlesComponent />k
    </>
  )
}

export default IndexPage