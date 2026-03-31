import React, { useEffect, useState } from 'react'

export default function Typewriter({ roles = [], speed=120, hold=1400 }){
  const [idx, setIdx] = useState(0)
  const [subidx, setSubidx] = useState(0)
  const [reverse, setReverse] = useState(false)

  useEffect(() => {
    if(!roles.length) return
    const current = roles[idx]

    if(!reverse && subidx < current.length){
      const timeout = setTimeout(() => setSubidx(s => s + 1), speed)
      return () => clearTimeout(timeout)
    }
    
    if(!reverse && subidx === current.length){
      const timeout = setTimeout(() => setReverse(true), hold)
      return () => clearTimeout(timeout)
    }
    
    if(reverse && subidx > 0){
      const timeout = setTimeout(() => setSubidx(s => s - 1), speed / 2)
      return () => clearTimeout(timeout)
    }
    
    if(reverse && subidx === 0){
      setReverse(false)
      setIdx(i => (i + 1) % roles.length)
    }
  }, [roles, idx, subidx, reverse, speed, hold])

  return (
    <span className="typewriter">
      {roles.map((role, i) => (
        <span key={i} style={{marginRight: '12px'}}>
          <strong style={{color: i === idx ? 'var(--accent)' : '#666'}}>
            {i === idx ? role.slice(0, subidx) : role}
          </strong>
          {i === idx && <span className="cursor">|</span>}
        </span>
      ))}
    </span>
  )
}