import React from 'react'
import './About.css'
import { motion } from 'framer-motion'

export default function About(){
  return (
    <section id="about" className="section">
      <motion.div className="container section--narrow about__inner"
        initial={{opacity:0, x:-50}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{duration:0.7, ease:'easeInOut'}}>
        <h2>About Me</h2>
        <p className="muted">I am a Software Engineering student with a strong focus on web development. I am experienced in using Laravel and React to build fast and responsive applications. I enjoy learning new technologies and continuously improving my skills through real-world projects.</p>
      </motion.div>
    </section>
  )
}
