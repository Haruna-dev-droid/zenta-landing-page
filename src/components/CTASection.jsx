import { motion } from "framer-motion";
import { ctaEllipse } from "../assets/figmaAssets";
import MagneticButton from "./MagneticButton";

const LINE1 = "Wherever you're going,";
const LINE2 = "feel at home.";

function WobbleLine({ text, baseDelay = 0 }) {
  return (
    <span className="block">
      {text.split("").map((ch, i) => (
        <motion.span
          key={i}
          className="inline-block"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: baseDelay + i * 0.025, duration: 0.5 }}
          animate={{ y: [0, -6, 0, 4, 0] }}
          style={{ animationDelay: `${i * 0.08}s` }}
        >
          <motion.span
            className="inline-block"
            animate={{ y: [0, -5, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.06,
              ease: "easeInOut",
            }}
          >
            {ch === " " ? "\u00A0" : ch}
          </motion.span>
        </motion.span>
      ))}
    </span>
  );
}

export default function CTASection() {
  return (
    <section className="relative py-32 md:py-44 bg-gradient-to-b from-[#f2faf8] to-green overflow-hidden text-center">
      <motion.img
        src={ctaEllipse}
        alt=""
        className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-24 w-[700px] md:w-[900px] opacity-70"
        animate={{ scale: [1, 1.06, 1], opacity: [0.7, 0.9, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative max-w-[1280px] mx-auto px-10 md:px-16 lg:px-24">
        <h2 className="font-display font-semibold text-forest text-4xl md:text-[72px] leading-[1] tracking-tight">
          <WobbleLine text={LINE1} />
          <WobbleLine text={LINE2} baseDelay={0.35} />
        </h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-6 text-lg md:text-[30px] font-display text-forest leading-tight tracking-tight"
        >
          Your next comfortable stay is closer than you think.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{
            delay: 0.9,
            duration: 0.6,
            type: "spring",
            stiffness: 180,
            damping: 16,
          }}
          className="mt-10 flex justify-center"
        >
          <MagneticButton
            className="bg-forest text-cream font-medium text-base md:text-[24px] px-6 md:px-9 py-3 md:py-4 rounded-xl hover:bg-ink"
            strength={26}
            glow
            data-cursor-hover
          >
            Book with ease
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}
