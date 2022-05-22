import * as React from "react"
import '../assets/styles/global.css'
import Hero from '../components/heroSection/Hero'
// import Layout from "../components/layout/Layout"
import SideBar from '../components/shared/sideBar/SideBar'

const IndexPage = () => {
  return (
    <>
    {/* <Layout /> */}
    <SideBar />
     <Hero /> 
      
    </>
  )
}

export default IndexPage
