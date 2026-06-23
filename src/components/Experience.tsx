'use client';

import React from 'react';
import { motion } from 'framer-motion';
import experiences from '../data/experiences';
import BorderGlow from './BorderGlow';
import ScrambledText from './ScrambledText';
import { IconBriefcase } from '@tabler/icons-react';

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } }
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } }
};

export default function Experience() {
  return (
    <section id="experience" className="py-8">
      <motion.div
        className="w-full max-w-[900px] mx-auto px-5"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={container}
      >
        <h2 className="text-[1.8rem] font-bold mb-6">Experience</h2>
        <div className="flex flex-col gap-6">
          {experiences.map((exp) => (
            <motion.div key={exp.id} variants={item} className="relative">
              <BorderGlow
                borderRadius={16}
                backgroundColor="var(--surface)"
                glowColor="124 92 255"
                glowRadius={30}
                glowIntensity={0.6}
                colors={['#7c5cff', '#5dd3ff', '#38bdf8']}
                className="w-full"
              >
                <div className="p-6 md:p-8 flex flex-col md:flex-row gap-4 md:gap-8">
                  <div className="flex flex-col min-w-[180px]">
                    <div className="text-accent text-[0.85rem] uppercase tracking-wider font-semibold mb-1 flex items-center gap-2">
                      <IconBriefcase size={16} />
                      {exp.period}
                    </div>
                    <div className="text-white text-[1.1rem] font-bold">{exp.role}</div>
                    <div className="text-white/60 text-[0.95rem] font-medium mt-1">{exp.company}</div>
                  </div>
                  <div className="flex-1 border-t md:border-t-0 md:border-l border-white/5 pt-4 md:pt-0 md:pl-6">
                    <p className="text-muted leading-relaxed text-[0.95rem]">
                      {exp.description}
                    </p>
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
  );
}
