import { useRef } from 'react'
import { useMotionValue, useSpring, useTransform } from 'framer-motion'

/**
 * Gives an element a 3D tilt that follows the cursor, for a
 * physical, "picked up" hover feel on cards.
 */
export function useTilt(max = 10) {
  const ref = useRef(null)
  const px = useMotionValue(0.5)
  const py = useMotionValue(0.5)

  const rotateX = useSpring(useTransform(py, [0, 1], [max, -max]), {
    stiffness: 260,
    damping: 20,
  })
  const rotateY = useSpring(useTransform(px, [0, 1], [-max, max]), {
    stiffness: 260,
    damping: 20,
  })
  const scale = useSpring(1, { stiffness: 260, damping: 20 })

  const onMouseMove = (e) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    px.set((e.clientX - rect.left) / rect.width)
    py.set((e.clientY - rect.top) / rect.height)
    scale.set(1.03)
  }

  const onMouseLeave = () => {
    px.set(0.5)
    py.set(0.5)
    scale.set(1)
  }

  return {
    ref,
    style: { rotateX, rotateY, scale, transformPerspective: 900 },
    onMouseMove,
    onMouseLeave,
  }
}
