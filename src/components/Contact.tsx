import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Send, Mail, MapPin, Code2, Link, MessageCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const formRef = useRef<HTMLFormElement>(null)
  const infoRef = useRef<HTMLDivElement>(null)

  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, ease: 'power3.out',
          scrollTrigger: { trigger: titleRef.current, start: 'top 80%' },
        }
      )
      gsap.fromTo(
        [infoRef.current, formRef.current],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: formRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Simulate sending — replace with your API call
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('sent')
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setStatus('idle'), 4000)
  }

  return (
    <section id="contact" ref={sectionRef} className="py-32 relative">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.06) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase mb-4">Get In Touch</p>
          <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold text-white">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            Have a project in mind? I'd love to hear about it. Send me a message and let's make something great.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">
          {/* Info */}
          <div ref={infoRef} className="lg:col-span-2 flex flex-col gap-6">
            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <Mail size={18} className="text-[#6c63ff]" />
                <span className="text-white/50 text-sm">Email</span>
              </div>
              <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-[#6c63ff] transition-colors text-sm">
                {personalInfo.email}
              </a>
            </div>

            <div className="glass rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-2">
                <MapPin size={18} className="text-[#6c63ff]" />
                <span className="text-white/50 text-sm">Location</span>
              </div>
              <p className="text-white text-sm">{personalInfo.location}</p>
            </div>

            <div className="glass rounded-2xl p-6">
              <p className="text-white/50 text-sm mb-4">Find me on</p>
              <div className="flex gap-4">
                {[
                  { icon: Code2, href: personalInfo.github, label: 'GitHub' },
                  { icon: Link, href: personalInfo.linkedin, label: 'LinkedIn' },
                  { icon: MessageCircle, href: personalInfo.twitter, label: 'Twitter' },
                ].map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-[#6c63ff]/50 transition-all duration-300"
                  >
                    <Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="lg:col-span-3 glass rounded-3xl p-8 flex flex-col gap-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="block text-white/50 text-sm mb-2">Name</label>
                <input
                  id="name"
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white/50 text-sm mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-white/50 text-sm mb-2">Message</label>
              <textarea
                id="message"
                required
                rows={6}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Tell me about your project..."
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 text-sm focus:outline-none focus:border-[#6c63ff]/50 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status !== 'idle'}
              className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(108,99,255,0.3)] disabled:opacity-60 disabled:cursor-not-allowed"
              style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
            >
              {status === 'sending' ? (
                <>
                  <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Sending...
                </>
              ) : status === 'sent' ? (
                'Message Sent!'
              ) : (
                <>
                  <Send size={18} />
                  Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
