import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Code2, ArrowUpRight } from 'lucide-react'
import { projects } from '../data/portfolio'

gsap.registerPlugin(ScrollTrigger)

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const gridRef = useRef<HTMLDivElement>(null)
  const [hoveredId, setHoveredId] = useState<number | null>(null)

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
        gridRef.current?.querySelectorAll('.project-card') ?? [],
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out',
          scrollTrigger: { trigger: gridRef.current, start: 'top 75%' },
        }
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={titleRef} className="text-center mb-16">
          <p className="text-[#6c63ff] text-sm font-medium tracking-widest uppercase mb-4">Portfolio</p>
          <h2 className="font-['Space_Grotesk'] text-4xl lg:text-5xl font-bold text-white">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/40 mt-4 max-w-xl mx-auto">
            A selection of projects I've built — from SaaS platforms to creative experiments.
          </p>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="project-card group relative glass rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-[1.02] hover:glow"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-[#050508]/40 to-transparent" />

                {/* Hover overlay */}
                <div
                  className={`absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ background: 'rgba(108,99,255,0.15)' }}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label="GitHub"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <Code2 size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                    aria-label="Live demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {project.featured && (
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium"
                    style={{ background: 'linear-gradient(135deg, #6c63ff, #00d4ff)', color: 'white' }}
                  >
                    Featured
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-['Space_Grotesk'] text-xl font-bold text-white group-hover:gradient-text transition-all">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={20}
                    className={`text-white/30 transition-all duration-300 ${
                      hoveredId === project.id ? 'text-[#6c63ff] translate-x-1 -translate-y-1' : ''
                    }`}
                  />
                </div>
                <p className="text-white/50 text-sm leading-relaxed mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs text-[#6c63ff] border border-[#6c63ff]/20 bg-[#6c63ff]/5"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors text-sm"
          >
            <Code2 size={16} />
            View all projects on GitHub
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  )
}
