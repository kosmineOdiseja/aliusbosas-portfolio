import * as React from "react"
import '../assets/styles/global.css'
import Hero from '../components/heroSection/Hero'
// import Layout from "../components/layout/Layout"
import SideBar from '../components/shared/sideBar/SideBar'
import Footer from '../components/shared/footer/Footer'
import ParticlesComponent from "../components/ParticlesComponent"
import Seo from '../components/Seo'
import Navbar from "../components/shared/navbar/Navbar"
import { useState } from "react"
import { Link } from "gatsby"
import { RiContactsBookLine } from "react-icons/ri"

const IndexPage = () => {

  const [ isOpen, setIsOpen ] = useState<boolean>(false)

  console.log(isOpen)

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
