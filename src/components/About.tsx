import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { MapPin, Mail, Download } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

const stats = [
  { value: '5+', label: 'Years Experience' },
  { value: '40+', label: 'Projects Shipped' },
  { value: '15+', label: 'Happy Clients' },
  { value: '99%', label: 'Client Satisfaction' },
]

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLDivElement>(null)
  const statsRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        imageRef.current,
        { x: -60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        textRef.current,
        { x: 60, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 1, ease: 'power3.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
        }
      )
      gsap.fromTo(
        statsRef.current?.querySelectorAll('.stat-item') ?? [],
        { y: 40, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out',
          scrollTrigger: { trigger: statsRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Visual side */}
          <div ref={imageRef} className="relative">
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full border border-[#6c63ff]/10 animate-spin" style={{ animationDuration: '20s' }} />
              <div className="absolute inset-4 rounded-full border border-[#00d4ff]/10 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }} />

              {/* Avatar placeholder */}
              <div className="absolute inset-8 rounded-full glass flex items-center justify-center overflow-hidden glow">
                <div
                  className="w-full h-full rounded-full"
                  style={{
                    background: 'linear-gradient(135deg, #6c63ff22, #00d4ff22)',
                  }}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-['Space_Grotesk'] text-8xl font-bold gradient-text">
                      {personalInfo.name.charAt(0)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -bottom-4 -right-4 glass px-4 py-3 rounded-2xl">
                <p className="text-xs text-white/50">Currently at</p>
                <p className="text-sm font-semibold text-white">Vercel</p>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div ref={textRef}>
            <p className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase mb-4">About Me</p>
            <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Turning ideas into{' '}
              <span className="gradient-text">digital reality</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              {personalInfo.bio}
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              When I'm not coding, you'll find me exploring generative art, contributing to open source, or hiking trails in the Bay Area.
            </p>

            <div className="flex flex-col gap-3 mb-8">
              <div className="flex items-center gap-3 text-white/50">
                <MapPin size={16} className="text-[#6c63ff]" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
              <div className="flex items-center gap-3 text-white/50">
                <Mail size={16} className="text-[#6c63ff]" />
                <span className="text-sm">{personalInfo.email}</span>
              </div>
            </div>

            <a
              href={personalInfo.resumeUrl}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-[#6c63ff]/50 text-[#6c63ff] hover:bg-[#6c63ff] hover:text-white transition-all duration-300 text-sm font-medium"
            >
              <Download size={16} />
              Download Resume
            </a>
          </div>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-24">
          {stats.map((stat) => (
            <div key={stat.label} className="stat-item glass rounded-2xl p-6 text-center glow">
              <p className="font-['Space_Grotesk'] text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-white/50 text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
