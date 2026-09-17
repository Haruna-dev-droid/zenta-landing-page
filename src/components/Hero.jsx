import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { heroHouseImage } from "../assets/figmaAssets";
import MagneticButton from "./MagneticButton";
import { useTilt } from "../hooks/useTilt";

const WORD = "zenta.";

const letterVariants = {
  hidden: { y: 160, opacity: 0, rotate: 8 },
  show: (i) => ({
    y: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      delay: 0.5 + i * 0.06,
      duration: 0.9,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

function Pill({ children, className, delay = 0, dark = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.4, y: 30 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{
        delay,
        duration: 0.7,
        type: "spring",
        stiffness: 180,
        damping: 14,
      }}
      whileHover={{ scale: 1.12, rotate: -3 }}
      className={`absolute z-20 px-5 py-2.5 rounded-xl font-medium text-sm md:text-base shadow-lg animate-float ${
        dark ? "bg-forest text-cream" : "bg-green text-ink"
      } ${className}`}
      style={{ animationDelay: `${delay}s` }}
      data-cursor-hover
    >
      {children}
    </motion.div>
  );
}

export default function Hero() {
  const sectionRef = useRef(null);
  const tilt = useTilt(6);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], [0, 160]);
  const wordmarkY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0.15]);

  return (
    <section
      id="top"
      ref={sectionRef}
      className="relative bg-cream overflow-hidden pt-40 pb-24 md:pt-48 md:pb-32"
    >
      {/* Ambient drifting brand-green glow, purely decorative */}
      <div className="pointer-events-none absolute -top-40 right-[-10%] w-[560px] h-[560px] rounded-full bg-green/25 blur-[110px] animate-blobMorph" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[380px] h-[380px] rounded-full bg-mint blur-[90px] animate-floatSlow" />

      <div className="relative max-w-[1520px] mx-auto px-10 md:px-16 lg:px-24">
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.7 }}
          className="text-center text-green font-display text-xl md:text-3xl tracking-tight mb-2"
        >
          Find a place that feels like yours.
        </motion.p>

        <motion.h1
          style={{ y: wordmarkY, opacity: wordmarkOpacity }}
          className="font-display font-semibold text-center leading-[0.86] text-[16vw] md:text-[11vw] lg:text-[180px] text-ink select-none -mt-2 md:-mt-4"
          aria-label={WORD}
        >
          {WORD.split("").map((ch, i) => (
            <motion.span
              key={i}
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate="show"
              className="inline-block"
              whileHover={{
                y: -18,
                color: "#00ea80",
                transition: { duration: 0.25 },
              }}
            >
              {ch}
            </motion.span>
          ))}
        </motion.h1>

        <div className="mt-8 md:mt-12 flex flex-col items-center justify-center gap-8 md:gap-10">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <p className="flex items-center justify-center gap-3 md:gap-6 whitespace-nowrap font-display text-forest text-sm md:text-[24px] leading-[1.25] tracking-tight">
              <span>Thousands of stays.</span>
              <span>Flexible booking.</span>
              <span>Made for you.</span>
            </p>
            <MagneticButton
              className="mt-5 bg-forest text-green font-medium text-sm md:text-base px-6 py-3 rounded-xl hover:bg-ink mx-auto md:mx-0"
              glow
              data-cursor-hover
            >
              Get Started
            </MagneticButton>
          </motion.div>

          {/* House image with floating labelled pills outside the frame */}
          <motion.div
            ref={tilt.ref}
            onMouseMove={tilt.onMouseMove}
            onMouseLeave={tilt.onMouseLeave}
            style={{ ...tilt.style, y: imgY }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-[280px] h-[320px] md:w-[700px] md:h-[400px] overflow-visible shadow-2xl shadow-forest/20"
          >
            <img
              src={heroHouseImage}
              alt="Modern green home with warm interior lighting"
              className="w-full h-full object-cover rounded-[42px]"
              loading="eager"
            />
            <Pill className="-top-3 left-[-14px] md:left-[-18px]" delay={0.9}>
              Search
            </Pill>
            <Pill
              className="top-[42%] left-[-24px] md:left-[-34px]"
              delay={1.1}
            >
              Comfort
            </Pill>
            <Pill
              className="bottom-8 right-[-20px] md:right-[-28px]"
              delay={1.3}
              dark
            >
              Stay
            </Pill>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
