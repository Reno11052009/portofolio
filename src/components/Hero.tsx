'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

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
    <section id="home" className="py-20 flex items-center min-h-[50vh]">
      <div className="flex flex-col gap-10 items-center justify-center w-full max-w-[1100px] mx-auto px-5">
        <motion.div className="flex-1 text-center flex flex-col items-center justify-center" initial="initial" animate="animate" variants={left}>
          <h1 className="text-[2.4rem] font-bold leading-tight mb-3">
            Hi, I'm Arsya Mayreno Arnaldo — a <span className="text-accent">junior developer</span>
          </h1>
          <p className="text-muted mb-4 max-w-xl">I build performant, accessible web apps and delightful experiences.</p>
          {/* <div className="flex gap-3 mb-3 justify-center">
            <a href="#projects" className="bg-transparent border border-white/10 text-muted py-2 px-3.5 rounded-md cursor-pointer transition-all duration-200 hover:border-accent hover:text-accent no-underline inline-block" onClick={handleScroll}>See projects</a>
          </div> */}
          <div className="mt-2.5 text-muted">
            <Typewriter roles={["Web Developer"]} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
