import React from 'react'
import './Sosmed.css'
import { motion } from 'framer-motion'

export default function Sosmed() {
  return (
    <section id="sosmed" className="section">
      <motion.div
        className="container section--narrow"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Sosmed</h2>
        <div className="sosmed__socials">
          {/* <a href="https://wa.me/628123456789" target="_blank" rel="noopener noreferrer" className="btn">
            WhatsApp
          </a> */}
          <a href="https://www.instagram.com/reno110509/" target="_blank" rel="noopener noreferrer" className="btn">
            Instagram
          </a>
          {/* <a href="https://www.linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="btn">
            LinkedIn
          </a> */}
          <a href="mailto:arsyamayreno480@gmail.com" className="btn">
            Email
          </a>
          <a href="https://github.com/Reno11052009" target="_blank" rel="noopener noreferrer" className="btn">
            GitHub
          </a>
        </div>
      </motion.div>
    </section>
  )
}