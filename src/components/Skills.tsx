'use client';

import React from 'react'
import { motion } from 'framer-motion'
import LogoLoop, { LogoItem } from './LogoLoop'
import {
  SiJavascript,
  SiReact,
  SiLaravel,
  SiPhp,
  SiNodedotjs,
  SiPython,
  SiFlutter,
  SiDjango,
  SiMysql,
  SiLinux,
  SiHtml5,
  SiNextdotjs,
  SiTailwindcss,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const container = { hidden: {}, show: { transition: { staggerChildren: 0.12 } } }

const iconClass = "text-[1.6rem] text-muted transition-colors duration-300 group-hover:text-accent group-hover:drop-shadow-[0_0_6px_rgba(124,92,255,0.6)]"

const techLogos: LogoItem[] = [
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiJavascript className={iconClass} />
        <span>JavaScript</span>
      </div>
    ),
    title: 'JavaScript',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiReact className={iconClass} />
        <span>React</span>
      </div>
    ),
    title: 'React',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiLaravel className={iconClass} />
        <span>Laravel</span>
      </div>
    ),
    title: 'Laravel',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiPhp className={iconClass} />
        <span>PHP</span>
      </div>
    ),
    title: 'PHP',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiNodedotjs className={iconClass} />
        <span>NodeJS</span>
      </div>
    ),
    title: 'NodeJS',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiPython className={iconClass} />
        <span>Python</span>
      </div>
    ),
    title: 'Python',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiFlutter className={iconClass} />
        <span>Flutter</span>
      </div>
    ),
    title: 'Flutter',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiDjango className={iconClass} />
        <span>Django</span>
      </div>
    ),
    title: 'Django',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiMysql className={iconClass} />
        <span>MySQL</span>
      </div>
    ),
    title: 'MySQL',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <FaJava className={iconClass} />
        <span>Java</span>
      </div>
    ),
    title: 'Java',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiLinux className={iconClass} />
        <span>Linux</span>
      </div>
    ),
    title: 'Linux',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiHtml5 className={iconClass} />
        <span>HTML5</span>
      </div>
    ),
    title: 'HTML5',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiNextdotjs className={iconClass} />
        <span>Next.js</span>
      </div>
    ),
    title: 'Next.js',
  },
  {
    node: (
      <div className="text-muted transition-all duration-300 flex items-center gap-2.5 text-[1rem] font-medium hover:text-white group">
        <SiTailwindcss className={iconClass} />
        <span>TailwindCSS</span>
      </div>
    ),
    title: 'TailwindCSS',
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <motion.div className="w-full max-w-[1100px] mx-auto px-5" initial="hidden" whileInView="show" viewport={{ once: true }} variants={container}>
        <div className="bg-surface border border-white/5 rounded-xl py-6 mb-10 overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.2)]">
          <LogoLoop
            logos={techLogos}
            speed={40}
            direction="left"
            logoHeight={36}
            gap={48}
            hoverSpeed={0}
            scaleOnHover={true}
            fadeOut={true}
            fadeOutColor="var(--surface)"
            ariaLabel="Technology stack carousel"
          />
        </div>
      </motion.div>
    </section>
  )
}
