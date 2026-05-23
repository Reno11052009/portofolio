'use client';

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

const navVariants = {
  hidden: { y: -80, opacity: 0 },
  show: { y: 0, opacity: 1, transition: { type: 'spring' as const, stiffness: 120, damping: 18 } }
}

const mobileMenuVariants = {
  hidden: { opacity: 0, y: -10 },
  show: { opacity: 1, y: 0, transition: { duration: 0.2 } }
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const href = e.currentTarget.getAttribute('href')
    setMobileMenuOpen(false)
    if (href) {
      const element = document.querySelector(href)
      if (element) element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const linkClass = "text-muted no-underline relative py-1 after:content-[''] after:absolute after:left-0 after:right-0 after:h-[2px] after:bg-gradient-to-r after:from-accent after:to-[#5dd3ff] after:bottom-[-2px] after:scale-x-0 after:origin-left after:transition-transform after:duration-[280ms] after:ease-[cubic-bezier(0.2,0.9,0.2,1)] hover:after:scale-x-100";
  const mobileLinkClass = "text-muted no-underline py-2.5 block transition-colors duration-200 hover:text-accent";

  return (
    <motion.nav
      className={`fixed left-0 right-0 top-0 z-[60] py-3.5 backdrop-blur-[6px] transition-all duration-300 ${
        scrolled
          ? 'bg-gradient-to-b from-[#0a0c12]/75 to-[#0a0c12]/60 shadow-[0_6px_24px_rgba(2,6,23,0.6)]'
          : ''
      }`}
      variants={navVariants}
      initial="hidden"
      animate="show"
    >
      <div className="flex items-center justify-between w-full max-w-[1100px] mx-auto px-5">
        <div className="font-bold text-accent tracking-[0.6px]">MyPortfolio</div>
        <ul className="hidden md:flex gap-[18px] list-none m-0 p-0">
          <li><a href="#home" className={linkClass} onClick={handleNavClick}>Home</a></li>
          <li><a href="#about" className={linkClass} onClick={handleNavClick}>About</a></li>
          <li><a href="#skills" className={linkClass} onClick={handleNavClick}>Skills</a></li>
          <li><a href="#projects" className={linkClass} onClick={handleNavClick}>Projects</a></li>
          <li><a href="#sosmed" className={linkClass} onClick={handleNavClick}>Sosmed</a></li>
        </ul>
        <button
          className="flex md:hidden bg-transparent border-none text-muted cursor-pointer p-2 rounded-md transition-all duration-200 items-center justify-center w-10 h-10 hover:text-accent hover:bg-[rgba(124,92,255,0.1)] focus:outline-none focus:ring-2 focus:ring-[rgba(124,92,255,0.3)]"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {mobileMenuOpen && (
        <motion.div
          className="absolute top-full left-0 right-0 bg-[#0a0c12]/95 border-t border-white/5 py-4 px-5 backdrop-blur-[6px]"
          variants={mobileMenuVariants}
          initial="hidden"
          animate="show"
        >
          <ul className="list-none m-0 p-0 flex flex-col gap-3">
            <li><a href="#home" className={mobileLinkClass} onClick={handleNavClick}>Home</a></li>
            <li><a href="#about" className={mobileLinkClass} onClick={handleNavClick}>About</a></li>
            <li><a href="#skills" className={mobileLinkClass} onClick={handleNavClick}>Skills</a></li>
            <li><a href="#projects" className={mobileLinkClass} onClick={handleNavClick}>Projects</a></li>
            <li><a href="#sosmed" className={mobileLinkClass} onClick={handleNavClick}>Sosmed</a></li>
          </ul>
        </motion.div>
      )}
    </motion.nav>
  )
}
