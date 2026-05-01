import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { skills } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)


const techIcons = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Three.js',
  'PostgreSQL', 'Docker', 'AWS', 'GraphQL', 'Redis',
  'Figma', 'Git', 'Next.js', 'MongoDB', 'Tailwind',
]

export default function Skills() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const barsRef = useRef<HTMLDivElement>(null)

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

      // Animate skill bars
      const bars = barsRef.current?.querySelectorAll('.skill-bar-fill') ?? []
      bars.forEach((bar) => {
        const target = (bar as HTMLElement).dataset.level ?? '0'
        gsap.fromTo(
          bar,
          { width: '0%' },
          {
            width: `${target}%`,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: { trigger: bar, start: 'top 85%' },
          }
        )
      })

      gsap.fromTo(
        barsRef.current?.querySelectorAll('.skill-card') ?? [],
        { y: 30, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.6, stagger: 0.08, ease: 'power3.out',
          scrollTrigger: { trigger: barsRef.current, start: 'top 80%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-32 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(108,99,255,0.05) 0%, transparent 70%)' }}
      />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase mb-4">Expertise</p>
          <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold text-white">
            Skills & <span className="gradient-text">Technologies</span>
          </h2>
        </div>

        <div ref={barsRef} className="grid md:grid-cols-2 gap-6 mb-20">
          {skills.map((skill) => (
            <div key={skill.name} className="skill-card glass rounded-2xl p-6">
              <div className="flex justify-between items-center mb-3">
                <span className="text-white font-medium text-sm">{skill.name}</span>
                <span className="text-[#6c63ff] text-sm font-semibold">{skill.level}%</span>
              </div>
              <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                <div
                  className="skill-bar-fill h-full rounded-full"
                  data-level={skill.level}
                  style={{ background: 'linear-gradient(90deg, #6c63ff, #00d4ff)', width: '0%' }}
                />
              </div>
              <span className="text-white/30 text-xs mt-2 block">{skill.category}</span>
            </div>
          ))}
        </div>

        {/* Tech cloud */}
        <div className="text-center">
          <p className="text-white/30 text-sm mb-8 tracking-widest uppercase">Also worked with</p>
          <div className="flex flex-wrap justify-center gap-3">
            {techIcons.map((tech) => (
              <span
                key={tech}
                className="px-4 py-2 glass rounded-full text-sm text-white/60 hover:text-white hover:border-[#6c63ff]/40 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
