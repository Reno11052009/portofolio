import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { motion } from 'framer-motion'
import { FiMenu } from 'react-icons/fi'

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring', stiffness: 120, damping: 18 } }
}

export default function Navbar(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <motion.nav className={"nav" + (scrolled? ' nav--scrolled':'')}
      variants={navVariants} initial="hidden" animate="show">
      <div className="nav__inner container">
        <div className="brand">MyPortfolio</div>
        <ul className="nav__links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <button className="nav__menu"><FiMenu size={20} /></button>
      </div>
    </motion.nav>
  )
}
