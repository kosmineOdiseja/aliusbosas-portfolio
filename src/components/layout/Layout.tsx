import React from 'react'
// import Navbar from './Navbar'
// import Sidebar from './Sidebar'
// import Footer from './Footer'

const Layout = ({ children }: any ) => {
  const [isOpen, setIsOpen] = React.useState(false)

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout