import React, { useState } from 'react'
import './Contact.css'
import { motion } from 'framer-motion'

export default function Contact(){
  const [form,setForm] = useState({name:'',email:'',message:''})
  const [sent,setSent] = useState(false)

  const onSubmit = (e)=>{
    e.preventDefault()
    // simulate success
    setTimeout(()=> setSent(true),500)
    setForm({name:'',email:'',message:''})
  }

  return (
    <section id="contact" className="section">
      <motion.div className="container section--narrow" initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.6}}>
        <h2>Contact</h2>
        {!sent ? (
          <form className="contact__form" onSubmit={onSubmit}>
            <input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} placeholder="Name" required />
            <input value={form.email} onChange={e=>setForm({...form,email:e.target.value})} placeholder="Email" type="email" required />
            <textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} placeholder="Message" rows={5} required />
            <button className="btn" type="submit">Send message</button>
          </form>
        ) : (
          <div className="contact__success">Thanks — I'll get back to you shortly.</div>
        )}
      </motion.div>
    </section>
  )
}
