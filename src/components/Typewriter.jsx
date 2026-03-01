import React, { useEffect, useState } from 'react'

export default function Typewriter({ roles = [] , speed=120, hold=1400}){
  const [idx,setIdx] = useState(0)
  const [subidx,setSubidx] = useState(0)
  const [reverse,setReverse] = useState(false)

  useEffect(()=>{
    if(!roles.length) return
    const current = roles[idx]
    let timeout = null
    if(!reverse && subidx<=current.length){
      timeout = setTimeout(()=> setSubidx(s=>s+1), speed)
    } else if(reverse && subidx>=0){
      timeout = setTimeout(()=> setSubidx(s=>s-1), speed/2)
    } else if(subidx === current.length){
      timeout = setTimeout(()=> setReverse(true), hold)
    } else if(reverse && subidx===0){
      setReverse(false)
      setIdx(i=> (i+1) % roles.length)
    }
    return ()=> clearTimeout(timeout)
  },[roles,idx,subidx,reverse,speed,hold])

  return (
    <span style={{whiteSpace:'nowrap'}} className="typewriter">
      <strong style={{color:'var(--accent)'}}>{roles[idx].slice(0,subidx)}</strong>
      <span className="cursor">|</span>
    </span>
  )
}
