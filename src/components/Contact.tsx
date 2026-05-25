'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { FaInstagram, FaGithub, FaEnvelope } from 'react-icons/fa'
import { FloatingDock } from './ui/floating-dock'

export default function Contact() {
  const links = [
    {
      title: "Instagram",
      icon: <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://www.instagram.com/reno110509/",
    },
    {
      title: "Email",
      icon: <FaEnvelope className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "mailto:arsyamayreno480@gmail.com",
    },
    {
      title: "GitHub",
      icon: <FaGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com/Reno11052009",
    },
  ];

  return (
    <section id="contact" className="py-8">
      <motion.div
        className="w-full max-w-[900px] mx-auto px-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-[1.8rem] font-bold mb-6 text-center">Contact</h2>
        <div className="flex items-center justify-center w-full mt-4">
          <FloatingDock
            mobileClassName="translate-y-2"
            items={links}
          />
        </div>
      </motion.div>
    </section>
  )
}
