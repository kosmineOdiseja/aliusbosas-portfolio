import * as React from "react"
import '../assets/styles/global.css'
import Hero from '../components/heroSection/Hero'
// import Layout from "../components/layout/Layout"
import SideBar from '../components/shared/sideBar/SideBar'
import Footer from '../components/shared/footer/Footer'
import ParticlesComponent from "../components/ParticlesComponent"
import Seo from '../components/Seo'

const IndexPage = () => {
  return (
    <>
    {/* <Layout /> */}
    {/* <SideBar /> */}
    <Seo title="Home" /> 
    <Hero /> 
    <Footer /> 
    <ParticlesComponent />
    </>
  )
}

export default IndexPage
