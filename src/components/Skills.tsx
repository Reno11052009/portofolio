'use client';

import React from 'react'
import { motion } from 'framer-motion'
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
  SiPostgresql,
} from 'react-icons/si'
import { FaJava } from 'react-icons/fa'

const techSkills = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'React', icon: SiReact },
  { name: 'Next.js', icon: SiNextdotjs },
  { name: 'TailwindCSS', icon: SiTailwindcss },
  { name: 'Laravel', icon: SiLaravel },
  { name: 'PHP', icon: SiPhp },
  { name: 'Node.js', icon: SiNodedotjs },
  { name: 'Python', icon: SiPython },
  { name: 'Django', icon: SiDjango },
  { name: 'Flutter', icon: SiFlutter },
  { name: 'Java', icon: FaJava },
  { name: 'MySQL', icon: SiMysql },
  { name: 'PostgreSQL', icon: SiPostgresql },
  { name: 'HTML5', icon: SiHtml5 },
  { name: 'Linux', icon: SiLinux },
]

const container = { 
  hidden: { opacity: 0 }, 
  show: { 
    opacity: 1, 
    transition: { staggerChildren: 0.05 } 
  } 
}

const itemVariant = { 
  hidden: { opacity: 0, y: 15, scale: 0.9 }, 
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { type: 'spring' as const, stiffness: 300, damping: 24 } 
  } 
}

export default function Skills() {
  return (
    <section id="skills" className="py-8">
      <motion.div 
        className="w-full max-w-[900px] mx-auto px-5" 
        initial="hidden" 
        whileInView="show" 
        viewport={{ once: true, margin: "-50px" }} 
        variants={container}
      >
        <div className="flex flex-wrap justify-center gap-3 md:gap-4">
          {techSkills.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div 
                key={i} 
                variants={itemVariant}
                className="bg-black/40 border border-white/10 hover:border-[#7c5cff]/50 rounded-xl px-4 py-3 flex items-center gap-3 transition-all duration-300 hover:bg-[#7c5cff]/10 hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(124,92,255,0.15)] group cursor-default"
              >
                <Icon className="text-[1.4rem] text-neutral-400 transition-colors duration-300 group-hover:text-[#7c5cff]" />
                <span className="text-neutral-300 font-medium group-hover:text-white transition-colors duration-300 text-sm md:text-base">{tech.name}</span>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  )
}
