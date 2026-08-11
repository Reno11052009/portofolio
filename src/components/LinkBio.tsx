"use client";

import React from "react";
import { motion } from "framer-motion";
import { IconBrandGithub, IconBrandLinkedin, IconBrandInstagram, IconMail, IconBriefcase } from "@tabler/icons-react";
import Link from "next/link";
import Typewriter from "./Typewriter";

const links = [
  {
    title: "Portofolio Utama",
    url: "/portofolio",
    icon: <IconBriefcase size={24} />,
    description: "Jelajahi proyek, pengalaman, dan keahlian saya.",
    highlight: true,
  },
  {
    title: "GitHub",
    url: "https://github.com/Reno11052009",
    icon: <IconBrandGithub size={24} />,
    description: "Lihat repositori dan kontribusi kode saya.",
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/reno110509/",
    icon: <IconBrandInstagram size={24} />,
    description: "Ikuti keseharian saya.",
  },
  {
    title: "Email Saya",
    url: "mailto:reno@renoreno.online",
    icon: <IconMail size={24} />,
    description: "Kirim email untuk berkolaborasi.",
  },
];

export default function LinkBio() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } },
  };

  return (
    <div className="min-h-screen bg-black text-zinc-100 flex flex-col items-center py-20 px-4 relative overflow-hidden">
      {/* Background decoration (non-gradient, solid shapes) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Menggunakan blur ekstrim dari warna solid, tanpa linear-gradient atau radial-gradient */}
        <div className="absolute top-[-20%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-900 opacity-30 blur-[150px]" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[50vw] h-[50vw] rounded-full bg-zinc-800 opacity-20 blur-[150px]" />
      </div>

      <motion.div 
        className="w-full max-w-2xl z-10 flex flex-col items-center relative"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Profile Section */}
        <motion.div variants={itemVariants} className="flex flex-col items-center mb-12 text-center">
          <div className="relative w-32 h-32 mb-6 rounded-full overflow-hidden border-2 border-zinc-700 bg-zinc-900 p-1 group">
             <div className="w-full h-full rounded-full bg-zinc-950 flex items-center justify-center text-5xl font-bold text-zinc-400 overflow-hidden relative transition-all duration-500 group-hover:bg-zinc-800 group-hover:text-zinc-200">
               R
             </div>
          </div>
          <h1 className="text-4xl font-bold tracking-tight mb-3 text-white">Arsya Mayreno Arnaldo</h1>
          <Typewriter roles={["Web Developer", "Software Engineer Student"]} />
        </motion.div>

        {/* Links Section */}
        <motion.div variants={containerVariants} className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <motion.div key={index} variants={itemVariants} className="w-full">
              <Link 
                href={link.url}
                target={link.url.startsWith("http") ? "_blank" : "_self"}
                className={`
                  group flex items-center p-4 sm:p-5 rounded-2xl transition-all duration-300
                  bg-zinc-900/50 backdrop-blur-xl border border-zinc-800/80
                  hover:bg-zinc-800/80 hover:border-zinc-600 hover:shadow-2xl hover:shadow-black hover:-translate-y-1
                  ${link.highlight ? "border-zinc-500 bg-zinc-800/40" : ""}
                `}
              >
                <div className={`
                  flex items-center justify-center w-14 h-14 rounded-xl bg-zinc-950/80 border border-zinc-800/50
                  transition-all duration-300 group-hover:scale-110 group-hover:rotate-3
                  ${link.highlight ? "text-white shadow-lg shadow-black/50" : "text-zinc-400 group-hover:text-white group-hover:border-zinc-700 group-hover:bg-zinc-900"}
                `}>
                  {link.icon}
                </div>
                
                <div className="ml-5 flex-1">
                  <h2 className={`font-semibold text-lg sm:text-xl transition-colors duration-300 ${link.highlight ? "text-white" : "text-zinc-200 group-hover:text-white"}`}>
                    {link.title}
                  </h2>
                  <p className="text-sm sm:text-base text-zinc-500 mt-1 transition-colors duration-300 group-hover:text-zinc-400">
                    {link.description}
                  </p>
                </div>

                <div className="text-zinc-600 transition-all duration-300 group-hover:text-white group-hover:translate-x-2">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div variants={itemVariants} className="mt-16 text-center text-zinc-600 text-sm font-medium tracking-wide">
          <p>© {new Date().getFullYear()} Arsya Mayreno Arnaldo.</p>
        </motion.div>
      </motion.div>
    </div>
  );
}
