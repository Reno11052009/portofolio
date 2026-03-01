import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section">
      <motion.div className="container section--narrow about__inner"
        initial={{opacity:0, x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7, ease:'easeInOut'}}>
        <h2>About Me</h2>
        <p className="muted">I'm a developer focused on building accessible, high-performance web applications. I enjoy solving complex UI problems and crafting smooth interactions.</p>
      </motion.div>
    </section>
  )
}
