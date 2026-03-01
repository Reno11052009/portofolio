import React from 'react'
import './Projects.css'
import { motion } from 'framer-motion'
import projects from '../data/projects'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const container = { hidden:{}, show:{ transition:{ staggerChildren:0.12 } } }
const card = { hidden:{opacity:0,y:12}, show:{opacity:1,y:0,transition:{duration:0.5}} }

export default function Projects(){
  return (
    <section id="projects" className="section">
      <motion.div className="container" initial="hidden" whileInView="show" viewport={{once:true}} variants={container}>
        <h2>Projects</h2>
        <div className="projects__grid">
          {projects.map(p=> (
            <motion.article className="project__card" key={p.id} variants={card} whileHover={{scale:1.03}}>
              <div className="project__media" />
              <div className="project__body">
                <h3>{p.title}</h3>
                <p className="muted">{p.desc}</p>
                <div className="project__cta">
                  <a className="btn btn--ghost" href={p.demo}><FaExternalLinkAlt/></a>
                  <a className="btn btn--ghost" href={p.repo}><FaGithub/></a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
