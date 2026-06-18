'use client';

import React from 'react'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'
import BorderGlow from './BorderGlow'
import ScrambledText from './ScrambledText'


const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } }
}

const card = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}

export default function Projects() {
  return (
    <section id="projects" className="py-8">
      <motion.div
        className="w-full max-w-[1100px] mx-auto px-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="text-[1.8rem] font-bold mb-4">Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[18px] mt-[18px]">
          {projects.map(p => (
            <motion.div key={p.id} variants={card} whileHover={{ scale: 1.03 }} style={{ borderRadius: '12px' }}>
              <BorderGlow
                borderRadius={12}
                backgroundColor="var(--surface)"
                glowColor="250 80 75"
                glowRadius={30}
                glowIntensity={0.8}
                colors={['#7c5cff', '#5dd3ff', '#98a0b3']}
                className="flex flex-col h-full"
              >
                <div className="p-4 flex flex-col justify-between h-full">
                  <div>
                    <h3 className="text-[1.2rem] font-bold mb-2">{p.title}</h3>
                    <p className="text-muted leading-relaxed text-[0.95rem]">{p.desc}</p>
                  </div>
                  <div className="flex gap-2 mt-4">
                    {p.demo && p.demo !== '#' && (
                      <a className="py-2 px-3 rounded-md border border-white/10 bg-transparent cursor-pointer transition-all duration-200 text-[0.875rem] hover:border-accent hover:text-accent no-underline inline-flex items-center justify-center" href={p.demo} target="_blank" rel="noopener noreferrer">
                        <FaExternalLinkAlt />
                      </a>
                    )}
                    {p.repo && (
                      <a className="py-2 px-3 rounded-md border border-white/10 bg-transparent cursor-pointer transition-all duration-200 text-[0.875rem] hover:border-accent hover:text-accent no-underline inline-flex items-center justify-center" href={p.repo} target="_blank" rel="noopener noreferrer">
                        <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </BorderGlow>
            </motion.div>
          ))}
        </div>
        <ScrambledText
          className="scrambled-text-demo mt-8 hidden md:block"
          radius={100}
          duration={1.2}
          speed={0.5}
          scrambleChars="░▒▓█<>?/[]{}|+=*^%$#@!"
        >
          RENO
        </ScrambledText>

      </motion.div>
    </section>

  )
}
