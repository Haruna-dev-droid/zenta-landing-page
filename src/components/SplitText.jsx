import { motion } from 'framer-motion'

/**
 * Splits text into words and reveals them with a staggered
 * slide + fade + slight rotation as the block scrolls into view.
 */
export default function SplitText({ text, as: Tag = 'p', className = '', delay = 0, stagger = 0.045, viewportAmount = 0.6 }) {
  const words = text.split(' ')

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: delay },
    },
  }

  const word = {
    hidden: { y: '110%', opacity: 0, rotate: 4 },
    show: {
      y: '0%',
      opacity: 1,
      rotate: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <Tag className={className}>
      <motion.span
        className="inline"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: viewportAmount }}
      >
        {words.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-top pb-[0.15em] mr-[0.28em] last:mr-0">
            <motion.span className="inline-block" variants={word}>
              {w}
            </motion.span>
          </span>
        ))}
      </motion.span>
    </Tag>
  )
}
