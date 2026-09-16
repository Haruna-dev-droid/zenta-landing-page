import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Home, Menu, X } from 'lucide-react'
import MagneticButton from './MagneticButton'

const LINKS = ['Services', 'How it works', 'Properties', 'About Us']
const SCRAMBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function ScrambleLink({ label }) {
  const [display, setDisplay] = useState(label)

  const onEnter = () => {
    let iteration = 0
    const original = label
    const interval = setInterval(() => {
      setDisplay(
        original
          .split('')
          .map((char, idx) => {
            if (char === ' ') return ' '
            if (idx < iteration) return original[idx]
            return SCRAMBLE_CHARS[Math.floor(Math.random() * SCRAMBLE_CHARS.length)]
          })
          .join('')
      )
      iteration += 1 / 2.2
      if (iteration >= original.length) {
        clearInterval(interval)
        setDisplay(original)
      }
    }, 28)
  }

  return (
    <a
      href="#"
      onMouseEnter={onEnter}
      className="text-[15px] md:text-[17px] font-medium text-ink hover:text-forest transition-colors tabular-nums"
    >
      {display}
    </a>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? 'py-3 bg-cream/80 backdrop-blur-md shadow-[0_1px_0_rgba(0,66,56,0.08)]' : 'py-6 bg-transparent'
      }`}
    >
      <div className="max-w-[1520px] mx-auto px-8 md:px-12 lg:px-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" data-cursor-hover>
          <motion.span
            whileHover={{ rotate: -14, scale: 1.1 }}
            transition={{ type: 'spring', stiffness: 300, damping: 12 }}
            className="grid place-items-center w-9 h-9 rounded-xl bg-green text-forest"
          >
            <Home size={20} strokeWidth={2.4} />
          </motion.span>
          <span className="font-display font-semibold text-xl tracking-tight text-green">zenta.</span>
        </a>

        <nav className="hidden md:flex items-center gap-10">
          {LINKS.map((l) => (
            <ScrambleLink key={l} label={l} />
          ))}
        </nav>

        <MagneticButton
          className="hidden md:inline-flex bg-green text-ink font-medium text-[15px] px-6 py-3 rounded-xl hover:bg-forest hover:text-cream"
          data-cursor-hover
        >
          Contact
        </MagneticButton>

        <button
          className="md:hidden text-forest"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          data-cursor-hover
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: 'auto', opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          className="md:hidden overflow-hidden bg-cream/95 backdrop-blur-md"
        >
          <div className="flex flex-col gap-5 px-6 py-6">
            {LINKS.map((l) => (
              <a key={l} href="#" className="text-lg font-medium text-forest">
                {l}
              </a>
            ))}
            <MagneticButton className="bg-green text-ink font-medium px-6 py-3 rounded-xl w-fit">
              Contact
            </MagneticButton>
          </div>
        </motion.div>
      )}
    </motion.header>
  )
}
