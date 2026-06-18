'use client';

import React, { useEffect, useState } from 'react'

interface TypewriterProps {
  roles?: string[];
  speed?: number;
  hold?: number;
}

export default function Typewriter({ roles = [], speed = 120, hold = 1400 }: TypewriterProps) {
  const [idx, setIdx] = useState(0)
  const [subidx, setSubidx] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if (!roles.length) return
    const current = roles[idx]

    if (!reverse && subidx < current.length) {
      const timeout = setTimeout(() => setSubidx(s => s + 1), speed)
      return () => clearTimeout(timeout)
    }
    
    if (!reverse && subidx === current.length) {
      const timeout = setTimeout(() => setReverse(true), hold)
      return () => clearTimeout(timeout)
    }
    
    if (reverse && subidx > 0) {
      const timeout = setTimeout(() => setSubidx(s => s - 1), speed / 2)
      return () => clearTimeout(timeout)
    }
    
    if (reverse && subidx === 0) {
      setReverse(false)
      setIdx(i => (i + 1) % roles.length)
    }
  }, [roles, idx, subidx, reverse, speed, hold])

  if (!roles.length) return null

  const currentRole = roles[idx] || ''
  const displayText = currentRole.slice(0, subidx)

  return (
    <span className="typewriter inline-flex items-center font-bold text-xl md:text-2xl tracking-wide">
      <style>{`
        @keyframes typewriter-blink {
          from, to { opacity: 1; }
          50% { opacity: 0; }
        }
        .typewriter-cursor {
          animation: typewriter-blink 0.8s step-end infinite;
        }
      `}</style>
      <span className="bg-gradient-to-r from-[#a78bfa] via-[#7c5cff] to-[#38bdf8] bg-clip-text text-transparent drop-shadow-[0_2px_8px_rgba(124,92,255,0.2)]">
        {displayText}
      </span>
      <span className="typewriter-cursor ml-1 text-[#7c5cff] font-light">|</span>
    </span>
  )
}
