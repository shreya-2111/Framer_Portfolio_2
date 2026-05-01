import { useEffect, useRef, lazy, Suspense } from 'react'
import { gsap } from 'gsap'
import { ArrowDown, Code2, Link, MessageCircle } from 'lucide-react'
import { personalInfo } from '../data/portfolio'

const HeroScene = lazy(() => import('./HeroScene'))

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null)
  const headingRef = useRef<HTMLHeadingElement>(null)
  const subRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)
  const socialRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 2.8 })

    tl.fromTo(
      headingRef.current?.querySelectorAll('.word') ?? [],
      { y: 80, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.9, stagger: 0.1, ease: 'power4.out' }
    )
      .fromTo(
        subRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, ease: 'power3.out' },
        '-=0.4'
      )
      .fromTo(
        ctaRef.current,
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
      .fromTo(
        socialRef.current,
        { x: -20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.6, ease: 'power3.out' },
        '-=0.3'
      )
  }, [])

  const words = personalInfo.tagline.split(' ')

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* 3D Background */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/20 to-[#050508] pointer-events-none" />
      <div className="absolute inset-0 bg-radial-gradient pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 40%, rgba(108,99,255,0.08) 0%, transparent 70%)' }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-white/60">
          <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
          Available for new projects
        </div>

        <h1
          ref={headingRef}
          className="font-['Space_Grotesk'] text-5xl sm:text-7xl lg:text-8xl font-bold leading-tight mb-6 overflow-hidden"
        >
          {words.map((word, i) => (
            <span key={i} className="word inline-block mr-4 last:mr-0">
              {i === 2 || i === 3 ? (
                <span className="gradient-text glow-text">{word}</span>
              ) : (
                word
              )}
            </span>
          ))}
        </h1>

        <p
          ref={subRef}
          className="text-lg sm:text-xl text-white/50 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.bio.split('.')[0]}.
        </p>

        <div ref={ctaRef} className="flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full font-semibold text-white transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(108,99,255,0.4)]"
            style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)' }}
          >
            View My Work
          </button>
          <a
            href={personalInfo.resumeUrl}
            className="px-8 py-4 rounded-full font-semibold border border-white/20 text-white/80 hover:border-white/50 hover:text-white transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </div>

        {/* Social links */}
        <div ref={socialRef} className="flex items-center justify-center gap-5 mt-12">
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
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white/50 hover:text-white hover:border-[#6c63ff]/50 transition-all duration-300 hover:scale-110"
            >
              <Icon size={18} />
            </a>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30 animate-bounce">
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ArrowDown size={16} />
      </div>
    </section>
  )
}
