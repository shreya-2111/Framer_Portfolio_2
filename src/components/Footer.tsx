import { personalInfo } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="py-8 border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} {personalInfo.name}. Built with React + Three.js + GSAP.
        </p>
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="text-white/30 hover:text-white text-sm transition-colors"
        >
          Back to top ↑
        </button>
      </div>
    </footer>
  )
}
