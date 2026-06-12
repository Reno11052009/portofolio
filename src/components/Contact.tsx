'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  IconBrandGithub,
  IconBrandInstagram,
  IconMail,
  IconCopy,
  IconCheck,
  IconSend,
  IconLoader2
} from '@tabler/icons-react';
import BorderGlow from './BorderGlow';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('arsyamayreno480@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    setErrorMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to send message.');
      }

      setFormStatus('success');
    } catch (error: any) {
      console.error('Contact form error:', error);
      setErrorMessage(error?.message || 'Something went wrong. Please try again later.');
      setFormStatus('error');
    }
  };

  return (
    <section id="contact" className="py-4 md:py-8">
      <motion.div
        className="w-full max-w-[900px] mx-auto px-4 md:px-5"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <BorderGlow
          borderRadius={16}
          backgroundColor="var(--surface)"
          glowColor="124 92 255"
          glowRadius={40}
          glowIntensity={0.6}
          colors={['#7c5cff', '#5dd3ff', '#38bdf8']}
          className="w-full"
        >
          <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
            {/* Left Side: Let's Connect Info */}
            <div className="flex flex-col justify-between space-y-6">
              {/* <div className="space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-medium w-fit">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Available for freelance & projects
                </div>
                
                <h3 className="text-2xl font-bold text-white tracking-tight">Let's build something together</h3>
                <p className="text-neutral-400 text-sm leading-relaxed">
                  Have an exciting project in mind, a freelance opportunity, or just want to connect? Send me a message and I'll get back to you as soon as possible.
                </p>
              </div> */}

              {/* Social Grid */}
              <div className="space-y-3">
                {/* Email Card */}
                <div className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 transition-all duration-200">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-[#7c5cff]/10 text-[#7c5cff]">
                      <IconMail className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Email</span>
                      <span className="text-sm font-medium text-white truncate max-w-[170px] sm:max-w-none">
                        reno@renoreno.my.id
                      </span>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="p-2 rounded-lg hover:bg-white/5 text-neutral-400 hover:text-white transition-all cursor-pointer"
                    title="Copy Email Address"
                  >
                    {copied ? (
                      <IconCheck className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <IconCopy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {/* GitHub Card */}
                <a
                  href="https://github.com/Reno11052009"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200 group no-underline"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-neutral-800 text-neutral-200">
                      <IconBrandGithub className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">GitHub</span>
                      <span className="text-sm font-medium text-white">Reno11052009</span>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors pr-2">
                    Visit →
                  </div>
                </a>

                {/* Instagram Card */}
                <a
                  href="https://www.instagram.com/reno110509/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10 transition-all duration-200 group no-underline"
                >
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-lg bg-pink-500/10 text-pink-400">
                      <IconBrandInstagram className="w-5 h-5" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] uppercase tracking-wider text-neutral-500 font-semibold">Instagram</span>
                      <span className="text-sm font-medium text-white">@reno110509</span>
                    </div>
                  </div>
                  <div className="text-xs text-neutral-500 group-hover:text-neutral-300 transition-colors pr-2">
                    Follow →
                  </div>
                </a>
              </div>
            </div>

            {/* Right Side: Message Form */}
            <div className="border-t md:border-t-0 md:border-l border-white/5 pt-6 md:pt-0 md:pl-8 flex flex-col justify-center min-h-[300px]">
              <AnimatePresence mode="wait">
                {formStatus === 'success' ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="flex flex-col items-center justify-center text-center py-6 h-full space-y-4"
                  >
                    <div className="w-14 h-14 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
                      <IconCheck className="w-7 h-7" />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-lg font-bold text-white">Message Sent!</h4>
                      <p className="text-xs text-neutral-400 max-w-[250px] leading-relaxed">
                        Thank you for reaching out! I have received your message and will get back to you shortly.
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() => {
                        setFormStatus('idle');
                        setFormData({ name: '', email: '', message: '' });
                      }}
                      className="text-xs text-[#7c5cff] hover:underline cursor-pointer font-medium pt-2"
                    >
                      Send another message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-4"
                  >
                    <div className="space-y-1">
                      <label htmlFor="name" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Your name"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/5 focus:border-[#7c5cff]/40 focus:bg-white/10 text-white placeholder-neutral-500 outline-none transition-all duration-200 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="your.email@example.com"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/5 focus:border-[#7c5cff]/40 focus:bg-white/10 text-white placeholder-neutral-500 outline-none transition-all duration-200 text-xs"
                      />
                    </div>

                    <div className="space-y-1">
                      <label htmlFor="message" className="block text-[10px] font-bold uppercase tracking-wider text-neutral-400">
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="What do you want to talk about?"
                        className="w-full px-3.5 py-2.5 rounded-lg bg-white/5 border border-white/5 focus:border-[#7c5cff]/40 focus:bg-white/10 text-white placeholder-neutral-500 outline-none resize-none transition-all duration-200 text-xs"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <div className="p-3 rounded-lg bg-red-500/10 border border-red-500/20 text-red-400 text-xs flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-red-400 shrink-0 animate-pulse" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className="w-full py-2.5 px-4 rounded-lg bg-[#7c5cff] hover:bg-[#6c4be0] text-white font-medium transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-not-allowed text-xs shadow-lg shadow-[#7c5cff]/10"
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <IconLoader2 className="w-3.5 h-3.5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <IconSend className="w-3.5 h-3.5" />
                          Send Message
                        </>
                      )}
                    </button>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </div>
        </BorderGlow>
      </motion.div>
    </section>
  );
}
