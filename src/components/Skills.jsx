import React from 'react'
import './Skills.css'
import { motion } from 'framer-motion'
import skills from '../data/skills'

const container = { hidden:{}, show:{ transition:{ staggerChildren:0.12 } } }
const item = { hidden:{opacity:0,y:12}, show:{opacity:1,y:0, transition:{duration:0.5, ease:'easeInOut'}} }

export default function Skills(){
  return (
    <section id="skills" className="section">
      <motion.div className="container" initial="hidden" whileInView="show" viewport={{once:true}} variants={container}>
        <h2>Skills</h2>
        <div className="skills__grid">
          {skills.map(s=> (
            <motion.div key={s.name} className="skill__card" variants={item} whileHover={{y:-6, boxShadow:'0 18px 40px rgba(2,6,23,0.6)'}}>
              <div className="skill__head"><strong>{s.name}</strong><span>{s.level}%</span></div>
              <div className="skill__bar"><motion.div className="skill__fill" initial={{width:0}} whileInView={{width:`${s.level}%`}} viewport={{once:true}} transition={{duration:1.1, ease:'easeInOut'}} /></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
