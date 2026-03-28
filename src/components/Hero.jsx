import React from 'react'
import './Hero.css'
import { motion } from 'framer-motion'
import Typewriter from './Typewriter'

const left = { initial:{opacity:0,y:20}, animate:{opacity:1,y:0,transition:{duration:0.7, ease:'easeInOut'}} }
const avatar = { initial:{scale:0.9,opacity:0}, animate:{scale:1,opacity:1,transition:{duration:0.8,delay:0.2}} }

export default function Hero(){
  return (
    <section id="home" className="section hero">
      <div className="container hero__inner">
        <motion.div className="hero__copy" initial="initial" animate="animate" variants={left}>
          <h1 className="hero__title">Hi, I'm Arsya Mayreno Arnaldo — a <span className="accent">junior developer</span></h1>
          <p className="hero__lead">I build performant, accessible web apps and delightful experiences.</p>
          <div className="hero__actions">
            <button className="btn">Get in touch</button>
            <a href="#projects" className="btn btn--ghost">See projects</a>
          </div>
          <div className="hero__roles"><Typewriter roles={["Web Developer","Game Developer","UI Engineer"]} /></div>
        </motion.div>

        {/* <motion.div className="hero__avatar" variants={avatar} initial="initial" animate="animate">
          <div className="avatar__circle"/>
        </motion.div> */}
      </div>
    </section>
  )
}
