import React, { useState, useEffect } from 'react'
import Header from './Header'
import Footer from './Footer'
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [theme, setTheme] = useState("sepia")
  const toggle = () => {
    setIsOpen(!isOpen)
  }
  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "sepia")
  }, [])

  return (
    <div className={`content-wrapper bg-background-primary font-sans text-copy-primary leading-normal flex flex-col min-h-screen relative overflow-hidden ${theme}`}>
      <Header theme={theme} action={setTheme} isOpen={isOpen} toggle={toggle} />
      {children}
      <Footer theme={theme} />
    </div>
  )
}

export default Layout
