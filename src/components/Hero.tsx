'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import Skills from './Skills'


const left = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeInOut' as const } }
}

export default function Hero() {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="py-10 md:py-0 flex flex-col items-center justify-center min-h-screen md:min-h-0 md:h-[calc(100vh-140px)]">
      <div className="flex flex-col gap-10 items-center justify-center w-full max-w-[1100px] mx-auto px-5 mt-10 md:mt-0">
        <motion.div className="flex-1 text-center flex flex-col items-center justify-center" initial="initial" animate="animate" variants={left}>
          <h1 className="text-[2.4rem] font-bold leading-tight mb-3">
            Hi, I'm Arsya Mayreno Arnaldo — a <span className="text-accent">junior developer</span>
          </h1>
          <p className="text-muted mb-4 max-w-xl">I build performant, accessible web apps and delightful experiences.</p>
          <div className="mt-2.5 text-muted">
            <Typewriter roles={["Web Developer"]} />
          </div>
        </motion.div>
      </div>

      <div className="w-full mt-10 md:mt-6">
        <Skills />
      </div>
    </section>


  )
}
