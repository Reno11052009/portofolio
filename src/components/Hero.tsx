'use client';

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'
import TechMarquee from './TechMarquee'
import { IoArrowForward, IoCodeSlash } from 'react-icons/io5'

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } }
}

const codeLines = [
  { line: 1, content: <><span className="text-[#a78bfa]">const</span> <span className="text-[#a3e635]">developer</span> <span className="text-white/60">=</span> <span className="text-yellow-200/80">{'{'}</span></> },
  { line: 2, content: <><span className="text-white/80 ml-4">name:</span> <span className="text-[#a3e635]">'Arsya Mayreno Arnaldo'</span><span className="text-white/60">,</span></> },
  { line: 3, content: <><span className="text-white/80 ml-4">role:</span> <span className="text-[#a3e635]">'Junior Developer'</span><span className="text-white/60">,</span></> },
  { line: 4, content: <><span className="text-white/80 ml-4">skills:</span> <span className="text-[#a3e635]">['React', 'Next.js', 'TypeScript', 'Tailwind']</span><span className="text-white/60">,</span></> },
  { line: 5, content: <><span className="text-white/80 ml-4">isPassionate:</span> <span className="text-[#a78bfa]">true</span><span className="text-white/60">,</span></> },
  { line: 6, content: <><span className="text-white/80 ml-4">sayHi:</span> <span className="text-[#a78bfa]">()</span> <span className="text-[#a78bfa]">{'=>'}</span> <span className="text-[#e879f9]">console</span><span className="text-white/80">.</span><span className="text-yellow-200/80">log</span><span className="text-white/80">(</span><span className="text-[#a3e635]">'Hello World!'</span><span className="text-white/80">)</span></> },
  { line: 7, content: <><span className="text-yellow-200/80">{'}'}</span></> }
]

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('projects')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault()
    const element = document.getElementById('contact')
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section id="home" className="pt-[15vh] md:pt-0 pb-16 md:py-0 flex flex-col justify-start md:justify-center min-h-[100dvh] md:min-h-0 md:h-[calc(100vh-140px)] w-full relative" style={{overflow: 'hidden'}}>
      <div className="w-full max-w-[1200px] mx-auto px-5 flex flex-col justify-start md:justify-center relative" style={{overflow: 'hidden'}}>
        {/* Glow effect */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] md:w-[600px] h-[400px] md:h-[600px] bg-purple-500/10 blur-[100px] rounded-full pointer-events-none" />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-start md:items-center relative z-10">
          
          {/* Left: Text & CTAs */}
          <motion.div 
            className="flex flex-col items-center lg:items-start text-center lg:text-left mt-8 md:mt-0" 
            initial="initial" 
            animate="animate" 
            variants={fadeUp}
          >
            {/* <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm mb-6 text-white/80">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Available for new projects
            </div> */}
            
            <h1 className="text-[2.5rem] sm:text-[3rem] lg:text-[3.5rem] font-bold leading-[1.1] mb-6 tracking-tight">
              Hi, I'm Reno. <br className="hidden lg:block" />
              I build <span className="text-[#a78bfa]">digital experiences</span>.
            </h1>
            
            <p className="text-white/60 text-base md:text-lg mb-8 max-w-lg leading-relaxed">
              I'm a junior developer focused on creating performant, accessible web apps with delightful user experiences.
            </p>
            
            {/* The role typewriter */}
            <div className="mb-10 text-white/80 h-8 flex items-center justify-center lg:justify-start">
              <Typewriter roles={["Software Engineer", "Web Developer", "Frontend Enthusiast"]} />
            </div>

            {/* CTAs */}
            {/* <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button 
                onClick={scrollToProjects}
                className="group relative inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-black font-medium rounded-full overflow-hidden transition-transform hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>View My Work</span>
                <IoArrowForward className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <button 
                onClick={scrollToContact}
                className="group inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white/5 border border-white/10 text-white font-medium rounded-full hover:bg-white/10 transition-colors"
              >
                <span>Get In Touch</span>
              </button>
            </div> */}
          </motion.div>

          {/* Right: Code Editor Visual */}
          <motion.div 
            className="w-full min-w-0 relative mt-8 lg:mt-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative rounded-2xl bg-[#0d0d0f] border border-white/10 shadow-2xl overflow-hidden backdrop-blur-xl w-full">
              {/* Header */}
              <div className="flex items-center px-4 py-3 border-b border-white/5 bg-white/5">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="mx-auto flex items-center gap-2 text-xs text-white/40 font-mono">
                  <IoCodeSlash />
                  <span>developer.ts</span>
                </div>
                <div className="w-12" /> {/* Spacer for centering */}
              </div>
              
              {/* Body */}
              <div className="p-4 md:p-6 font-mono text-[11px] md:text-sm leading-loose overflow-x-auto text-white/80 max-w-full">
                <motion.div
                  initial="hidden"
                  animate="visible"
                  variants={{
                    hidden: { opacity: 0 },
                    visible: {
                      opacity: 1,
                      transition: { staggerChildren: 0.15, delayChildren: 0.5 }
                    }
                  }}
                >
                  {codeLines.map((item, i) => (
                    <motion.div 
                      key={i} 
                      className="flex whitespace-pre"
                      variants={{
                        hidden: { opacity: 0, x: -10 },
                        visible: { opacity: 1, x: 0 }
                      }}
                    >
                      <span className="text-white/20 w-6 md:w-8 select-none text-right mr-4 inline-block">{item.line}</span>
                      <span>{item.content}</span>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="flex whitespace-pre mt-2"
                    variants={{
                      hidden: { opacity: 0 },
                      visible: { opacity: 1 }
                    }}
                  >
                    <span className="text-white/20 w-6 md:w-8 select-none text-right mr-4 inline-block">8</span>
                    <span className="text-white/40 italic">// Ready for new challenges</span>
                    {mounted && (
                       <span className="inline-block w-2 h-4 bg-white/60 ml-2 animate-pulse align-middle" />
                    )}
                  </motion.div>
                </motion.div>
              </div>
            </div>
            
            {/* Decorative elements behind the code window */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#38bdf8]/10 rounded-full blur-3xl -z-10" />
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#a78bfa]/10 rounded-full blur-3xl -z-10" />
          </motion.div>

        </div>
      </div>

      <div className="w-full mt-16 md:mt-6 pb-8 md:pb-0 z-10 relative">
        <TechMarquee />
      </div>
    </section>
  )
}

