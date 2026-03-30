import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }
}

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
}

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  const handleNavClick = (e) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    setMobileMenuOpen(false)
    const element = document.querySelector(href)
    if(element) element.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav className={"nav" + (scrolled? ' nav--scrolled':'')}
      variants={navVariants} initial="hidden" animate="show">
      <div className="nav__inner container">
        <div className="brand">MyPortfolio</div>
        <ul className="nav__links">
          <li><a href="#home" onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
          <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
        </ul>
        <button className="nav__menu" onClick={()=>setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div className="nav__mobile" variants={mobileMenuVariants} initial="hidden" animate="show">
          <ul className="nav__mobile-links">
            <li><a href="#home" onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" onClick={handleNavClick}>Skills</a></li>
            <li><a href="#projects" onClick={handleNavClick}>Projects</a></li>
            <li><a href="#contact" onClick={handleNavClick}>Contact</a></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
