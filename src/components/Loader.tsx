import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

interface LoaderProps {
  onComplete: () => void
}

export default function Loader({ onComplete }: LoaderProps) {
  const loaderRef = useRef<HTMLDivElement>(null)
  const counterRef = useRef<HTMLSpanElement>(null)
  const barRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline()
    const counter = { val: 0 }

    tl.to(counter, {
      val: 100,
      duration: 2,
      ease: 'power2.inOut',
      onUpdate() {
        if (counterRef.current) {
          counterRef.current.textContent = Math.round(counter.val).toString()
        }
        if (barRef.current) {
          barRef.current.style.width = `${counter.val}%`
        }
      },
    })
      .to(loaderRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power4.inOut',
        delay: 0.3,
        onComplete,
      })
  }, [onComplete])

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#050508]"
    >
      <div className="relative mb-8">
        <span className="font-['Space_Grotesk'] text-8xl font-bold gradient-text glow-text">
          <span ref={counterRef}>0</span>
        </span>
        <span className="font-['Space_Grotesk'] text-4xl font-bold text-white/30 ml-1">%</span>
      </div>

      <div className="w-64 h-px bg-white/10 rounded-full overflow-hidden">
        <div
          ref={barRef}
          className="h-full rounded-full"
          style={{ width: '0%', background: 'linear-gradient(90deg, #6c63ff, #00d4ff)' }}
        />
      </div>

      <p className="mt-6 text-white/30 text-sm tracking-[0.3em] uppercase font-light">
        Loading Experience
      </p>
    </div>
  )
}
