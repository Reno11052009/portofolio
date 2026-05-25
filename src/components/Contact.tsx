'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'

export default function Contact() {
  return (
    <section id="contact" className="py-20">
      <motion.div
        className="w-full max-w-[900px] mx-auto px-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[1.8rem] font-bold mb-2">Contact</h2>
        <div className="flex flex-col gap-3 mt-3">
          <a
            href="https://www.instagram.com/reno110509/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-[10px] bg-gradient-to-r from-[rgba(93,211,255,0.06)] to-[rgba(124,92,255,0.06)] border border-white/5 text-inherit no-underline transition-all duration-300 hover:shadow-[0_6px_20px_rgba(124,92,255,0.12)] hover:border-accent hover:text-accent"
          >
            <FaInstagram className="text-xl" />
            <span>Instagram</span>
          </a>
          <a
            href="mailto:arsyamayreno480@gmail.com"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-[10px] bg-gradient-to-r from-[rgba(93,211,255,0.06)] to-[rgba(124,92,255,0.06)] border border-white/5 text-inherit no-underline transition-all duration-300 hover:shadow-[0_6px_20px_rgba(124,92,255,0.12)] hover:border-accent hover:text-accent"
          >
            <FaEnvelope className="text-xl" />
            <span>Email</span>
          </a>
          <a
            href="https://github.com/Reno11052009"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 py-3 px-4 rounded-[10px] bg-gradient-to-r from-[rgba(93,211,255,0.06)] to-[rgba(124,92,255,0.06)] border border-white/5 text-inherit no-underline transition-all duration-300 hover:shadow-[0_6px_20px_rgba(124,92,255,0.12)] hover:border-accent hover:text-accent"
          >
            <FaGithub className="text-xl" />
            <span>GitHub</span>
          </a>
        </div>
      </motion.div>
    </section>
  )
}
