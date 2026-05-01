import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Briefcase } from 'lucide-react'
import { experience } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const timelineRef = useRef<HTMLDivElement>(null)

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
        timelineRef.current?.querySelectorAll('.exp-item') ?? [],
        { x: -40, opacity: 0 },
        {
          x: 0, opacity: 1, duration: 0.7, stagger: 0.2, ease: 'power3.out',
          scrollTrigger: { trigger: timelineRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="py-32 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase mb-4">Career</p>
          <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold text-white">
            Work <span className="gradient-text">Experience</span>
          </h2>
        </div>

        <div ref={timelineRef} className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-[#6c63ff] via-[#00d4ff] to-transparent" />

          <div className="flex flex-col gap-8">
            {experience.map((exp, i) => (
              <div key={i} className="exp-item relative pl-16">
                {/* Dot */}
                <div className="absolute left-4 top-6 w-4 h-4 rounded-full border-2 border-[#6c63ff] bg-[#050508] -translate-x-1/2 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#6c63ff]" />
                </div>

                <div className="glass rounded-2xl p-6 hover:glow transition-all duration-300 group">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-3">
                    <div>
                      <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:gradient-text transition-all">
                        {exp.role}
                      </h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Briefcase size={14} className="text-[#6c63ff]" />
                        <span className="text-[#6c63ff] font-medium text-sm">{exp.company}</span>
                      </div>
                    </div>
                    <span className="px-3 py-1 glass rounded-full text-xs text-white/50 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </div>

                  <p className="text-white/50 text-sm leading-relaxed mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-3 py-1 rounded-full text-xs text-[#00d4ff] border border-[#00d4ff]/20 bg-[#00d4ff]/5"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
