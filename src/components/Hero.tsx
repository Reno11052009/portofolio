'use client';

import React from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import TechMarquee from './TechMarquee'


const left = {
  initial: { opacity: 0, x: -20 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

export default function Hero() {
  const scrollToProjects = (e: React.MouseEvent) => {
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
            <Typewriter roles={["Software Engineer", "Web Developer"]} />
          </div>
        </motion.div>
      </div>

      <div className="w-full mt-10 md:mt-6">
        <TechMarquee />
      </div>
    </section>
  )
}
