import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'
import { Menu, X } from 'lucide-react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    gsap.fromTo(
      navRef.current,
      { y: -80, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: 'power3.out', delay: 2.5 }
    )

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)

      // Update active section
      const sections = links.map((l) => document.getElementById(l.toLowerCase()))
      const scrollPos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (section && section.offsetTop <= scrollPos) {
          setActive(links[i])
          break
        }
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase())
    el?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'glass py-3' : 'py-5'
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <button
            onClick={() => scrollTo('home')}
            className="font-['Space_Grotesk'] text-xl font-bold gradient-text"
          >
            AR.
          </button>

          {/* Desktop links */}
          <ul className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <li key={link}>
                <button
                  onClick={() => scrollTo(link)}
                  className={`text-sm font-medium tracking-wide transition-all duration-300 relative group ${
                    active === link ? 'text-white' : 'text-white/50 hover:text-white'
                  }`}
                >
                  {link}
                  <span
                    className={`absolute -bottom-1 left-0 h-px transition-all duration-300 ${
                      active === link ? 'w-full bg-[#6c63ff]' : 'w-0 group-hover:w-full bg-[#6c63ff]'
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <button
            onClick={() => scrollTo('contact')}
            className="hidden md:block px-5 py-2 rounded-full text-sm font-medium border border-[#6c63ff]/50 text-[#6c63ff] hover:bg-[#6c63ff] hover:text-white transition-all duration-300"
          >
            Hire Me
          </button>

          {/* Mobile menu button */}
          <button
            className="md:hidden text-white/70 hover:text-white"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-40 bg-[#050508]/95 backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <ul className="flex flex-col items-center gap-8">
          {links.map((link) => (
            <li key={link}>
              <button
                onClick={() => scrollTo(link)}
                className="text-3xl font-bold text-white/70 hover:text-white transition-colors"
              >
                {link}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
