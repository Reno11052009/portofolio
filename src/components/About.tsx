'use client';

import React from 'react'
import { motion } from 'framer-motion'
import BorderGlow from './BorderGlow'
import ScrambledText from './ScrambledText'


export default function About() {
  return (
    <section id="about" className="py-20">
      <motion.div
        className="w-full max-w-[900px] mx-auto px-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: 'easeInOut' as const }}
      >
        <h2 className="text-[2rem] font-bold mb-6 text-center md:text-left">About Me</h2>
        
        <BorderGlow
          borderRadius={16}
          backgroundColor="var(--surface)"
          glowColor="124 92 255"
          glowRadius={40}
          glowIntensity={0.6}
          colors={['#7c5cff', '#5dd3ff', '#38bdf8']}
          className="w-full"
        >
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="md:col-span-2">
              <p className="text-muted leading-relaxed text-[1.05rem]">
                Hi, I'm Reno, a Full Stack Web Developer passionate about building modern, scalable, and user-friendly web applications. I enjoy turning ideas into real products by creating fast, responsive, and reliable solutions. My primary technologies include React, Next.js, Laravel, Prisma, and PostgreSQL. I'm always eager to learn new technologies, improve my skills, and gain experience through real-world projects.
              </p>
            </div>
            <div className="flex flex-col gap-4 border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-6">
              <div>
                <h4 className="text-accent text-[0.85rem] uppercase tracking-wider font-semibold mb-1">Education</h4>
                <p className="text-white text-[0.95rem] font-medium">Software Engineering</p>
              </div>
              {/* <div>
                <h4 className="text-accent text-[0.85rem] uppercase tracking-wider font-semibold mb-1">Specialization</h4>
                <p className="text-white text-[0.95rem] font-medium">Laravel & React Stack</p>
              </div> */}
              <div>
                <h4 className="text-accent text-[0.85rem] uppercase tracking-wider font-semibold mb-1">Passion</h4>
                <p className="text-white text-[0.95rem] font-medium">Performant Web Experience</p>
              </div>
            </div>
          </div>
        </BorderGlow>
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
