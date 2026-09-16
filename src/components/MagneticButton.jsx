import { motion } from 'framer-motion'
import { useMagnetic } from '../hooks/useMagnetic'

/**
 * A pill button that pulls toward the cursor when hovered (magnetic effect)
 * and ripples a soft glow ring. Renders as `as` (button/a), passthrough props.
 */
export default function MagneticButton({
  children,
  className = '',
  strength = 18,
  as: Tag = 'button',
  glow = false,
  ...props
}) {
  const { ref, style, onMouseMove, onMouseLeave } = useMagnetic(strength)
  const MotionTag = motion(Tag)

  return (
    <MotionTag
      ref={ref}
      style={style}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      whileTap={{ scale: 0.94 }}
      whileHover={{ scale: 1.045 }}
      className={`${className} ${glow ? 'animate-pulseGlow' : ''} relative inline-flex items-center justify-center transition-colors duration-300`}
      {...props}
    >
      {children}
    </MotionTag>
  )
}
